module.exports = {
    name: "ticket",
    aliases: [],
    description: "open a ticket!",
    async execute(message, args, Discord, client) {
      const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);
      
  
      channel.updateOverwrite(message.guild.id, {
        SEND_MESSAGE: false,
        VIEW_CHANNEL: false,
      });
      channel.updateOverwrite(message.author, {
        SEND_MESSAGE: true,
        VIEW_CHANNEL: true,
      });
  
      const reactionMessage = await channel.send("Dziękujemy za kontakt z supportem!\n🔒 - blokada wysyłania wiadomości\n⛔ - usuwanie ticketa\n(gdyby usuwanie kanału nie działało użyj .ticketdel)!");
  
      try {
        await reactionMessage.react("🔒");
        await reactionMessage.react("⛔");
      } catch (err) {
        channel.send("nie możemy wysłać emotek");
        throw err;
      }
  
      const collector = reactionMessage.createReactionCollector(
        (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
        { dispose: true }
      );
  
      collector.on("collect", (reaction, user) => {
        switch (reaction.emoji.name) {
          case "🔒":
            channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
            break;
          case "⛔":
            channel.send("Usuwanie kanału!");
            setTimeout(() => channel.delete(), 5000);
            break;
        }
      });
  
      message.channel.send(`Pomożemy ci! ${channel}`).then((msg) => {
          setTimeout(() => msg.delete(), 7000);
          setTimeout(() => message.delete(), 3000);
        })
        .catch((err) => {
          throw err;
        });
    },
  };
  