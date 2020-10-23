const Discord = require('discord.js');
 
module.exports = {
    name: 'sleepy',
    description: '',
    execute(message, args){
        const { prefix, token } = require ('../index.js');
        const embed = new Discord.MessageEmbed()
 
        if(!message.mentions.users.first()){
            embed.setDescription(`${message.author} wants to sweep <:709004926289838100:761642399566528552> `)
            embed.setImage('https://i.pinimg.com/originals/62/29/9a/62299afcedd465b631f9baa9786bd83b.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor("d7b8e9")
            return message.channel.send(embed)
        }else{
            const user = message.mentions.users.first()
            embed.setDescription(`${message.author} wants to sweep <:709004926289838100:761642399566528552> `)
            embed.setImage('https://i.pinimg.com/originals/62/29/9a/62299afcedd465b631f9baa9786bd83b.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}