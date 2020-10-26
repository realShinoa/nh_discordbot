const Discord = require('discord.js');

module.exports = {
    name: 'pat',
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
            embed.setDescription(`${message.author} pets ${user}! there there~~`)
            embed.setImage('https://www.drhealthclinic.com/wp-content/uploads/2019/05/Scalp-Infections.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}