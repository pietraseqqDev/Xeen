module.exports = {
    name: "ocena",
    aliases: ['ocen'],
    description: "ocena",
    async execute(message, args, Discord, client){
        let ocena = args.join(' ');
        const serverdev = client.guilds.cache.get('911582013612503050');
        const kanal = serverdev.channels.cache.get('911582533307752479');
        if(!ocena){
            let embed1 = new Discord.MessageEmbed()
            .setTitle('Błąd! (`Argumenty`)')
            .setDescription('Nie podałeś treści oceny!')
            .setColor('RED')

            message.channel.send(embed1)
        } else {
            let embed2 = new Discord.MessageEmbed()
            .setTitle('Nowa ocena!')
            .setDescription(`Ocenił: ${message.author.tag}\n\n Treść oceny: ${ocena}`)
            .setColor('GREEN')
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))

            let embed3 = new Discord.MessageEmbed()
            .setTitle('Sukces!')
            .setDescription(`Wysłano twoją ocenę: ${ocena} na serwer developerski!`)
            .setColor('GREEN')
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))

            message.channel.send(embed3)
            kanal.send(embed2)
        }
    }
}