const prefixSchema = require("../../models/prefixSchema");

module.exports = {
  name: "set-prefix",
  aliases: ['prefix'],
  description: "set the guild's prefix!",
  async execute(message, args, Discord, client) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('Błąd! (`Permisje`)').setDescription('Nie posiadasz uprawnień do wykonania tej komendy!'));
      return;
    }

    const newPrefix = args.join(" ");
    if (!newPrefix) {
      message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('Błąd! (`Argumenty`)').setDescription('Nie podałeś nowego prefixu!'));
      return;
    }

    await prefixSchema.findOneAndUpdate(
      {
        guildID: message.guild.id,
      },
      {
        prefix: newPrefix,
      },
      {
        upsert: true,
      }
    );

    message.channel.send(new Discord.MessageEmbed().setColor('GREEN').setTitle('Wykonano!').setDescription(`Pomyślnie ustawiono nowy prefix: ${newPrefix}`));
  },
};