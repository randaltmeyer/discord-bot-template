import { login } from "./handlers";

async function main(): Promise<void> {
	await login();
}
main();