const prefixSchema = require("../../models/prefixSchema");

module.exports = {
  name: "reset-prefix",
  aliases: ['rest-prfx'],
  description: "reset guild's prefix",
  async execute(message, args, Discord, client) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('Błąd! (`Permisje`)').setDescription('Nie posiadasz uprawnień do wykonania tej komendy!'));
      return;
    }

    let dbPrefix = await prefixSchema.findOne({ guildID: message.guild.id });
    if (!dbPrefix) {
      message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('Błąd! (`Wykonanie`)').setDescription('Ten serwer nie posiada ustawionego prefx!'));
      return;
    }

    await prefixSchema.findOneAndDelete({ guildID: message.guild.id });
    message.channel.send(new Discord.MessageEmbed().setColor('GREEN').setTitle('Wykonano!').setDescription('Prefix wrócił do ustawień globalnych teraz kożystaj z `.`!'));
  },
};

// let dbPrefix = await prefixSchema.findOne({ guildID: message.guild.id });