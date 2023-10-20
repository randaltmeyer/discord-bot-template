# Discord Bot Template
This project was designed to provide a jump start when developing NodeJS Discord bots using VSCode and Typescript.

## PreConfig
- Ensure you have Node, NPM, PM2, and Typescript installed
> npm i -g pm2 typescript
- Edit pm2.config.cjs to set the following
> CHANGE: BOT_NAME

> CHANGE: botId

> SET: botToken

> CHANGE: devServerId

> CHANGE: homeServerId

> CHANGE: superUserId

## Quick Start
> npm i

> npm run build

> npm start

## Basic/Default Setup
- basic logging support for: silly, debug, verbose, info, warn, error
- super user notification of errors (non-fatal) via Discord DM
- graceful process exit capture
- runs in dev mode by default; will only handle messages in dev server
