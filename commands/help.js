const Discord = require('discord.js');

module.exports = {
    name: 'help',
    execute(message, args) {
        const { prefix, token } = require('../index.js');
        const embed = new Discord.MessageEmbed()

        embed.setDescription("<a:008_nhubtown:765985914731495454> **Nocturnal Hub** <a:008_nhubtown:765985914731495454>\n\nHere is the list of commands you can use!\n\nWith these fun commands, you can either type the commands alone or tag someone!\n\n**Greetings**:\n> .gm, gn, wave, welcome\n\n**Actions**:\n> .bite, cuddle, hug, kill, kiss, .lick,  .pat, poke, punch, slap, shrug\n\n**Emotion**:\n> .blush, cry, fu, pout, sleepy, smile, tired\n\n**Others**:\n> .avatar, ping, invite")
        embed.setFooter('Nocturnal Hub')
        message.channel.send(embed)



    }

};