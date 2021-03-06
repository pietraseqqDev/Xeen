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
        .addField(`๐  Moderacyjne (${administracyjne_ilosc})`, `\`${administracyjne_lista}`)
        .addField(`๐ Ticket(${tic_ilosc})`, `\`${tic_lista}`)
        .addField(`๐ 4Fun (${rozrywka_ilosc})`, `\`${rozrywka_lista}`)
        .addField(`๐จโ๐ผ Uลผytkownicze (${uzytkownicze_ilosc})`, `\`${uzytkownicze_lista}`)
        .addField(`๐ค Bot (${bot_ilosc})`, `\`${bot_lista}`)
        .addField(`๐ Ekonomia(${eko_ilosc})`, `\`${eko_lista}`)
        .addField(`โ Developerskie (${dev_ilosc})`, `\`${dev_lista}`)
        //.setDescription(`Hej jesem botem **wielofunkcyjnym** Caลy czs mรณj owner oraz moi developerzy starajฤ siฤ abym miaล jak najwiฤcej przydatnych komend!\n๐ **Komendy moderacyjne:**๐ \nban, unban, kick, rr, ankieta, clear, nickname, warn, warnlist, embed, slowmode\n๐จโ๐ผ**Komendy Uลผytkownicze:**๐จโ๐ผ\nuserinfo, serverinfo, genbotinvite\n๐**Komendy 4fun:**๐\n8ball, avatar, bird, cat, coinflip, dog, duck, fox, img, servericon, shiba, shorturl, stickbug, say\nโน**Komendy informacyjne:**โน\nping, help, koloryhex\n๐**Komendy ekonomii:**๐\nwork, balance, deposit, withdraw **Dla developera:** give\n๐ค**Komendy dot. bota:**๐ค\n prefix, reset-prefix, invite, ocena\nโ**Komendy Developerskie:**โ\ngban, gunban, eval`)
        .setFooter('Flameo ๐ฅ');

        let newEmbed2 = new Discord.MessageEmbed()
 
        .setColor('#3366ff')
        .setTitle(`Pomoc! (${wszystko_ilosc})`)
        .addField(`๐  Moderacyjne (${administracyjne_ilosc})`, `\`${administracyjne_lista}`)
        .addField(`๐ Ticket(${tic_ilosc})`, `\`${tic_lista}`)
        .addField(`๐ 4Fun (${rozrywka_ilosc})`, `\`${rozrywka_lista}`)
        .addField(`๐จโ๐ผ Uลผytkownicze (${uzytkownicze_ilosc})`, `\`${uzytkownicze_lista}`)
        .addField(`๐ค Bot (${bot_ilosc})`, `\`${bot_lista}`)
        .addField(`๐ Ekonomia(${eko_ilosc})`, `\`${eko_lista}`)
        //.setDescription(`Hej jesem botem **wielofunkcyjnym** Caลy czs mรณj owner oraz moi developerzy starajฤ siฤ abym miaล jak najwiฤcej przydatnych komend!\n๐ **Komendy moderacyjne:**๐ \nban, unban, kick, rr, ankieta, clear, nickname, warn, warnlist, embed, slowmode\n๐จโ๐ผ**Komendy Uลผytkownicze:**๐จโ๐ผ\nuserinfo, serverinfo, genbotinvite\n๐**Komendy 4fun:**๐\n8ball, avatar, bird, cat, coinflip, dog, duck, fox, img, servericon, shiba, shorturl, stickbug, say\nโน**Komendy informacyjne:**โน\nping, help, koloryhex\n๐**Komendy ekonomii:**๐\nwork, balance, deposit, withdraw **Dla developera:** give\n๐ค**Komendy dot. bota:**๐ค\n prefix, reset-prefix, invite, ocena`)
        .setFooter('Flameo ๐ฅ');
        
        if (message.author.id == "886587887095803926")
        {
        message.channel.send(newEmbed);
        }else
        {
            message.channel.send(newEmbed2)
        }
    },
};
