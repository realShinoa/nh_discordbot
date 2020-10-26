const Discord = require('discord.js');

module.exports = {
    name: 'welcome',
    description: 'welcomes someone',
    execute(message, args) {
        const { prefix, token } = require('../index.js');
        const embed = new Discord.MessageEmbed()

        if (!message.mentions.users.first()) {
            embed.setTitle("Welcome to Nocturnal Hub! もしもし <a:011_nhub:762401995188469810>")
            embed.setImage('https://i.pinimg.com/originals/05/6c/58/056c584d9335fcabf080ca43e583e3c4.gif')
            embed.setColor("d7b8e9")
            return message.channel.send(embed)
        } else {
            const user = message.mentions.users.first()
            embed.setDescription(`${message.author} welcomes ${user}! もしもし <a:011_nhub:762401995188469810>`)
            embed.setImage('https://i.pinimg.com/originals/8f/54/30/8f5430367d6c8ded5778fb1c850021c1.gif')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}