module.exports = {
    name: 'genbotinvite',
    aliases: [],
    description: "generuj invite bota",
    async execute(message, args, Discord) {
        let Arguments = args.join(" ");
        let blad = new Discord.MessageEmbed()
        .setTitle('Błąd! (`Argumenty`)')
        .setColor('RED')
        .setDescription("Nie podałeś id bota!")
        .setFooter(`${message.author.tag}(${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        if(!Arguments){
            message.channel.send(blad)
        } else {
            let git = new Discord.MessageEmbed()
            .setTitle('Sukces!')
            .setColor('GREEN')
            .addField(`link:`, `[Autoryzuj(0)](https://discord.com/api/oauth2/authorize?client_id=${Arguments}&permissions=8&scope=bot)`)
            .setFooter(`${message.author.tag}(${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))

            message.channel.send(git)
        }
    }
}