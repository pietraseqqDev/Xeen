const fs = require('fs');
const administracyjne_ilosc = fs.readdirSync(`cmds/moderacja`).length
const administracyjne_lista = fs.readdirSync(`cmds/moderacja`).join(` \``).replace(/\.js/gi, `\``)
const uzytkownicze_ilosc = fs.readdirSync(`cmds/informacyjne`).length
const uzytkownicze_lista = fs.readdirSync(`cmds/informacyjne`).join(` \``).replace(/\.js/gi, `\``)
const bot_ilosc = fs.readdirSync(`cmds/bot`).length
const bot_lista = fs.readdirSync(`cmds/bot`).join(` \``).replace(/\.js/gi, `\``)
const rozrywka_ilosc = fs.readdirSync(`cmds/4fun`).length
const rozrywka_lista = fs.readdirSync(`cmds/4fun`).join(` \``).replace(/\.js/gi, `\``)
const dev_ilosc = fs.readdirSync(`cmds/developerskie`).length
const dev_lista = fs.readdirSync(`cmds/developerskie`).join(` \``).replace(/\.js/gi, `\``)
const eko_ilosc = fs.readdirSync(`cmds/ekonomia`).length
const eko_lista = fs.readdirSync(`cmds/ekonomia`).join(` \``).replace(/\.js/gi, `\``)
const tic_ilosc = fs.readdirSync(`cmds/ticket`).length
const tic_lista = fs.readdirSync(`cmds/ticket`).join(` \``).replace(/\.js/gi, `\``)
const wszystko_ilosc = administracyjne_ilosc + bot_ilosc +  + rozrywka_ilosc + dev_ilosc + uzytkownicze_ilosc + eko_ilosc
module.exports = {
    name: 'help',
    aliases: ['pomoc', 'komendy'],
    description: 'help',
    execute(message, args, Discord) {
        let newEmbed = new Discord.MessageEmbed()
 
        .setColor('#3366ff')
        .setTitle(`Pomoc! (${wszystko_ilosc})`)
        .addField(`🛠 Moderacyjne (${administracyjne_ilosc})`, `\`${administracyjne_lista}`)
        .addField(`🎟 Ticket(${tic_ilosc})`, `\`${tic_lista}`)
        .addField(`🎉 4Fun (${rozrywka_ilosc})`, `\`${rozrywka_lista}`)
        .addField(`👨‍💼 Użytkownicze (${uzytkownicze_ilosc})`, `\`${uzytkownicze_lista}`)
        .addField(`🤖 Bot (${bot_ilosc})`, `\`${bot_lista}`)
        .addField(`💎 Ekonomia(${eko_ilosc})`, `\`${eko_lista}`)
        .addField(`⛑ Developerskie (${dev_ilosc})`, `\`${dev_lista}`)
        //.setDescription(`Hej jesem botem **wielofunkcyjnym** Cały czs mój owner oraz moi developerzy starają się abym miał jak najwięcej przydatnych komend!\n🛠**Komendy moderacyjne:**🛠\nban, unban, kick, rr, ankieta, clear, nickname, warn, warnlist, embed, slowmode\n👨‍💼**Komendy Użytkownicze:**👨‍💼\nuserinfo, serverinfo, genbotinvite\n🎉**Komendy 4fun:**🎉\n8ball, avatar, bird, cat, coinflip, dog, duck, fox, img, servericon, shiba, shorturl, stickbug, say\nℹ**Komendy informacyjne:**ℹ\nping, help, koloryhex\n💎**Komendy ekonomii:**💎\nwork, balance, deposit, withdraw **Dla developera:** give\n🤖**Komendy dot. bota:**🤖\n prefix, reset-prefix, invite, ocena\n⛑**Komendy Developerskie:**⛑\ngban, gunban, eval`)
        .setFooter('Flameo 🔥');

        let newEmbed2 = new Discord.MessageEmbed()
 
        .setColor('#3366ff')
        .setTitle(`Pomoc! (${wszystko_ilosc})`)
        .addField(`🛠 Moderacyjne (${administracyjne_ilosc})`, `\`${administracyjne_lista}`)
        .addField(`🎟 Ticket(${tic_ilosc})`, `\`${tic_lista}`)
        .addField(`🎉 4Fun (${rozrywka_ilosc})`, `\`${rozrywka_lista}`)
        .addField(`👨‍💼 Użytkownicze (${uzytkownicze_ilosc})`, `\`${uzytkownicze_lista}`)
        .addField(`🤖 Bot (${bot_ilosc})`, `\`${bot_lista}`)
        .addField(`💎 Ekonomia(${eko_ilosc})`, `\`${eko_lista}`)
        //.setDescription(`Hej jesem botem **wielofunkcyjnym** Cały czs mój owner oraz moi developerzy starają się abym miał jak najwięcej przydatnych komend!\n🛠**Komendy moderacyjne:**🛠\nban, unban, kick, rr, ankieta, clear, nickname, warn, warnlist, embed, slowmode\n👨‍💼**Komendy Użytkownicze:**👨‍💼\nuserinfo, serverinfo, genbotinvite\n🎉**Komendy 4fun:**🎉\n8ball, avatar, bird, cat, coinflip, dog, duck, fox, img, servericon, shiba, shorturl, stickbug, say\nℹ**Komendy informacyjne:**ℹ\nping, help, koloryhex\n💎**Komendy ekonomii:**💎\nwork, balance, deposit, withdraw **Dla developera:** give\n🤖**Komendy dot. bota:**🤖\n prefix, reset-prefix, invite, ocena`)
        .setFooter('Flameo 🔥');
        
        if (message.author.id == "886587887095803926")
        {
        message.channel.send(newEmbed);
        }else
        {
            message.channel.send(newEmbed2)
        }
    },
};
