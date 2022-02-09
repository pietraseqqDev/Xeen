module.exports = {
    name: "say",
    description: "say something",
    execute(message, args, Discord, client) {
        let Arguments = args.join(' ');

        if(!Arguments) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('Błąd! (`Argumenty`)').setDescription('Nie poodałeś co chcesz napisać!'));
        
        
        if(Arguments){
        message.delete();
        const embed = new Discord.MessageEmbed()
        .setTitle('Say!')
        .setDescription(`${Arguments}`)
        .setFooter(`Komendy say użył: ${message.author.tag}(${message.author.id})`) 
        message.channel.send(embed);
        }
    }
}