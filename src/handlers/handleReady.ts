import { ActivityType, Client } from "discord.js";
import { info } from "../utils";

export async function handleReady(client: Client, resolveReady: () => void): Promise<void> {
	client.user?.setPresence({
		status: "online"
	});

	client.user?.setActivity("discord.bot; !!help", {
		type: ActivityType.Playing
	});

	info(`Client.on("ready") [success]`);

	resolveReady();
}