const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "koloryhex",
    aliases: ['hex', 'kolory'],
    descripton: 'zobacz kolory hex',
    execute(message, args, Discord, client) {
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`Kolory hex`)
        .addField('Kreator kolorów w formacie hex znajdziesz tu:', '[KLIKNIJ TUTAJ](https://htmlcolorcodes.com/color-picker/)', true)
        .setFooter(
            `${message.author.tag} | ${message.author.id}`,
        message.author.displayAvatarURL({ dynamic: true })
        );
        
        
        
        message.channel.send(embed);
    }
}