import { Snowflake } from "discord.js";
import { getFromProcess } from "./internal/getFromProcess";
import { isValidId } from "./internal/isValidId";

let _devServerId: Snowflake;
export function getDevServerId(): Snowflake {
	if (!_devServerId) {
		_devServerId = getFromProcess(isValidId, "devServerId");
	}
	return _devServerId;
}
