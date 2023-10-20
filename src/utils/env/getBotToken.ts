import { getFromProcess } from "./internal/getFromProcess";

function isValidToken(value: string | number | undefined | null): value is string {
	return typeof(value) === "string" && value.length > 0;
}

let _botToken: string;
export function getBotToken(): string {
	if (!_botToken) {
		_botToken = getFromProcess(isValidToken, "botToken");
	}
	return _botToken;
}
