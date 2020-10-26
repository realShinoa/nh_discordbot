const Discord = require('discord.js');

module.exports = {
    name: 'cuddle',
    description: '',
    execute(message, args) {
        const { prefix, token } = require('../index.js');
        const embed = new Discord.MessageEmbed()

        if (!message.mentions.users.first()) {
            embed.setDescription("Wrong arguments! Please tag someone <:1399_KamaD:760736173114261585>")
            embed.setImage('')
            embed.setColor("d7b8e9")
            return message.channel.send(embed)

                .then(msg => {
                    msg.delete({ timeout: 2000 });
                })

        } else {
            const user = message.mentions.users.first()
            embed.setDescription(`${message.author} cuddles ${user}~~ kyaaaaa!!`)
            embed.setImage('https://media1.tenor.com/images/3b205574d0352d4d61687f835276566d/tenor.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}