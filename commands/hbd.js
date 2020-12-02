const Discord = require('discord.js');

module.exports = {
    name: 'hbd',
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
                    msg.delete({ timeout: 3000 });
                })

        } else {
            const user = message.mentions.users.first()
            embed.setDescription(`${message.author} wishes ${user} a happy birthday!`)
            embed.setImage('https://cdn.discordapp.com/attachments/765662435436134402/783582552144347157/The_Melancholy_of_Haruhi_Suzumiya_Photo__Haruhi_Suzumiya.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)


        }
    }
}