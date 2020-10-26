const Discord = require('discord.js');

module.exports = {
    name: 'gm',
    description: '',
    execute(message, args) {
        const { prefix, token } = require('../index.js');
        const embed = new Discord.MessageEmbed()

        if (!message.mentions.users.first()) {
            embed.setDescription("Ohayou Gozaimasu おはようございます <a:011_nhub:762401995188469810> !")
            embed.setImage('https://media1.tenor.com/images/1354aaf201cb439b8ea0073e2a7f4c5a/tenor.gif?itemid=6090876.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor("d7b8e9")
            return message.channel.send(embed)
        } else {
            const user = message.mentions.users.first()
            embed.setDescription(`Ohayou Gozaimasu ${user}! おはようございます <a:011_nhub:762401995188469810>`)
            embed.setImage('https://media1.tenor.com/images/1354aaf201cb439b8ea0073e2a7f4c5a/tenor.gif?itemid=6090876')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}