const Discord = require('discord.js');
 
module.exports = {
    name: 'smile',
    description: '',
    execute(message, args){
        const { prefix, token } = require ('../index.js');
        const embed = new Discord.MessageEmbed()
 
        if(!message.mentions.users.first()){
            embed.setTitle("ッッッッ!")
            embed.setImage('https://64.media.tumblr.com/05c8c0fce846a6ee4a4fd9fa8b5e2428/tumblr_nnqakxJaSI1rvva9so1_400.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor("d7b8e9")
            return message.channel.send(embed)
        }else{
            const user = message.mentions.users.first()
            embed.setDescription(`**${message.author} is happy (∩_∩)!**`)
            embed.setImage('https://i.pinimg.com/originals/c5/fa/d2/c5fad21f9828d19044a58f8b84a6e14b.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}