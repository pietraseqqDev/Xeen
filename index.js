const Discord = require('discord.js');
const nodemon = require('nodemon');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const { token, prefix, prefix3, bot_activity } = require(`./config.js`)
const fs = require('fs');
const { Client, MessageEmbed } = require('discord.js');
const weather = require('weather-js');


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command.handler', 'event.handler'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord);
})





client.once('ready', () => {
setInterval(() => {
  client.user.setActivity(bot_activity, {type: 'WATCHING'})
}, 5000);
});







client.login(token);

