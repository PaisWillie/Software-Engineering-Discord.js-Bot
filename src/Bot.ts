import { Client, ClientOptions } from "discord.js";
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";

const token = "OTg1MjIxODAxMjkyNDk2ODk2.GYUVAU.7LFZzBFK4Zth_InYgntdhw3Sf3Sqz8fgoAYq7w";

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);

client.login(token);