import { Message } from "discord.js";
import { canRespond } from "./internal/canRespond";

export async function handleMessageCreate(message: Message): Promise<void> {
	if (!canRespond(message)) return;

	await message.reply("I hear you!");
}