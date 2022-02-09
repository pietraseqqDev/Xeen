module.exports = {
    name: 'invite',
    aliases: ['zapros'],
    description: 'help',
    execute(message, args, Discord) {
        let embed = new Discord.MessageEmbed()
        .setTitle('Zaproś bota!')
        .addField(` Dodaj bota:`, `[Klik!](https://discord.com/api/oauth2/authorize?client_id=911673952336740363&permissions=8&scope=bot)`)
        .addField(` Serwer bota:`, `[Klik!](https://discord.gg/QTUBpFGhvd)`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))

        message.channel.send(embed)
    }
}
