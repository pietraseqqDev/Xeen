const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "embed",
  aliases: [],
  description: "create an embed!",
  async execute(message, args, Discord, client) {
    const embedChannel = message.mentions.channels.first();
    if (!embedChannel) {
      message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('Błąd! (`Argumenty`)').setDescription('Nie oznaczyłeś kanału na którym a zostać wysłąny embed!'));
      return;
    }

    const content = args.slice(1).join(" ");

    // Opcje embeda;
    let embedColor = content.split("|")[0];
    if (!embedColor) {
      message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('Błąd! (`Argumenty`)').setDescription('Nie poodałeś koloru embeda!'));
      return;
    }

    let embedTitle = content.split("|")[1];
    if (!embedTitle) {
      message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('Błąd! (`Argumenty`)').setDescription('Nie poodałeś tytułu embeda!'));
      return;
    }

    let embedDescription = content.split("|")[2];
    if (!embedDescription) {
      message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('Błąd! (`Argumenty`)').setDescription('Nie poodałeś opisu embeda!'));
      return;
    }

    // Finalne tworzenie embeda;
    let embed = new MessageEmbed()
      .setColor(embedColor)
      .setTitle(embedTitle)
      .setDescription(embedDescription)
      .setFooter(
        `${message.author.tag} | ${message.author.id}`,
        message.author.displayAvatarURL({ dynamic: true })
      );
    message.delete();
    embedChannel.send(embed);
  },
};