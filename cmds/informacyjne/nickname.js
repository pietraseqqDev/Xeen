module.exports = {
    name: "nickname",
    aliases: ['nick', 'name', 'zmiennick'],
    description: "zmień nick osobie!",
    async execute(message, args, Discord, client) {
        const userTarget = message.mentions.users.first();
        if(!userTarget) {
            message.channel.send(new Discord.MessageEmbed().setColor('#FF0000').setTitle('Błąd! (`Argumenty`)').setDescription('Nie oznaczyłeś osoby!'));
            return;
        }

        const memberTarget = message.guild.members.cache.get(userTarget.id);

        const newNickname = args.slice(1).join(' ');
        if(!newNickname) {
            message.channel.send(new Discord.MessageEmbed().setColor('#FF0000').setTitle('Błąd! (`Argumenty`)').setDescription(`Nie podałeś nowego nickname'u!`));
            return;
        }

        memberTarget.setNickname(newNickname);
    }
}