import { Snowflake } from "discord.js";
import { getHomeServerId } from "./getHomeServerId";

export function isHomeServer(id: Snowflake): boolean {
	return id === getHomeServerId();
}