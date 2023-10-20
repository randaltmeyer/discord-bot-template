import { getFromProcess } from "./internal/getFromProcess";

function isNotProduction(value: string | number | null | undefined): value is string {
	return value !== "production";
}

export function isDevMode(): boolean {
	return getFromProcess(isNotProduction, "NODE_ENV");
}