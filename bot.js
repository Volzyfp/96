const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : Lumiz`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Lumiz ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`TEXT`,"http://twitch.tv/Dream")
client.user.setStatus("Done")
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
