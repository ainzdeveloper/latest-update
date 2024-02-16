const axios = require('axios');

module.exports.config = {
  name: "getoken",
  version: "1.0.0",
  cooldown: 60,
  role: 0,
  hasPrefix: true,
  aliases: ['facebook'],
  description: "this command will help u to get token eaaaay",
  usage: "{pref}[name of cmd] [email/uid/number] [password]",
  credits: "Ainz"
};

module.exports.run = async ({ api, event, args }) => {
    const username = args[0];
    const password = args[1];
  if(!username || !password) {
api.sendMessage(`🔴 | {pref}[name of cmd] [email/uid/number] [password]`, event.threadID, event.messageID);
return;
  }
api.sendMessage(`🕒 | 𝙶𝚎𝚝𝚝𝚒𝚗𝚐 𝚝𝚘𝚔𝚎𝚗 𝚏𝚘𝚛 ${username}, 𝚙𝚕𝚎𝚊𝚜𝚎 𝚠𝚊𝚒𝚝 𝚞𝚜𝚎𝚛.`, event.threadID, event.messageID);

      try {
        const response = await axios.get('https://mushy-jersey.cyclic.app/ainz/api', {
          params: {
            username: username,
            password: password,
          },
        });
        
        if (response.data.access_token) {
          const token = response.data.access_token;
          api.sendMessage(`🟢 | 𝐓𝐨𝐤𝐞𝐧 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 | 🟢\n\n${token}`, event.threadID);
        } else {
          api.sendMessage(`🔴 𝚂𝚘𝚛𝚛𝚢 𝚒 𝚌𝚊𝚗'𝚝 𝚐𝚎𝚝 𝚢𝚘𝚞𝚛 𝚝𝚘𝚔𝚎𝚗 𝚋𝚎𝚌𝚊𝚞𝚜𝚎 𝚒𝚝𝚜 ${response.data.message}`, event.threadID);
        }
      } catch (error) {
        console.error("🔴 | 𝙴𝚛𝚛𝚘𝚛 𝚏𝚎𝚝𝚌𝚑𝚒𝚗𝚐 𝚝𝚘𝚔𝚎𝚗", error);
        api.sendMessage("🔴 | 𝙴𝚛𝚛𝚘𝚛 𝚏𝚎𝚝𝚌𝚑𝚒𝚗𝚐 𝚝𝚘𝚔𝚎𝚗, 𝙿𝚕𝚎𝚊𝚜𝚎 𝚝𝚛𝚢 𝚊𝚐𝚊𝚒𝚗 𝚕𝚊𝚝𝚎𝚛.", event.threadID);
  } 
};
