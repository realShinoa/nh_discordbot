const Discord = require('discord.js');

module.exports = {
    name: 'dance',
    description: '',
    execute(message, args) {
        const { prefix, token } = require('../index.js');
        const embed = new Discord.MessageEmbed()

        if (!message.mentions.users.first()) {
            embed.setDescription(`${message.author} is dancing <:75350_red4:762428508512321557><a:011_nhub:762401995188469810>`)
            embed.setImage('https://archive-media-0.nyafuu.org/c/image/1538/93/1538934985771.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor("d7b8e9")
            return message.channel.send(embed)
        } else {
            const user = message.mentions.users.first()
            embed.setDescription(`${message.author} is dancing <:75350_red4:762428508512321557><a:011_nhub:762401995188469810>`)
            embed.setImage('https://media.tenor.com/images/da7c311bcc569cf74d8755dafc8a4dbb/tenor.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}