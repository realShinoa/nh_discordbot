const Discord = require('discord.js');

module.exports = {
    name: 'help',
    execute(message, args) {
        const { prefix, token } = require('../index.js');
        const embed = new Discord.MessageEmbed()

        embed.setDescription("**NOCTURNAL HUB**\n\nHere is the list of commands you can use!\n\nWith these fun commands, you can either type the commands alone or tag someone!\n\n**Greetings:**\n.gm, gn, wave, welcome\n\n**Actions:**\n.bite, cuddle, dance, dc,  hug, kill, kiss, .lick, pat, poke, punch, slap, shrugm smug\n\n**Emotion:**\n.blush, cry, fu, pout, sleepy, smile, tired, ily\n\n**Others:**\n.avatar, cf (coinflip),  ping, invite")
        embed.setFooter('Nocturnal Hub')
        message.channel.send(embed)



    }

};