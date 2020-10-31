const Discord = require('discord.js');

module.exports = {
    name: 'ily',
    description: '',
    execute(message, args) {
        const { prefix, token } = require('../index.js');
        const embed = new Discord.MessageEmbed()

        if (!message.mentions.users.first()) {
            embed.setDescription(`daisuki da yo 好きだ!! now give me a kiss~`)
            embed.setImage('https://media.tenor.com/images/c13360ee112be361b37bdd2dd5f32952/tenor.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor("d7b8e9")
            return message.channel.send(embed)
        } else {
            const user = message.mentions.users.first()
            embed.setDescription(`${message.author} loves ${user}! sweet 甘い`)
            embed.setImage('https://media1.tenor.com/images/58b69ed7e191b12467928c6937ed60d9/tenor.gif?itemid=12190647')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}