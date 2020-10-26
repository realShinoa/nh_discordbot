const Discord = require('discord.js');

module.exports = {
    name: 'blush',
    description: '',
    execute(message, args) {
        const { prefix, token } = require('../index.js');
        const embed = new Discord.MessageEmbed()

        if (!message.mentions.users.first()) {
            embed.setDescription("a-ano...e-eto..uuuuu >///< !!")
            embed.setImage('https://media.tenor.com/images/0d4260a30ddf2647a9e1824b8e68defd/tenor.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor("d7b8e9")
            return message.channel.send(embed)
        } else {
            const user = message.mentions.users.first()
            embed.setDescription(`${message.author} blushed >///< !! kawai~ `)
            embed.setFooter('Nocturnal Hub')
            embed.setImage('https://i.imgur.com/zU8qLJx.gif')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}