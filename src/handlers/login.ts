import { debug, getBotToken, getClient } from "../utils";
import { handleMessageCreate } from "./handleMessageCreate";
import { handleReady } from "./handleReady";

export function login(): Promise<void> {
	return new Promise<void>(async (resolveLogin, reject) => {
		const client = getClient();
		client.on("messageCreate", handleMessageCreate);
		client.once("ready", client => handleReady(client, resolveLogin));
		const response = await client.login(getBotToken()).catch(reject);
		debug(`client.login:`, response);
	});
}