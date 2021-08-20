// @ts-nocheck

/* imports */
import "dotenv/config";
import "../dist";
import "../register";

import { Client, Intents, MessageEmbed } from "discord.js";
import { Cluster } from "lavaclient"
import { LoadType } from "@lavaclient/types"

/* all the code lol */
const client = new Client({
    intents: Intents.FLAGS.GUILDS | Intents.FLAGS.GUILD_VOICE_STATES | Intents.FLAGS.GUILD_MESSAGES
});

const node = new Cluster({
    sendGatewayPayload: (id, payload) => client.guilds.cache.get(id)?.shard?.send(payload, true),
    nodes: [
        {
            id: "main",
            host: process.env.LAVALINK_HOST!,
            port: +process.env.LAVALINK_PORT!,
            password: process.env.LAVALINK_PASS!,
        }
    ]
});

client.on("ready", () => {
    console.log("im ready")
    node.connect(client.user?.id)
});

client.ws.on("VOICE_SERVER_UPDATE", data => node.handleVoiceUpdate(data));
client.ws.on("VOICE_STATE_UPDATE", data => node.handleVoiceUpdate(data));

/* test global events */
node.on("nodeConnect", node => console.log(`socket "${node.id}" is now ready.`))
node.on("nodeQueueFinish", (_, queue) => queue.channel.send("Queue Finished!"));
node.on("nodeTrackStart", (_, queue, track) => queue.channel.send(`**${track.title}** has started!`));
node.on("nodeTrackEnd", (_, queue, track) => queue.channel.send(`**${track.title}** has ended!`));

/* do commands */
client.on("messageCreate", async message => {
    if (!message.content.startsWith("!") || message.author.bot || message.content.length === 1) {
        return;
    }

    const [ command, ...args ] = message.content.slice(1).trim().split(/\s+/g);
    switch (command.toLowerCase()) {
        case "join": {
            const vc = message.member?.voice?.channel;
            if (!vc) {
                message.channel.send("pls join vc");
                return
            }

            const player = node.createPlayer(message.guild!.id).connect(vc.id);

            player.queue.channel = message.channel;

            message.channel.send(`joined ${vc} against my will`);
            return
        }

        case "play": {
            const vc = message.member?.voice?.channel;
            if (!vc) {
                message.channel.send("pls join vc");
                return
            }

            let query = args.join(" ")
            if (!query) {
                message.channel.send("pls giv a search query xd lol");
                return
            }

            if (!/^https?:\/\//.test(query)) {
                query = `ytsearch:${query}`;
            }

            const results = await node.rest.loadTracks(query);

            let tracks, msg: string = "";
            switch (results.loadType) {
                case LoadType.SearchResult:
                case LoadType.TrackLoaded: {
                    tracks = [ results.tracks[0] ];
                    msg = `Queued [**${tracks[0].info.title}**](${tracks[0].info.uri})`
                    break;
                }

                case LoadType.PlaylistLoaded: {
                    tracks = results.tracks;
                    msg = `Queued playlist [**${results.playlistInfo.name}**](${query}), with a total of **${tracks.length}** tracks`;
                    break;
                }

                case LoadType.LoadFailed:
                case LoadType.NoMatches: {
                    msg = `Uh oh, I couldn't find something for \`${query}\``
                    return;
                }
            }

            const player = node.createPlayer(message.guild!.id);
            if (!player.connected) {
                if (!vc) {
                    message.channel.send("bruh you left the fucking vc.");
                    return
                }

                player.queue.channel = message.channel;
                await player.connect(vc.id)
            }

            player.queue.add(tracks, message.author.id);
            if (!player.playing && !player.paused) {
                await player.queue.start();
            } else {
                await message.channel.send({
                    embeds: [
                        new MessageEmbed()
                            .setColor("#0d1117")
                            .setDescription(msg!)
                    ]
                });
            }
        }
    }
});

/* login xd */
client.login(process.env.DISCORD_TOKEN);
