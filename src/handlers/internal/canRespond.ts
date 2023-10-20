import { Message } from "discord.js";
import { isDevMode, isDevServer } from "../../utils";
import { canSendMessageTo } from "./canSendMessageTo";

/**
 * @private in dev mode, only reply in the dev server
 */
export function canRespond(message: Message): boolean {
	if (isDevMode() && !isDevServer(message.guildId)) return false;
	return canSendMessageTo(message.channel);
}