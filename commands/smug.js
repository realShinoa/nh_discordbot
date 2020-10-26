const Discord = require('discord.js');

module.exports = {
    name: 'smug',
    description: '',
    execute(message, args) {
        const { prefix, token } = require('../index.js');
        const embed = new Discord.MessageEmbed()

        if (!message.mentions.users.first()) {
            embed.setDescription("hehe ⚈ ̫ ⚈!")
            embed.setImage('https://i.pinimg.com/originals/4c/2e/b6/4c2eb6be4a6cecd2537df77e722dcfc4.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor("d7b8e9")
            return message.channel.send(embed)
        } else {
            const user = message.mentions.users.first()
            embed.setDescription(`${message.author} thinks little of you c;`)
            embed.setImage('https://thumbs.gfycat.com/GranularJoyousCorydorascatfish-size_restricted.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}