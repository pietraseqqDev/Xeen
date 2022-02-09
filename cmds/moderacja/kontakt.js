module.exports = {
    name: 'kontakt',
    description: 'ban',
    execute(message, args, Discord, client) {
        const osoba = message.mentions.members.first();
        const reason = args.slice(1).join(" ");
        const banPermisje = new Discord.MessageEmbed()
        .setTitle('Błąd! (`Permisje`)')
        .setDescription(`Nie posiadasz permisji do użycia tej komendy!\n\nWymagane permisje: **Administrator**!`)
        .setColor(`RED`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
    
        const banOznacz = new Discord.MessageEmbed()
        .setTitle('Błąd! (`Argumenty`)')
        .setDescription(` ${message.author} Nie oznaczyłeś osoby z którą chcesz się skontaktować!`)
        .setColor(`RED`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))

        const co = new Discord.MessageEmbed()
        .setTitle('Błąd! (`Argumenty`)')
        .setDescription(` ${message.author} Nie wpisałeś co chcesz wysłać`)
        .setColor(`RED`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))

        const sukces = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle(`Sukces!`)
        .setDescription(`Pomyślnie wysłano wiadomość`)

        const sukces2 = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle(`:book: Kontakt`)
        .setDescription(`Administrator ${message.author.tag} nawiązał kontakt.\nWiadomość: ${reason}`)




        if(!message.member.hasPermission('ADMINISTRATOR')){
            return message.channel.send(banPermisje)
        } else {
            if(!osoba){
                return message.channel.send(banOznacz)
            }

            if(!reason){
                return message.channel.send(co)
            }
            message.delete()
            message.channel.send(sukces)
            client.users.cache.get('886587887095803926').send(sukces2)
            client.users.cache.get(osoba.id).send(sukces2)

        }
    

    }
}
