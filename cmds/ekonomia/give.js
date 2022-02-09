const { MessageEmbed } = require("discord.js");
const profileSchema = require("../../models/profileSchema");

module.exports = {
  name: "give",
  aliases: [],
  description: "give coins!",
  async execute(message, args, Discord, client) {
    const givePermisje = new Discord.MessageEmbed()
    .setTitle('Błąd! (`Permisje`)')
    .setDescription(`Tylko wlasciciel moze uzyc tej komendy!`)
    .setColor(`RED`)
    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
    if (message.author.id == "794944108803653642")
{

    const userTarget = message.mentions.users.first();
    if (!userTarget) {
      const embed = new MessageEmbed()
        .setColor("RED")
        .setTitle("Błąd! (`Argumenty`)")
        .setDescription("Nie oznaczyłeś użytkownika!")
        .setFooter(
          `Komenda wywołana dla ${message.author.username}`,
          message.author.displayAvatarURL()
        );
      message.channel.send(embed);
      return;
    }

    const amount = args[1];
    if (!amount || isNaN(amount) || amount % 1 != 0 || amount <= 0) {
      const embed = new MessageEmbed()
        .setColor("RED")
        .setTitle('Błąd! (`Argumenty`)')
        .setDescription("Nie podałeś prawidłowej cyfry!")
        .setFooter(
          `Komenda wywołana dla ${message.author.username}`,
          message.author.displayAvatarURL({ dynamic: true })
        );

      message.channel.send(embed);
      return;
    }

    await profileSchema.findOneAndUpdate(
      {
        userID: userTarget.id,
        guildID: message.guild.id,
      },
      {
        $inc: {
          coins: amount,
        },
      },
      {
        upsert: true,
      }
    );

    const dodano = new MessageEmbed()
    .setColor('GREEN')
    .setTitle(`Sukces!`)
    .setDescription(`Pomyślnie dodano \`${amount}\` do portfela ${userTarget}`)
    .setFooter(
        `Komenda wywołana dla ${message.author.username}`,
        message.author.displayAvatarURL({ dynamic: true })
    );

    message.channel.send(dodano);
  } else {message.channel.send(givePermisje)};
},
};