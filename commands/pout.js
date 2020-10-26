const Discord = require('discord.js');

module.exports = {
    name: 'pout',
    description: 's',
    execute(message, args) {
        const { prefix, token } = require('../index.js');
        const embed = new Discord.MessageEmbed()

        if (!message.mentions.users.first()) {
            embed.setDescription("**hmph >:c**")
            embed.setImage('https://i.pinimg.com/originals/c9/c9/ff/c9c9ff2eed3dff5c3b9f7c0c033704da.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor("d7b8e9")
            return message.channel.send(embed)
        } else {
            const user = message.mentions.users.first()
            embed.setDescription(`${message.author} pouts (ｰ ｰ;)`)
            embed.setImage('https://media1.tenor.com/images/58a26a738703565f7fc276aedabfcfb3/tenor.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}