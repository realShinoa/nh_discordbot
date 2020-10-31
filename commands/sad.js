const Discord = require('discord.js');

module.exports = {
    name: 'sad',
    description: '',
    execute(message, args) {
        const { prefix, token } = require('../index.js');
        const embed = new Discord.MessageEmbed()

        if (!message.mentions.users.first()) {
            embed.setDescription(`${message.author} is sad <:kk_sad:760764049897029661>... `)
            embed.setImage('https://media.tenor.com/images/ed2a3f1a2bdc90840adfbffdd60e2859/tenor.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor("d7b8e9")
            return message.channel.send(embed)
        } else {
            const user = message.mentions.users.first()
            embed.setDescription(`${message.author} is sad <:kk_sad:760764049897029661>...`)
            embed.setImage('https://i.pinimg.com/originals/a5/e9/46/a5e9461b07b939279564cee8bf964916.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}

