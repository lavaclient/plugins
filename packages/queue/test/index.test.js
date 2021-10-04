"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
/* imports */
require("dotenv/config");
require("../dist");
require("../register");
var discord_js_1 = require("discord.js");
var lavaclient_1 = require("lavaclient");
var types_1 = require("@lavaclient/types");
/* all the code lol */
var client = new discord_js_1.Client({
    intents: discord_js_1.Intents.FLAGS.GUILDS |
        discord_js_1.Intents.FLAGS.GUILD_VOICE_STATES |
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES
});
var node = new lavaclient_1.Cluster({
    sendGatewayPayload: function (id, payload) { var _a, _b; return (_b = (_a = client.guilds.cache.get(id)) === null || _a === void 0 ? void 0 : _a.shard) === null || _b === void 0 ? void 0 : _b.send(payload, true); },
    nodes: [
        {
            id: "main",
            host: process.env.LAVALINK_HOST,
            port: +process.env.LAVALINK_PORT,
            password: process.env.LAVALINK_PASS
        },
    ]
});
client.on("ready", function () {
    var _a;
    console.log("im ready");
    node.connect((_a = client.user) === null || _a === void 0 ? void 0 : _a.id);
});
client.ws.on("VOICE_SERVER_UPDATE", function (data) { return node.handleVoiceUpdate(data); });
client.ws.on("VOICE_STATE_UPDATE", function (data) { return node.handleVoiceUpdate(data); });
/* test global events */
node.on("nodeConnect", function (node) {
    return console.log("socket \"" + node.id + "\" is now ready.");
});
// @ts-expect-error
node.on("nodeQueueFinish", function (_, queue) { return queue.channel.send("Queue Finished!"); });
// @ts-expect-error
node.on("nodeTrackStart", function (_, queue, track) { return queue.channel.send("**" + track.title + "** has started!"); });
// @ts-expect-error
node.on("nodeTrackEnd", function (_, queue, track) { return queue.channel.send("**" + track.title + "** has ended!"); });
/* do commands */
client.on("messageCreate", function (message) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, command, args, _b, vc, player, vc, player, index, song, vc, player, vc, player, vc, query, results, tracks, msg, player;
    var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0:
                if (!message.content.startsWith("!") ||
                    message.author.bot ||
                    message.content.length === 1) {
                    return [2 /*return*/];
                }
                _a = message.content.slice(1).trim().split(/\s+/g), command = _a[0], args = _a.slice(1);
                _b = command.toLowerCase();
                switch (_b) {
                    case "join": return [3 /*break*/, 1];
                    case "remove": return [3 /*break*/, 2];
                    case "clear": return [3 /*break*/, 3];
                    case "queue": return [3 /*break*/, 4];
                    case "play": return [3 /*break*/, 5];
                }
                return [3 /*break*/, 12];
            case 1:
                {
                    vc = (_d = (_c = message.member) === null || _c === void 0 ? void 0 : _c.voice) === null || _d === void 0 ? void 0 : _d.channel;
                    if (!vc)
                        return [2 /*return*/, void message.channel.send("pls join vc")];
                    player = node.createPlayer(message.guild.id).connect(vc.id);
                    // @ts-expect-error
                    player.queue.channel = message.channel;
                    return [2 /*return*/, void message.channel.send("joined <#" + vc + "> against my will :ok_hand:")];
                }
                _o.label = 2;
            case 2:
                {
                    vc = (_f = (_e = message.member) === null || _e === void 0 ? void 0 : _e.voice) === null || _f === void 0 ? void 0 : _f.channel;
                    if (!vc)
                        return [2 /*return*/, void message.channel.send("pls join vc")];
                    player = node.getPlayer(message.guildId);
                    if (!player)
                        return [2 /*return*/, void message.channel.send("use join cmd pls.")];
                    index = +args[0];
                    if (Number.isNaN(index))
                        return [2 /*return*/, void message.channel.send("you didn't provide a valid number bro.")];
                    song = player.queue.remove(index - 1);
                    if (!song)
                        return [2 /*return*/, void message.channel.send("didn't remove a song lol.")];
                    return [2 /*return*/, void message.channel.send("removed **" + song.title + "** from the queue.")];
                }
                _o.label = 3;
            case 3:
                {
                    vc = (_h = (_g = message.member) === null || _g === void 0 ? void 0 : _g.voice) === null || _h === void 0 ? void 0 : _h.channel;
                    if (!vc)
                        return [2 /*return*/, void message.channel.send("pls join vc")];
                    player = node.getPlayer(message.guildId);
                    if (!player)
                        return [2 /*return*/, void message.channel.send("use join cmd pls.")];
                    player.queue.tracks = [];
                    return [2 /*return*/, void message.channel.send("cleared the queue.")];
                }
                _o.label = 4;
            case 4:
                {
                    vc = (_k = (_j = message.member) === null || _j === void 0 ? void 0 : _j.voice) === null || _k === void 0 ? void 0 : _k.channel;
                    if (!vc)
                        return [2 /*return*/, void message.channel.send("pls join vc")];
                    player = node.getPlayer(message.guildId);
                    if (!player)
                        return [2 /*return*/, void message.channel.send("use join cmd pls.")];
                    return [2 /*return*/, void message.channel.send(player.queue.tracks
                            .map(function (t, i) { return "`#" + (i + 1) + "` **" + t.title + "** " + (t.requester ? "<@" + t.requester + ">" : ""); })
                            .join("\n")
                            || "The queue is empty.")];
                }
                _o.label = 5;
            case 5:
                vc = (_m = (_l = message.member) === null || _l === void 0 ? void 0 : _l.voice) === null || _m === void 0 ? void 0 : _m.channel;
                if (!vc)
                    return [2 /*return*/, void message.channel.send("pls join vc")];
                query = args.join(" ");
                if (!query)
                    return [2 /*return*/, void message.channel.send("pls giv a search query xd lol")];
                if (!/^https?:\/\//.test(query)) {
                    query = "ytsearch:" + query;
                }
                return [4 /*yield*/, node.rest.loadTracks(query)];
            case 6:
                results = _o.sent();
                tracks = void 0, msg = "";
                switch (results.loadType) {
                    case types_1.LoadType.SearchResult:
                    case types_1.LoadType.TrackLoaded: {
                        tracks = [results.tracks[0]];
                        msg = "Queued [**" + tracks[0].info.title + "**](" + tracks[0].info.uri + ")";
                        break;
                    }
                    case types_1.LoadType.PlaylistLoaded: {
                        tracks = results.tracks;
                        msg = "Queued playlist [**" + results.playlistInfo.name + "**](" + query + "), with a total of **" + tracks.length + "** tracks";
                        break;
                    }
                    case types_1.LoadType.LoadFailed:
                    case types_1.LoadType.NoMatches: {
                        msg = "Uh oh, I couldn't find something for `" + query + "`";
                        return [2 /*return*/];
                    }
                }
                player = node.createPlayer(message.guild.id);
                if (!!player.connected) return [3 /*break*/, 8];
                if (!vc)
                    return [2 /*return*/, void message.channel.send("bruh you left the fucking vc.")];
                // @ts-expect-error
                player.queue.channel = message.channel;
                return [4 /*yield*/, player.connect(vc.id)];
            case 7:
                _o.sent();
                _o.label = 8;
            case 8:
                player.queue.add(tracks, message.author.id);
                if (!(!player.playing && !player.paused)) return [3 /*break*/, 10];
                return [4 /*yield*/, player.queue.start()];
            case 9:
                _o.sent();
                return [3 /*break*/, 12];
            case 10: return [4 /*yield*/, message.channel.send({
                    embeds: [
                        new discord_js_1.MessageEmbed()
                            .setColor("#0d1117")
                            .setDescription(msg),
                    ]
                })];
            case 11:
                _o.sent();
                _o.label = 12;
            case 12: return [2 /*return*/];
        }
    });
}); });
/* login xd */
client.login(process.env.DISCORD_TOKEN);
