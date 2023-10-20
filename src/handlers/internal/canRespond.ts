import { Message } from "discord.js";
import { isDev, isDevServer } from "../../utils";
import { canSendMessageTo } from "./canSendMessageTo";

/**
 * @private in dev mode, only reply in the dev server
 */
export function canRespond(message: Message): boolean {
	if (isDev() && !isDevServer(message.guildId)) return false;
	return canSendMessageTo(message.channel);
}