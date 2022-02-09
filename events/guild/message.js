const { prefix: defaultPrefix } = require("../../config");
const prefixSchema = require("../../models/prefixSchema");
const Discord = require('discord.js');
const blacklist = require('../../models/blacklist')
const { MessageEmbed } = require('discord.js')
 
module.exports = async (Discord, client, message) => {
  let prefix;
  let prefix2;
  let dbPrefix = await prefixSchema.findOne({ guildID: message.guild.id });
  let mentionpre = message.content.match(new RegExp(`^<@!?(${client.user.id})>`, "gi"));
    
            const gban = new Discord.MessageEmbed()
        
        .setTitle('Błąd! (`Wykonanie`)')   
        .setDescription(`Posiadasz globalną blokadę komend!`)
        .setColor(`RED`)
 
  if (dbPrefix) {
    prefix = dbPrefix.prefix;
  } else {
    prefix = defaultPrefix
  }
  if (mentionpre) {
    prefix = `${mentionpre[0]} `;
  }
 

  if (message.author.bot) return false;
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
    const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
    return message.channel.send((new Discord.MessageEmbed().setColor('#00FF02').setTitle('Reakcja na ping!📌').setDescription(`Cześć jestem **Flameo** a to moje dane:\n> Globalny prefix: **.**\n> komendy znajdziesz pod **.help**`)));
    }
 
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  
 
  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();
 
  const command =
    client.commands.get(cmd) ||
    client.commands.find((a) => a.aliases && a.aliases.includes(cmd));

 
     const embed = new Discord.MessageEmbed()
    .setTitle('Błąd! (`komenda`)')
    .setDescription(`Ta komenda nie istnieje`)
    .setColor('RANDOM')
      if(!command) return message.channel.send(embed)
    
        if (!message.content.startsWith(prefix)) return;
    blacklist.findOne({ id : message.author.id }, async(err, data) => {
        if(err) throw err;
        if(!data) {
    
    if (command) command.execute(message, args, Discord, client);
  } else {
          message.channel.send(gban);
        }
              });
};