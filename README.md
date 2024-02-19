# TikTok to Discord App

This application is designed to integrate TikTok posts into Discord servers seamlessly. It utilizes TikTok's official API to receive webhooks of user posts and automatically shares them on Discord.

## Features

- Receive TikTok post webhooks.
- Share TikTok posts on Discord servers.
- Easy integration with TikTok and Discord accounts.

## Installation

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Set up environment variables (see below).
4. Start the application: `npm start`.

## Configuration

Before running the application, you need to set up the following environment variables:

- `TIKTOK_API_KEY`: Your TikTok API key.
- `DISCORD_WEBHOOK_URL`: URL of the Discord webhook where TikTok posts will be shared.

## Usage

Once the application is running and configured, it will automatically receive TikTok posts via webhooks and share them on the specified Discord server.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
