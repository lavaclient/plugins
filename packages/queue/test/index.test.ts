/* imports */
import "dotenv/config";
import "../dist";
import "../register";

import { Client, Intents, MessageEmbed } from "discord.js";
import { Cluster } from "lavaclient";
import { LoadType } from "@lavaclient/types";

/* all the code lol */
const client = new Client({
    intents:
        Intents.FLAGS.GUILDS |
        Intents.FLAGS.GUILD_VOICE_STATES |
        Intents.FLAGS.GUILD_MESSAGES,
});

const node = new Cluster({
    sendGatewayPayload: (id, payload) =>
        client.guilds.cache.get(id)?.shard?.send(payload, true),
    nodes: [
        {
            id: "main",
            host: process.env.LAVALINK_HOST!,
            port: +process.env.LAVALINK_PORT!,
            password: process.env.LAVALINK_PASS!,
        },
    ],
});

client.on("ready", () => {
    console.log("im ready");
    node.connect(client.user?.id);
});

client.ws.on("VOICE_SERVER_UPDATE", data => node.handleVoiceUpdate(data));
client.ws.on("VOICE_STATE_UPDATE", data => node.handleVoiceUpdate(data));

/* test global events */
node.on("nodeConnect", node =>
    console.log(`socket "${node.id}" is now ready.`)
);
// @ts-expect-error
node.on("nodeQueueFinish", (_, queue) => queue.channel.send("Queue Finished!"));
// @ts-expect-error
node.on("nodeTrackStart", (_, queue, track) => queue.channel.send(`**${track.title}** has started!`));
// @ts-expect-error
node.on("nodeTrackEnd", (_, queue, track) => queue.channel.send(`**${track.title}** has ended!`));

/* do commands */
client.on("messageCreate", async message => {
    if (
        !message.content.startsWith("!") ||
        message.author.bot ||
        message.content.length === 1
    ) {
        return;
    }

    const [command, ...args] = message.content.slice(1).trim().split(/\s+/g);
    switch (command.toLowerCase()) {
        case "join": {
            const vc = message.member?.voice?.channel;
            if (!vc) return void message.channel.send("pls join vc");

            const player = node.createPlayer(message.guild!.id).connect(vc.id);

            // @ts-expect-error
            player.queue.channel = message.channel;
            return void message.channel.send(`joined <#${vc}> against my will :ok_hand:`);
        }

        case "remove": {
            const vc = message.member?.voice?.channel;
            if (!vc) return void message.channel.send("pls join vc");

            const player = node.getPlayer(message.guildId!);
            if (!player) return void message.channel.send("use join cmd pls.");

            const index = +args[0];
            if (Number.isNaN(index)) return void message.channel.send("you didn't provide a valid number bro.");

            // @ts-expect-error
            const song = player.queue.remove(index - 1);
            if (!song) return void message.channel.send("didn't remove a song lol.");

            return void message.channel.send(`removed **${song.title}** from the queue.`)
        }

        case "clear": {
            const vc = message.member?.voice?.channel;
            if (!vc) return void message.channel.send("pls join vc");

            const player = node.getPlayer(message.guildId!);
            if (!player) return void message.channel.send("use join cmd pls.");

            player.queue.tracks = [];
            return void message.channel.send("cleared the queue.")
        }

        case "queue": {
            const vc = message.member?.voice?.channel;
            if (!vc) return void message.channel.send("pls join vc");

            const player = node.getPlayer(message.guildId!);
            if (!player) return void message.channel.send("use join cmd pls.");

            return void message.channel.send(player.queue.tracks
                .map((t, i) => `\`#${i + 1}\` **${t.title}** ${t.requester ? `<@${t.requester}>` : ""}`)
                .join("\n")
                || "The queue is empty.");
        }

        case "play": {
            const vc = message.member?.voice?.channel;
            if (!vc) return void message.channel.send("pls join vc");

            let query = args.join(" ");
            if (!query) return void message.channel.send("pls giv a search query xd lol");

            if (!/^https?:\/\//.test(query)) {
                query = `ytsearch:${query}`;
            }

            const results = await node.rest!.loadTracks(query);

            let tracks,
                msg = "";

            switch (results.loadType) {
                case LoadType.SearchResult:
                case LoadType.TrackLoaded: {
                    tracks = [results.tracks[0]];
                    msg = `Queued [**${tracks[0].info.title}**](${tracks[0].info.uri})`;
                    break;
                }

                case LoadType.PlaylistLoaded: {
                    tracks = results.tracks;
                    msg = `Queued playlist [**${results.playlistInfo.name}**](${query}), with a total of **${tracks.length}** tracks`;
                    break;
                }

                case LoadType.LoadFailed:
                case LoadType.NoMatches: {
                    msg = `Uh oh, I couldn't find something for \`${query}\``;
                    return;
                }
            }

            const player = node.createPlayer(message.guild!.id);
            if (!player.connected) {
                if (!vc) return void message.channel.send("bruh you left the fucking vc.");

                // @ts-expect-error
                player.queue.channel = message.channel;
                await player.connect(vc.id);
            }

            player.queue.add(tracks, message.author.id);
            if (!player.playing && !player.paused) {
                await player.queue.start();
            } else {
                await message.channel.send({
                    embeds: [
                        new MessageEmbed()
                            .setColor("#0d1117")
                            .setDescription(msg!),
                    ],
                });
            }
        }
    }
});

/* login xd */
client.login(process.env.DISCORD_TOKEN);
