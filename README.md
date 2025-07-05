
# telegram-relay-moblazh

A lightweight API endpoint for sending messages from the [moblazh.ir](https://moblazh.ir) website to a Telegram bot using Vercel and GitHub.

## 🔧 Features

- Sends custom messages to a Telegram channel or user
- Secured via environment-based API key
- Deployable to Vercel with zero backend server

## 🛠 Environment Variables

Add the following variables to your Vercel dashboard or `.env` file:

```
BOT_TOKEN=your_telegram_bot_token
API_KEY=your_custom_api_key
CHAT_ID=@your_channel_or_chat_id
```

## 🚀 Usage

After deployment, send a message like this:

```
https://your-vercel-project-url.vercel.app/api/send?text=Hello+World&key=your_custom_api_key
```

## 📝 Parameters

| Parameter | Required | Description                  |
|-----------|----------|------------------------------|
| `text`    | ✅       | Message to send              |
| `key`     | ✅       | API key to authorize request |

## 📦 Deployment

1. Fork or clone this repo.
2. Push to your GitHub account.
3. Connect it to Vercel.
4. Add environment variables.
5. Deploy and test.

## 🔒 Security Note

Never expose your `BOT_TOKEN` or `API_KEY` in public code or URLs.
Use Vercel’s environment variable feature to keep them secret.

---

Built by [Mohammad Ebrahimzadeh](https://github.com/wohawwadhosein) for [moblazh.ir](https://moblazh.ir) 🚀
