const { MessageEmbed } = require("discord.js");
const tinyurl = require("tinyurl-api");

module.exports = {
  name: "shorturl",
  aliases: ["url", "tinyurl"],
  description: ('shorturl'),
  async execute(message, args, Discord, client) {
    const url = args.join(" ");
    if (!url) {
      const errorEmbed = new MessageEmbed()
        .setColor("RED")
        .setTitle("Błąd! (`Argumenty`)")
        .setDescription("Podaj URL, który mam skrócić.")
        .setFooter(
          `Komenda wywołana przez ${message.author.username}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp();

      return;
    }

    if (!url.startsWith("https://")) {
      const errorEmbed = new MessageEmbed()
        .setColor("RED")
        .setTitle("Błąd! (`Argumenty`)")
        .setDescription("Podaj prawidłowy URL, który mam skrócić.")
        .setFooter(
          `Komenda wywołana przez ${message.author.username}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp();
      return;
    }

    const shortURL = await tinyurl(url);

    const embed = new MessageEmbed()
      .setTitle("Wykonano pomyślnie!")
      .setColor("RANDOM")
      .setURL(shortURL)
      .setDescription(`Link znajdziesz [tutaj](${shortURL}):\n**${shortURL}**`)
      .setFooter(
        `Komenda wywołana przez ${message.author.username}`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp();

      message.channel.send(embed)
  },
};