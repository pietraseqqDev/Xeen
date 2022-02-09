const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["pfp"],
  description: ('avatar'),
async execute(message, args, Discord, client) {
    const user = message.mentions.users.first() || message.author;

    const embed = new MessageEmbed()
      .setColor("RED")
      .setTitle(`Zdjęcie profilowe użytkownika ${user.username}`)
      .setImage(user.displayAvatarURL({ dynamic: true }));

    message.channel.send(embed);
  },
};