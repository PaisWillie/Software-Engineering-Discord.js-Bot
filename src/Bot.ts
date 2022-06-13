import { Client, ClientOptions } from "discord.js";
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";

import * as dotenv from 'dotenv';
dotenv.config();

console.log("Bot is starting...");

const client = new Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: []
});

ready(client);
interactionCreate(client);

client.login(process.env.BOT_TOKEN);