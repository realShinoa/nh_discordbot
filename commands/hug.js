const Discord = require('discord.js');

module.exports = {
    name: 'hug',
    description: '',
    execute(message, args) {
        const { prefix, token } = require('../index.js');
        const embed = new Discord.MessageEmbed()

        if (!message.mentions.users.first()) {
            embed.setDescription("squeeze squeeze ʕっ•ᴥ•ʔっ!")
            embed.setImage('https://media1.tenor.com/images/e7797629681a227c12bc112513bef070/tenor.gif?itemid=9383100.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor("d7b8e9")
            return message.channel.send(embed)
        } else {
            const user = message.mentions.users.first()
            embed.setDescription(`${message.author} hugs ${user}! wuvyuuu~`)
            embed.setImage('https://pa1.narvii.com/6445/feb2b43d7ef2e6cd66e42826a52288fae216376a_hq.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}