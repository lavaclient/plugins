/* imports */
require("dotenv/config");
const { Client, Intents, MessageEmbed } = require("discord.js");
const { QueuePlugin } = require("../dist");
const { Manager } = require("lavaclient")
const { LoadType } = require("@lavaclient/types")

const node = {
    id: "xd",
    host: process.env.LAVALINK_HOST,
    password: process.env.LAVALINK_PASS,
    port: process.env.LAVALINK_PORT,
}

/* all the code lol */
const client = new Client({ ws: { intents: Intents.FLAGS.GUILDS | Intents.FLAGS.GUILD_VOICE_STATES | Intents.FLAGS.GUILD_MESSAGES } });
const manager = new Manager([node], {
    send: (id, payload) => client.guilds.cache.get(id)?.shard?.send(payload, true),
    plugins: [new QueuePlugin()]
});

client.on("ready", () => {
    console.log("im ready")
    manager.init(client.user.id)
});

client.ws.on("VOICE_SERVER_UPDATE", data => manager.serverUpdate(data));
client.ws.on("VOICE_STATE_UPDATE", data => manager.stateUpdate(data));

/* test global events */
manager.on("socketReady", socket => console.log(`socket "${socket.id}" is now ready.`))
manager.on("queueFinished", queue => queue.channel.send("Queue Finished!"));
manager.on("trackStart", (queue, track) => queue.channel.send(`**${track.title}** has started!`));
manager.on("trackEnd", (queue, track) => queue.channel.send(`**${track.title}** has ended!`));

/* do commands */
client.on("message", async message => {
    if (!message.content.startsWith("!") || message.author.bot || message.content.length === 1) {
        return;
    }

    const [command, ...args] = message.content.slice(1).trim().split(/\s+/g);
    switch (command.toLowerCase()) {
        case "join": {
            const vc = message.member?.voice?.channel;
            if (!vc) {
                return message.channel.send("pls join vc");
            }

            const player = await manager
                .create(message.guild.id)
                .connect(vc.id);

            player.queue.channel = message.channel;

            return message.channel.send(`joined ${vc} against my will`);
        }

        case "play": {
            const vc = message.member?.voice?.channel;
            if (!vc) {
                return message.channel.send("pls join vc");
            }

            let query = args.join(" ")
            if (!query) {
                return message.channel.send("pls giv a search query xd lol");
            }

            if (!/^https?:\/\//.test(query)) {
                query = `ytsearch:${query}`;
            }

            const results = await manager.search(query);

            let tracks, msg;
            switch (results.loadType) {
                case LoadType.SearchResult:
                case LoadType.TrackLoaded: {
                    tracks = [results.tracks[0]];
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

            const player = manager.players.get(message.guild.id) ?? manager.create(message.guild.id);
            if (!player.connected) {
                if (!vc) {
                    return message.channel.send("bruh you left the fucking vc.");
                }

                player.queue.channel = message.channel;
                await player.connect(vc.id)
            }

            player.queue.add(tracks, message.author.id);
            if (!player.queue.started) {
                player.queue.start();
            }

            if (player.queue.started || results.loadType === LoadType.PlaylistLoaded) {
                await message.channel.send(new MessageEmbed()
                    .setColor("#0d1117")
                    .setDescription(msg));
            }
        }
    }
});

/* login xd */
client.login(process.env.DISCORD_TOKEN);