import { Snowflake } from "discord.js";
import { getFromProcess } from "./internal/getFromProcess";
import { isValidId } from "./internal/isValidId";

let _botId: Snowflake;
export function getBotId(): Snowflake {
	if (!_botId) {
		_botId = getFromProcess(isValidId, "botId");
	}
	return _botId;
}
