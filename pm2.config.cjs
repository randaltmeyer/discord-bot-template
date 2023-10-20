const BOT_NAME = "discord-bot-template";

module.exports = {
	apps: [{
		name: BOT_NAME,
		script: "./build/app.js",
		node_args: "--experimental-modules --es-module-specifier-resolution=node",

		env: {
			NODE_ENV: "development",
			botId: "1234567890123456",
			botToken: "",
			/** the bot's dev / home server (if you want to ensure it only responds there) */
			devServerId: "1234567890123456",
			homeServerId: "1234567890123456",
			/** super user / admin to allow all access and to notify of errors */
			superUserId: "1234567890123456",
		},
		env_production: {
			NODE_ENV: "production",
		},

		error_file: `./logs/${BOT_NAME}-error.log`,
		out_file: `./logs/${BOT_NAME}-out.log`,
		log_date_format: "YYYY-MM-DD",
		time: true,

	}]
}