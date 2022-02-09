const warnSchema = require('../../models/warnSchema');

module.exports = {
    name: "list-warnings",
    aliases: ['warnlist', 'lw'],
    description: "see someone warnings!",
    async execute(message, args, Discord, client) {
        const userTarget = message.mentions.users.first();
        if(!userTarget) {
            message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('Błąd! (`Argumenty`)').setDescription('Nie podałeś użytkownika!'));
            return;
        }

        const results = await warnSchema.findOne({
            userID: userTarget.id,
            guildID: message.guild.id
        })

        if(!results || results === null) {
            message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('Błąd! (`Baza Danych`)').setDescription('Nie odnaleziono warnów!'));
            return;
        }

        let reply = `Ostrzezenia użytkownika ${userTarget}: \n\n`;

        for(const warning of results.warnings) {
            const { moderator, timestamp, reason } = warning;

            reply += `Od: ${moderator}, kiedy: ${new Date(timestamp).toLocaleDateString()}, powód: **${reason}**\n`;
        }

        message.channel.send(reply)
    }
}

//`Od: ${moderator}, kiedy: ${new Date(timestamp).toLocaleDateString()}, powód: ${reason}\n`