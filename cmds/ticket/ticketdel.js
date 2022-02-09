module.exports = {
    name: "ticketdel",
    aliases: [],
    description: "del a ticket!",
    async execute(message, args, Discord, client) {
        if(!message.member.hasPermission("MENAGE_CHANNELS")) return;
        message.channel.send("Usuwanie kanału!");
            setTimeout(() => channel.delete(), 5000);
    }
}