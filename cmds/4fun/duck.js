const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "duck",
  aliases: ["kaczka"],
  description: ('duck'),
 async execute(message, args, Discord, client) {
    const res = await fetch("https://random-d.uk/api/v2/random");
    const img = (await res.json()).url;
    const embed = new MessageEmbed()
      .setTitle("🦆  Quack!  🦆")
      .setImage(img)
      .setFooter(
        message.member.displayName,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  },
};