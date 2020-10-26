const Discord = require('discord.js');
 
module.exports = {
    name: 'cry',
    description: '',
    execute(message, args){
        const { prefix, token } = require ('../index.js');
        const embed = new Discord.MessageEmbed()
 
        if(!message.mentions.users.first()){
            embed.setDescription(`${message.author} needs a hug...`)
            embed.setImage('https://i.pinimg.com/originals/9a/df/19/9adf19fef6d9095bec315be3632f62ae.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor("d7b8e9")
            return message.channel.send(embed)
        }else{
            const user = message.mentions.users.first()
            embed.setDescription(`${message.author} needs a hug from ${user} (ಥ﹏ಥ)!`)
            embed.setFooter('Nocturnal Hub')
            embed.setImage('https://i.kym-cdn.com/photos/images/newsfeed/001/117/651/432.gif')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}