import { Client, ClientOptions } from "discord.js";
import { captureProcessExit, info } from "..";

let _client: Client;

function destroyClient(): void {
	if (_client) {
		info("Destroying Discord Client");
		_client.destroy();
	}
}

function createClientOptions(): ClientOptions {
	return { intents:[] };
}

export function getClient(): Client {
	if (!_client) {
		_client = new Client(createClientOptions());
		captureProcessExit(destroyClient);
	}
	return _client;
}
