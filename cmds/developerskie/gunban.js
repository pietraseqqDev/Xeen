const blacklist = require('../../models/blacklist')
const { MessageEmbed } = require('discord.js')
const { owner_id } = require('../../config')
module.exports = {
        name: 'gunban',
        description: 'gban',
        execute(message, args, Discord) {
        const gwl = new Discord.MessageEmbed()
        .setTitle('Błąd! (`Permisje`)')
        .setDescription(`Tylko wlasciciel moze uzyc tej komendy!`)
        .setColor(`RANDOM`)
        if (message.author.id == owner_id)
        {
        const User = message.guild.members.cache.get(args[0])
        const gbanPermisjeEEEE = new Discord.MessageEmbed()
        .setTitle('Błąd! (`Argumenty`)')
        .setDescription(`Nie wpisałeś id!`)
        .setColor(`RANDOM`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        if(!User) return message.channel.send(gbanPermisjeEEEE)

        blacklist.findOne({ id : User.user.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
               await blacklist.findOneAndDelete({ id : User.user.id })
                .catch(err => console.log(err))
                const gbanPermisjeEE = new Discord.MessageEmbed()
                .setTitle('GUNBAN')
                .setDescription(`${User.user.tag} Został mu usunięty gban.`)
                .setColor(`RANDOM`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(gbanPermisjeEE)
            } else {
                const gbanPermisjeEEEEE = new Discord.MessageEmbed()
                .setTitle('Błąd! (`Argumenty`)')
                .setDescription(` **${User.displayName}** nie ma gbana!`)
                .setColor(`RANDOM`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
               message.channel.send(gbanPermisjeEEEEE);
        const serverdev = client.guilds.cache.get('874233472925986827');
        const kanal = serverdev.channels.cache.get('897186080133107733');
        const gbanpow = new Discord.MessageEmbed()
        .setTitle('GUNBAN!')
        .setDescription(`${User.user.tag} Został globalnie odbanowany!`)
        .setColor('GREEN')
        .setFooter(`Flameo | System gban`)
        kanal.send(gbanpow);
            }
           
        })
    } else {message.channel.send(gwl)}
}
}
