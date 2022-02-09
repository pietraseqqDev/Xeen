const { owner_id } = require('../../config')
module.exports = {
    name: 'eval',
    description: 'eval',
    async execute(message, args, Discord, client) {
        const gbanPermisje = new Discord.MessageEmbed()
        .setTitle('Błąd! (`Permisje`)')
        .setDescription(`Tylko wlasciciel moze uzyc tej komendy!`)
        .setColor(`RED`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        if (message.author.id == owner_id)
        {
            if (!args[0]) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle('Błąd! (`Argumenty`)')
                    .setColor('RED')
                    .setDescription(`Musisz podać kod!`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                const code = args.join(` `);
                if (!(code.includes(`token`) || code.includes(`TOKEN`))) {
                    try {
                        const evaled = await eval(code)
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`Sukces!`)
                            .setColor('GREEN')
                            .setDescription(`Pomyślnie wykonano kod!\n:inbox_tray: Kod wejściowy: **${code}**\n:outbox_tray: Kod wyjściowy: **${evaled}**`)
                            .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                    } catch (e) {
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle('Błąd! (`Wykonywanie`)')
                            .setColor('RED')
                            .setDescription(`Wystąpił błąd podczas wykonywania kodu!\n:inbox_tray: Kod wejściowy: ${code}\n:outbox_tray: Kod wyjściowy: **${e}**`)
                            .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                    }
                }
            }
        } else {
            message.channel.send(gbanPermisje)
        }
    }
}
