import "dotenv/config";
import "../dist";
import "../register";
import { TextChannel } from "discord.js";
declare module "../dist" {
    interface Queue {
        channel: TextChannel;
    }
}
