export default async function handler(req, res) {
  const token = process.env.BOT_TOKEN;
  const validApiKey = process.env.API_KEY;
  const allowedIp = process.env.ALLOWED_IP;

  const chat_id = "@moblazh";
  const { text = "No message", key } = req.query;

  // ✅ بررسی وجود توکن تلگرام
  if (!token) {
    return res.status(500).send("❌ BOT_TOKEN is not defined");
  }

  // ✅ بررسی کلید امنیتی
  if (!key || key !== validApiKey) {
    return res.status(403).send("❌ Forbidden: Invalid API key");
  }

  // ✅ بررسی IP مجاز
  const forwarded = req.headers["x-forwarded-for"];
  const requesterIp = forwarded ? forwarded.split(",")[0].trim() : req.socket.remoteAddress;

  if (requesterIp !== allowedIp) {
    return res.status(403).send(`❌ Forbidden: Unauthorized IP (${requesterIp})`);
  }

  // ✅ ساخت پیام
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id,
      text,
      parse_mode: "Markdown",
    }),
  });

  if (response.ok) {
    res.status(200).send("✅ Message sent to Telegram");
  } else {
    const errorText = await response.text();
    res.status(500).send("❌ Failed to send:\n" + errorText);
  }
}
