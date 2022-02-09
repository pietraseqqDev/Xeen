module.exports = {
    name: "ping",
    description: "ping pong!",
    execute(message, args, Discord, client) {
        let waitingEmbed = new Discord.MessageEmbed()
            .setColor("#B5BFFF")
            .setTitle("Obliczanie pingu...");
 
        message.channel.send(waitingEmbed).then(async resultMessage =>{
            const ping = await resultMessage.createdTimestamp - message.createdTimestamp;
            const pingembed = new Discord.MessageEmbed()
            .setTitle('Ping!')
            .setColor('#B5BFFF')
            .setDescription(`**${message.author.tag}**, ping bota wynosi **${ping}ms**`)
            resultMessage.edit(pingembed);
            
        })
       }
    }