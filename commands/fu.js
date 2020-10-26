const Discord = require('discord.js');

module.exports = {
    name: 'fu',
    description: '',
    execute(message, args) {
        const { prefix, token } = require('../index.js');
        const embed = new Discord.MessageEmbed()

        if (!message.mentions.users.first()) {
            embed.setDescription("fakku くそ <:Kanna_Fu:760735881295822899><a:011_nhub:762401995188469810>!")
            embed.setImage('https://media.giphy.com/media/wY7l6SG1L4oms/giphy.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor("d7b8e9")
            return message.channel.send(embed)
        } else {
            const user = message.mentions.users.first()
            embed.setDescription(`fakku くそ ${user} <:Kanna_Fu:760735881295822899><a:011_nhub:762401995188469810>!`)
            embed.setImage('https://media.giphy.com/media/wY7l6SG1L4oms/giphy.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}
