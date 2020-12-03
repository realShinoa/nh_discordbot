const Discord = require('discord.js');
module.exports = {
    name: 'embed',
    execute(message, args) {
        const { prefix, token } = require(`../index.js`);
        const embed = new Discord.MessageEmbed()



        embed.setTitle('Guess the Christmas Song')
        embed.setDescription("•• ━━━━━ ••●•• ━━━━━ ••\n\nGood day, <@&756660732942352544>! <a:011_nhub:762401995188469810>\n\n**Nocturnal Hub** will be hosting a **Guess the Christmas Song** event, tomorrow night at 7:30 PM! \n\n> __Mechanics__:\n\n➽ Must be in Events VC once the event starts.\n➽ Each participant must guess the **Christmas Song** and put the answers in <#784024682860249148>.\n➽ Each time a participant guess the song correctly will receive a point.\n\nMechanics will be explained further by the hosts before the event starts.\n\n**Where**: Nocturnal Hub (Events VC)\n**When**: December 05. 7:30 PM\n**Hosts**: <@676675079370833960> & <@509178015427854348>\n\n> __Event Prize__: \n\n> <a:004_stars:761643682705178634> 1st Place: 150php, 150,000 casino coins \n> <a:004_stars:761643682705178634> 2nd Place: 100php, 100,000 casino coins\n> <a:004_stars:761643682705178634> 3rd Place: 50php, 50,000 casino coins \n\nSponsored by: <@745089736128987226> & <@745269535057117235>\n\n•• ━━━━━ ••●•• ━━━━━ ••\n\nAnyone can join the event and have fun guessing **Christmas Songs** with us!\nServer Invite Link: https://discord.gg/HEKkrbPTum")
        embed.setImage('https://cdn.discordapp.com/attachments/765662435436134402/784031582545117225/ezgif-6-90fd53c6a83d.gif')
        embed.setFooter('Nocturnal Hub')
        message.channel.send(embed)

    }

};