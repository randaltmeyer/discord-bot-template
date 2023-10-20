import { getFromProcess } from "./internal/getFromProcess";

function isNotProduction(value: string | number | null | undefined): value is string {
	return value !== "production";
}

export function isDev(): boolean {
	return getFromProcess(isNotProduction, "env");
}