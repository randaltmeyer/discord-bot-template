import { ActivityType, Client } from "discord.js";
import { addLogHandler, getClient, getSuperUserId, info, verbose, warn } from "../utils";

//#region sendToSuperUser helpers

function formatArg(arg: any): string {
	if (arg instanceof Error) {
		if (arg.stack) {
			return arg.stack;
		}
		return arg.message ? `${arg.name}: ${arg.message}` : arg.name;
	}
	return String(arg);
}

function formatArgsForSuperUser(args: any[]) {
	const formattedArgs = args.map(formatArg).join("\n");
	const contents = `# Error\n${formattedArgs}`;
	const maxLength = 2000;
	return contents.length < maxLength ? contents : `${contents.slice(0, maxLength - 5)} ...`;
}

async function sendToSuperUser(message: string): Promise<void> {
	await getClient().users.fetch(getSuperUserId()).then(
		superUser => superUser?.send(message),
		superUserId => warn(`Unable to fetch superUser: ${superUserId}`)
	);
}

//#endregion

export async function handleReady(client: Client, resolveReady: () => void): Promise<void> {
	addLogHandler("error", (...args: any) => {
		verbose(`Sending error message to the superUser.`);
		sendToSuperUser(formatArgsForSuperUser(args));
	});

	client.user?.setPresence({
		status: "online"
	});

	client.user?.setActivity("discord.bot; !!help", {
		type: ActivityType.Playing
	});

	info(`Client.on("ready") [success]`);

	// Notify super user of successful start.
	verbose(`Sending "ready" notification to the superUser.`);
	await sendToSuperUser(`Discord.Client.on("ready") [success]`);

	resolveReady();
}