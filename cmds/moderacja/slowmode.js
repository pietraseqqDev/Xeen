const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "slowmode",
    description: "Set the slowmode of a channel.",
    async execute(message, args, Discord, client) {
        const perms = new MessageEmbed()
        .setColor('RED')
        .setTitle('Błąd! (`Permisje`)')
        .setDescription(`Nie posiadasz permisji do użycia tej komendy!\n\nWymagane permisje: **Zarządzanie kanałami**!`)
        
        const sek = new MessageEmbed()
        .setColor('RED')
        .setTitle('Błąd! (`Argumenty`)')
        .setDescription('Podaj czas w sekundech!')

        const powod = new MessageEmbed()
        .setColor('RED')
        .setTitle('Błąd! (`Argumenty`)')
        .setDescription('Podaj powód włączenia slowmode!')


        if(!message.member.hasPermission("MANAGE_CHANNELS")) {
            return message.channel.send(perms)
        }
        let duration = args[0]
        if(isNaN(duration)) return message.channel.send(sek)
        let reason = args.slice(1).join(" ")
        if(!reason) return message.channel.send(powod)
        
        message.channel.setRateLimitPerUser(duration, reason)
        const sukces = new MessageEmbed()
        .setColor('GREEN')
        .setTitle(`Sukces!`)
        .setDescription(`Pomyślnie ustawiono slowmode!\n\n**Czas slowmode:**\n${duration}\n\n**Powód:**\n${reason}`)

        
        
        message.channel.send(sukces)
    }
}
