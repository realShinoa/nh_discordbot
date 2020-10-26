const Discord = require('discord.js');

module.exports = {
    name: 'shrug',
    description: '',
    execute(message, args) {
        const { prefix, token } = require('../index.js');
        const embed = new Discord.MessageEmbed()

        if (!message.mentions.users.first()) {
            embed.setDescription(`${message.author} says 'o well! ┐(ﾟ～ﾟ)┌ `)
            embed.setImage('https://media.tenor.com/images/da7c311bcc569cf74d8755dafc8a4dbb/tenor.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor("d7b8e9")
            return message.channel.send(embed)
        } else {
            const user = message.mentions.users.first()
            embed.setDescription(`${message.author} says 'o well! ┐(ﾟ～ﾟ)┌ `)
            embed.setImage('https://media.tenor.com/images/da7c311bcc569cf74d8755dafc8a4dbb/tenor.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}