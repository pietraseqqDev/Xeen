const warnSchema = require('../../models/warnSchema');

module.exports = {
    name: "warn",
    aliases: [],
    description: "warn someone!",
    async execute(message, args, Discord, client) {
        
        const warnPermisje = new Discord.MessageEmbed()
        .setTitle('Błąd! (`Permisje`)')
        .setDescription(` Nie posiadasz permisji do użycia tej komendy!\n\nWymagane permisje: **Administrator**!`)
        .setColor(`RED`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        
        
        if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(warnPermisje).then(msg => {
})
        
        
        
        const userTarget = message.mentions.users.first();
        if(!userTarget) {
            message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('Błąd! (`Permisje`)').setDescription('Nie oznaczyłeś użytkownika któremu chcesz dać warna!'));            
            return;
        }

        const reason = args.slice(1).join(' ');
        if (!reason) {
            message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('Błąd! (`Argumenty`)').setDescription('Nie podałeś powodu warna!'));
            return;
        }

        const warning = {
            moderator: message.author.tag,
            timestamp: new Date().getTime(),
            reason
        }

        await warnSchema.findOneAndUpdate({
            userID: userTarget.id,
            guildID: message.guild.id
        }, {
            $push: {
                warnings: warning
            }
        }, {
            upsert: true
        })

        message.channel.send(new Discord.MessageEmbed().setColor('GREEN').setTitle(` Sukces`).setDescription(`Pomyślnie ostrzezono uzytkownika ${userTarget.tag} za **${reason}**.`))
    }
}        
        
        
        
    
