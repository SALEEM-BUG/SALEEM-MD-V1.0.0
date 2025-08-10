js
// lib/plugins/auto_emoji.js

const { smd } = require('../lib');

// List of emojis to randomly react with
const emojis = ['😂', '❤️', '🔥', '👍', '🤔', '🥲', '💀', '🤖'];

smd({
  on: 'message',
  fromMe: false, // Only react to messages from others
  react: true
}, async (m) => {
  try {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    await m.react(randomEmoji);
  } catch (err) {
    console.error('AutoReact Error:', err);
  }
});
