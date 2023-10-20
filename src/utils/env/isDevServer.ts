import { Snowflake } from "discord.js";
import { getDevServerId } from "./getDevServerId";

export function isDevServer(id: Snowflake | null): boolean {
	return id === getDevServerId();
}