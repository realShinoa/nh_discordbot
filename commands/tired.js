const Discord = require('discord.js');

module.exports = {
    name: 'tired',
    description: '',
    execute(message, args) {
        const { prefix, token } = require('../index.js');
        const embed = new Discord.MessageEmbed()

        if (!message.mentions.users.first()) {
            embed.setDescription(`${message.author} is tired... <:75350_red3:762428508621897758> `)
            embed.setImage('https://pa1.narvii.com/5716/525abe2b5881da1e67019f0917628e716bc24eeb_hq.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor("d7b8e9")
            return message.channel.send(embed)
        } else {
            const user = message.mentions.users.first()
            embed.setDescription(`${message.author} is tired... <:75350_red3:762428508621897758> `)
            embed.setImage('https://pa1.narvii.com/5716/525abe2b5881da1e67019f0917628e716bc24eeb_hq.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}