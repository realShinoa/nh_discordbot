const Discord = require('discord.js');

module.exports = {
    name: 'punch',
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
            embed.setDescription(`${message.author} punches ${user} !! oof <:qqaw_ql:760775837024256021>`)
            embed.setImage('https://i.pinimg.com/originals/2b/5d/7b/2b5d7bb1dd4a8e64869c33499c409582.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}