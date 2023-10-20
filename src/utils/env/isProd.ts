import { getFromProcess } from "./internal/getFromProcess";

function isProduction(value: string | number | null | undefined): value is string {
	return value === "production";
}

export function isProd(): boolean {
	return getFromProcess(isProduction, "env");
}