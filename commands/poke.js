const Discord = require('discord.js');

module.exports = {
    name: 'poke',
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
            embed.setDescription(`${message.author} pokes ${user}! boop <:369_Wink:760736004822269983>`)
            embed.setImage('https://media1.tenor.com/images/3b9cffb5b30236f678fdccf442006a43/tenor.gif?itemid=7739077')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}