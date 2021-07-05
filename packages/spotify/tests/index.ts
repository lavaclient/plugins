// @ts-nocheck

import "dotenv/config";
import { DiscordVoiceServer, DiscordVoiceState, Manager } from "lavaclient";
import { SpotifyItemType, SpotifyPlugin } from "../dist";
import { QueuePlugin, Song } from "@lavaclient/queue";
import { Client, Color, Embed } from "neocord";
import { GatewayEvent, Payload } from "@neocord/gateway";

process.on("unhandledRejection", console.error);

const client = new Client(),
    manager = new Manager([
        {
            id: "main",
            password: process.env.LAVALINK_PASS,
            port: 2333,
            host: process.env.LAVALINK_HOST,
        },
    ], {
        send: (id, data) => {
            const guild = client.guilds.get(id);
            if (guild) {
                guild.shard.send(data);
            }
        },
        plugins: [
            new QueuePlugin(),
            new SpotifyPlugin({
                clientId: process.env.SPOTIFY_CLIENT_ID,
                clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
            }),
        ],
    });

client.ws.on("raw", async (pk: Payload) => {
    switch (pk.t) {
        case GatewayEvent.VoiceServerUpdate:
            await manager.serverUpdate(pk.d as DiscordVoiceServer);
            break;
        case GatewayEvent.VoiceStateUpdate:
            await manager.stateUpdate(pk.d as DiscordVoiceState);
            break;
    }
});

client.on("ready", () => {
    console.log("ready");
    manager.init(client.user!.id);
});

client.on("messageCreate", async message => {
    if (message.author.bot || !message.content.startsWith("!")) {
        return;
    }

    const [ cmd, ...args ] = message.content.slice(1).split(" ");
    switch (cmd.toLowerCase()) {
        case "join": {
            if (!message.member?.voice?.channelId) {
                return message.channel.send(b => b.content("you must be in a voice channel to use this command."));
            }

            if (manager.players.has(message.guild!.id)) {
                return message.channel.send(b => b.content("already a player for this guild."));
            }

            const player = manager
                .create(message.guild!)
                .connect(message.member.voice!.channelId);

            player.queue
                .on("trackStart", (track: Song) => {
                    message.channel.send(b => {
                        const embed = new Embed()
                            .setColor(Color.Blurple)
                            .setDescription(`**[${track.title}](${track.uri})** [<@${track.requester}>]`);

                        return b.embed(embed);
                    });
                })
                .on("finished", () => {
                    message.channel.send(b => {
                        const embed = new Embed()
                            .setColor(Color.Blurple)
                            .setDescription("Finished.");

                        return b.embed(embed);
                    });

                    player.destroy(true);
                });

            await message.channel.send("joined your vc!");
            break;
        }
        case "play":
            const player = manager.players.get(message.guild?.id!);
            if (!player) {
                return message.channel.send(b => b.content("no player found."));
            }

            const query = args.join(" ").replace(/<(.+)>/g, "$1");
            if (manager.spotify.isSpotifyUrl(query)) {
                const results = await manager.spotify.load(query);
                if (!results) {
                    return message.channel.send(b => b.content("couldn't find that on spotify."));
                }

                switch (results.type) {
                    case SpotifyItemType.Track:
                        const track = await results.resolveLavalinkTrack();

                        player.queue.add(track, message.author.id);
                        await message.channel.send(b => {
                            const artist = results.artists[0],
                                embed = new Embed()
                                    .setColor(Color.Blurple)
                                    .setDescription(`Queued **[${results.name}](${results.data.external_urls.spotify})**`)
                                    .setThumbnail(results.artwork)
                                    .setAuthor(artist.name, {
                                        url: artist.external_urls.spotify,
                                        icon: artist.images ? artist.images[0].url : client.user?.displayAvatarURL()!,
                                    });

                            return b.embed(embed);
                        });

                        break;
                    case SpotifyItemType.Album:
                        const albumTracks = await Promise.all(results.tracks.map(t => t.resolveLavalinkTrack()));

                        player.queue.add(albumTracks, message.author.id);
                        await message.channel.send(b => {
                            const artist = results.artists[0];
                            const embed = new Embed()
                                .setColor(Color.Blurple)
                                .setDescription(`Queued album **[${results.data.name}](${results.data.external_urls.spotify})**, it has **${albumTracks.length}** tracks.`)
                                .setThumbnail(results.artwork)
                                .setAuthor(artist.name, {
                                    url: artist.external_urls.spotify,
                                    icon: artist.images ? artist.images[0].url : client.user?.displayAvatarURL()!,
                                });

                            return b.embed(embed);
                        });

                        break;
                    case SpotifyItemType.Artist:
                        const topTracks = await results.resolveAllTracks();

                        player.queue.add(topTracks, message.author.id);
                        await message.channel.send(b => {
                            const embed = new Embed()
                                .setColor(Color.Blurple)
                                .setDescription(`Queued the top tracks for **[${results.data.name}](${results.data.external_urls.spotify})**, **${topTracks.length}** total tracks.`)
                                .setThumbnail(results.artwork);

                            return b.embed(embed);
                        });

                        break;
                    case SpotifyItemType.Playlist:
                        const playlistTracks = await Promise.all(results.tracks.map(t => t.resolveLavalinkTrack()));

                        player.queue.add(playlistTracks, message.author.id);
                        await message.channel.send(b => {
                            const owner = results.owner,
                                embed = new Embed()
                                    .setColor(Color.Blurple)
                                    .setDescription(`Queued playlist **[${results.data.name}](${results.data.external_urls.spotify})** with **${playlistTracks.length}** tracks.`)
                                    .setThumbnail(results.artwork);

                            if (owner.display_name) {
                                embed.setAuthor(owner.display_name, {
                                    url: owner.external_urls.spotify,
                                    icon: owner.images ? owner.images[0].url : client.user!.displayAvatarURL(),
                                });
                            }

                            return b.embed(embed);
                        });

                        break;
                }
            } else {
                const results = await manager.search(`${/^(https?:\/\/)/im.test(query) ? "" : "ytmsearch:"}${query}`);
                switch (results.loadType) {
                    case "PLAYLIST_LOADED":
                        player.queue.add(results.tracks, message.author.id);
                        await message.channel.send(b => {
                            const embed = new Embed()
                                .setColor(Color.Blurple)
                                .setDescription(`Queued **[${results.playlistInfo?.name}](${results.tracks[0].info.uri})**, it has **${results.tracks.length}** tracks.`);

                            return b.embed(embed);
                        });

                        break;
                    case "SEARCH_RESULT":
                    case "TRACK_LOADED":
                        const track = results.tracks[0];
                        await player.queue.add(track);
                        await message.channel.send(b => {
                            const embed = new Embed()
                                .setColor(Color.Blurple)
                                .setDescription(`Queued **[${track.info.title}](${track.info.uri})**`)
                                .setAuthor(track.info.author);

                            return b.embed(embed);
                        });

                }
            }

            if (!player.track) {
                await player.queue.start();
            }

            break;
    }
});

client.connect(process.env.DISCORD_TOKEN);
