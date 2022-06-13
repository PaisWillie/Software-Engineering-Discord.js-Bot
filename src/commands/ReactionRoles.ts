import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../types/Command";

export const ReactionRole: Command = {
    name: "rr",
    description: "Manage reaction roles",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        
    }
};