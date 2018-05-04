const botsettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix =botsettings.prefix;
const bot = new Discord.Client();
bot.login(botsettings.token);

bot.on("ready", async () =>{

console.log(`Bot is ready! ${bot.user.username}`);
  bot.generateInvite(["ADMINISTRATOR"]).then(link =>{
    console.log(link);
   });
  });
 bot.on("message", async message => {
  let command = message.content
   
    if(command === `${prefix}pc`) {
      message.channel.send("_**Case:**_ Phanteks Enthoo Pro M" + "\n" + "_**PSU:**_ Corsair CX 550M" + "\n" + "_**CPU:**_ Intel Core I5 6500 3.2GHz" + "\n" + "_**Motherboard:**_ ASUS H110M-K" + "\n" + "_**RAM:**_ 16GB (2x8) Corsair Vengeance LPX DDR4 2133MHz" + "\n" + "_**GPU:**_ Gigabyte GeForce GTX 1060 6GB G1 Gaming" + "\n" + "_**SSD:**_ 120GB Kingston 300V" + "\n" + "_**HDD:**_ WD Blue 1TB");
    }
   });
 
  
/* bot.on('ready', () => {
  const ffmpeg = require('ffmpeg');
   let channel = bot.channels.get('419458561303904262');
      channel.join()
      .then(connection => console.log('Connected'))
  .catch(console.error);
   });   */
   
   bot.on("message", async message => {
    let command = message.content

    if(command === `${prefix}roll`){
     var roll = Math.floor(Math.random() * 6) +1;
      message.reply("You rolled a"+ " " + roll);
    }
   });