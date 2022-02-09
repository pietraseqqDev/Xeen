module.exports = {
    name: 'ankieta',
    description: 'zrób ankietę!',
    async execute(message, args, Discord) {
        message.delete();
        
        let Arguments = args.join(' ');
 
        let newEmbed = new Discord.MessageEmbed()
        .setColor('#FFFFFF')
        .setTitle(`Ankieta!`)
        .setDescription(`${Arguments}`)
        .setFooter('Użyj reakcji, aby zagłosować.');
 
        let messageEmbed = await message.channel.send(newEmbed);
 
        messageEmbed.react('👍');
        messageEmbed.react('👎');
    },
};