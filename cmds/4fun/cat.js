const nekoclient = require("nekos.life");
const neko = new nekoclient();

module.exports = {
  name: "cat",
  aliases: ["kot", "kotek"],
  description: ('cat'),
   async execute(message, args, Discord, client) {
    if (!message.guild) return;
    async function cat() {
      const kotek = await neko.sfw.meow();
      const embed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle(`Randomowy Kot`)
        .setImage(kotek.url)
        .setFooter("© Copyright by Kinius for Ragebot 2021");
      message.channel.send(embed);
    }
    cat();
  },
};