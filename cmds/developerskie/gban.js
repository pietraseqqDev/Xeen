const blacklist = require('../../models/blacklist')
const { MessageEmbed } = require('discord.js')
const { owner_id } = require('../../config')
module.exports = {
    name: 'gban',
    description: 'gban',
    execute(message, args, Discord, client) {
        const gbanPermisje = new Discord.MessageEmbed()
        .setTitle('Błąd! (`Permisje`)')
        .setDescription(`Tylko wlasciciel moze uzyc tej komendy!`)
        .setColor(`RED`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        if (message.author.id == owner_id)
        {
        const User = message.guild.members.cache.get(args[0])
        const gbanPermisjeEEE = new Discord.MessageEmbed()
        .setTitle('Błąd! (`Argumenty`)')
        .setDescription(`Nie wpisałeś id!`)
        .setColor(`RED`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
       if(!User) 
        {
          message.channel.send(gbanPermisjeEEE);
          return;
        }

        blacklist.findOne({ id : User.user.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
        const gbanPermisjeE = new Discord.MessageEmbed()
        .setTitle('Błąd! (`Argumenty`)')
        .setDescription(`**${User.displayName}** Ma już gbana!`)
        .setColor(`RED`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(gbanPermisjeE)
            } else {
                data = new blacklist({ id : User.id })
                data.save()
                .catch(err => console.log(err))
        const gbanPermisjeEE = new Discord.MessageEmbed()
        .setTitle('gBAN')
        .setDescription(`${User.user.tag} Został nadany mu gban.`)
        .setColor(`GREEN`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(gbanPermisjeEE);
        const serverdev = client.guilds.cache.get('874233472925986827');
        const kanal = serverdev.channels.cache.get('897186080133107733');
        const gbanpow = new Discord.MessageEmbed()
        .setTitle('GBAN!')
        .setDescription(`${User.user.tag} Został globalnie zbanowany!`)
        .setColor('RED')
        .setFooter(`Flameo | System gban`)
        kanal.send(gbanpow);
            }
           
        })
    } else {message.channel.send(gbanPermisje)}
}
}
