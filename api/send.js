const axios = require('axios');

const sendToTelegram = (text) => axios.get(
  `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
  {params: {chat_id: process.env.CHAT_ID, text}}
)

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  }

  const { name, email, message } = req.body || {}

  await sendToTelegram(`${name} <${email}>`)
  await sendToTelegram(`${message}`)

  res.json({ result: 'Thanks' })
}
