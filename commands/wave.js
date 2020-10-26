const Discord = require('discord.js');

module.exports = {
    name: 'wave',
    description: '',
    execute(message, args) {
        const { prefix, token } = require('../index.js');
        const embed = new Discord.MessageEmbed()

        if (!message.mentions.users.first()) {
            embed.setDescription(`${message.author} says hello to everyone <a:011_nhub:762401995188469810> `)
            embed.setImage('https://i.pinimg.com/originals/f8/2f/df/f82fdfe817cfb8dacb5bd5c7dadb632d.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor("d7b8e9")
            return message.channel.send(embed)
        } else {
            const user = message.mentions.users.first()
            embed.setDescription(`${message.author} waves at ${user} <a:011_nhub:762401995188469810>`)
            embed.setImage('https://i.pinimg.com/originals/90/0e/50/900e502f7534a3756106655170ff6397.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}