import { Snowflake } from "discord.js";
import { isNonNilSnowflake } from "../../string";

export function isValidId(value: string | number | null | undefined): value is Snowflake {
	return isNonNilSnowflake(String(value));
}
