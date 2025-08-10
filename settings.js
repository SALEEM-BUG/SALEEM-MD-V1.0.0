const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUtPM0J2UkQ1elUwVHVYYnF0Q1JScytBeEFMQ3hRZXNVemVILy80M0hYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0g2RFRic2JLdzJvbWFBUGVDTzhhSjNONlcvU2pDdWM0MFIrc08zQlVGdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSSs0azU0Z0lFNU1wWk9ZQW5vMWMxckVuMWp4THFsT2NIeWZqU3NyUVdVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJMHhrYkp4ZDBxU0grdlllbEt2eXg2NUJ6MjRoUm1Qbk5KdkhGUnFseDFZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFHL2M5L2VhOUJLdXB1WEhiUU83by9qVFIvYnowZnRHanp0bmpBNFJ6VnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpEMjZSUG9UTTJTZUxGRTYwdXRMallIcWR0SktFam8yMTJvR0Q3VWFwRUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEtyTlF5VStUMnpYOUZ0ZDJRdlluM0JET0NqTndxV1VzallIUkgxOGgxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidllEY1BPL2MyMDI1NEduNVU0WFVNN2Q2VFY5ekg2MmRXR1M2NHAwdERrQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilh6VU14ZmhEQW1rVGVnVUNCbWJXa056bUM2YjluYkpaNVlDdWV2dTBpRElzYXV6OXBXRE9KOTAzUjFHUjJ0cjVlblNZbkFHS2t4TDBkdHJ4L3NkemdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIzLCJhZHZTZWNyZXRLZXkiOiI3bWxHeFNNZEhpQU5IUVk1MXJtdEtBclcvRnorZHhDL0RxM1VLY1ZKNXpzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkzNzc3NzIxMjczQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkJBMzU0MDczMUMzMEU0NjQxOEUxMjNENDBGRjgyRTQwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTQ4MjYzNDR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkzNzc3NzIxMjczQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDRjA0MEYzMERBODhGMkY5NUM1MTBBNzc3QTk5N0MyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTQ4MjYzNDR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IllCOEhEMjFLIiwibWUiOnsiaWQiOiI5Mzc3NzcyMTI3MzoxMUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJIamoiLCJsaWQiOiI3MzYyMDU1NDU0NzI2NToxMUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01DQW5kNERFT09NNHNRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjZYQ0l4MkUzWXk3amJjZ3VLR2YvcSt2TTB1Rys4aVFWcXVrMzVXSCtNWDg9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImlkUFB5ZTc0a29LWmlkSFNUZlNTMkRmRkJIY3RzUE0reExCRVoyZGIvQ2RZSmtSa0tKZG1yWWhNd25abXh4cHVsdlp2dkQ4ZzNFTnkzVWhYZzl4MURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXRUVtQktYcmhhQlJFUTNaTWFQaEhQQjBlMy9oU0hna21VNG55SEdXa2pDQXplOHc1aVRMSnZ4ajNMSHFBMkduTzk5RS9pbG5nRGF0YUFnQUF0Ulpqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkzNzc3NzIxMjczOjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVsd2lNZGhOMk11NDIzSUxpaG4vNnZyek5MaHZ2SWtGYXJwTitWaC9qRi8ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NDgyNjM0MiwibGFzdFByb3BIYXNoIjoiM2dQVUprIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPdjkifQ==",
    // add your Session Id make sure it starts with SALEEM-MD~

    PREFIX: process.env.PREFIX || ".",
    // add your prefix for bot

    BOT_NAME: process.env.BOT_NAME || "𝐒𝐀𝐋𝐄𝐄𝐌-𝐌𝐃",
    // add bot name here for menu

    MODE: process.env.MODE || "public",
    // make bot public-private-inbox-group 

    LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
    // make true or false status auto seen

    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    // make true if you want auto reply on status 

    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
    // make true if you want auto reply on status 

    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SALEEM-MARWAT 👑*",
    // set the auto reply message on status reply  

    WELCOME: process.env.WELCOME || "true",
    // true if want welcome and goodbye msg in groups 

    ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
    // make true to know who dismiss or promoted a member in group

    ANTI_LINK: process.env.ANTI_LINK || "true",
    // make anti link true,false for groups 

    MENTION_REPLY: process.env.MENTION_REPLY || "false",
    // make true if want auto voice reply if someone mention you 

    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.ibb.co/4wx2k1Rv/shaban-md.jpg",
    // add custom menu and mention reply image url

    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/4wx2k1Rv/shaban-md.jpg",
    // add img for alive msg

    LIVE_MSG: process.env.LIVE_MSG || 
`> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ

𝙺𝙴𝙴𝙿 𝚄𝚂𝙸𝙽𝙶 ✦𝚂𝙰𝙻𝙴𝙴𝙼-𝙼𝙳✦ 𝙵𝚁𝙾𝙼 𝚂𝙰𝙻𝙴𝙴𝙼-𝙼𝙰𝚁𝚆𝙰𝚃 𝙸𝙽𝙲⚡

*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*

> ɢɪᴛʜᴜʙ : github.com/SALEEM-BUG/SALEEM-MD-V1.0.0`,
    // add alive msg here 

    STICKER_NAME: process.env.STICKER_NAME || "𝐒𝐀𝐋𝐄𝐄𝐌-𝐌𝐀𝐑𝐖𝐀𝐓",
    // type sticker pack name 

    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    // make this true for custom emoji react  

    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,💛,💚,💙,💜,🤎,🖤,🤍",
    // choose custom react emojis by yourself 

    DELETE_LINKS: process.env.DELETE_LINKS || "false",
    // automatic delete links without removing member 

    OWNER_NUMBER: process.env.OWNER_NUMBER || "923491221845",
    // add your bot owner number

    OWNER_NAME: process.env.OWNER_NAME || "𝐒𝐀𝐋𝐄𝐄𝐌-𝐊𝐇𝐀𝐍",
    // add bot owner name

    DESCRIPTION: process.env.DESCRIPTION || "*© ᴾᴼᵂᴱᴿ ᴮᵞ 𝐒𝐀𝐋𝐄𝐄𝐌-𝐌𝐀𝐑𝐖𝐀𝐓*",
    // add bot owner description  

    READ_MESSAGE: process.env.READ_MESSAGE || "false",
    // Turn true or false for automatic read msgs

    AUTO_REACT: process.env.AUTO_REACT || "false",
    // make this true or false for auto react on all msgs

    ANTI_BAD: process.env.ANTI_BAD || "false",
    // false or true for anti bad words  

    ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
    // make anti link true,false for groups 

    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    // make true for automatic stickers 

    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    // make true or false automatic text reply 

    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    // make true for always online 

    PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
    // make false if want private mode

    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    // true for automatic show typing  

    READ_CMD: process.env.READ_CMD || "false",
    // true if want mark commands as read  

    DEV: process.env.DEV || "923491221845",
    // replace with your whatsapp number  

    ANTI_VV: process.env.ANTI_VV || "true",
    // true for anti once view 

    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
    // change it to 'inbox' or 'same' if you want to resend deleted message in same chat 

    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
    // make it true for auto recording 

    version: process.env.version || "1.0.0",

    START_MSG: process.env.START_MSG || 
`*𝙷𝙴𝙻𝙻𝙾 𝚃𝙷𝙴𝚁𝙴 𝚂𝙰𝙻𝙴𝙴𝙼-𝙼𝙳 𝙲𝙾𝙽𝙽𝙴𝙲𝚃𝙴𝙳! 👋🏻* 

*ᴋᴇᴇᴘ ᴏɴ ᴜsɪɴɢ 𝚂𝙰𝙻𝙴𝙴𝙼 ᴍᴏᴅs🇵🇰* 

> sᴜʙsᴄʀɪʙᴇ ʏᴛ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴛᴜᴛᴏʀɪᴀʟs
https://youtube.com/@saleem-bug

- *ʏᴏᴜʀ ʙᴏᴛ ᴘʀᴇғɪx: ➡️[ . ]*
> - ʏᴏᴜ ᴄᴀɴ ᴄʜᴀɴɢᴇ ᴜʀ ᴘʀᴇғɪx ᴜsɪɴɢ ᴛʜᴇ .ᴘʀᴇғɪx ᴄᴏᴍᴍᴀɴᴅ

> ᴅᴏɴᴛ ғᴏʀɢᴇᴛ ᴛᴏ sʜᴀʀᴇ, sᴛᴀʀ & ғᴏʀᴋ ᴛʜᴇ ʀᴇᴘᴏ ⬇️ 
https://github.com/SALEEM-BUG/SALEEM-MD-V1.0.0

> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚂𝙰𝙻𝙴𝙴𝙼-𝙼𝙰𝚁𝚆𝙰𝚃 🇵🇰`
};
