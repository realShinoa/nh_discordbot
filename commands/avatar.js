const Discord = require('discord.js');
 
module.exports = {
    name: 'avatar',
    description: 'returns a users avatar',
    execute(message, args){
        const { prefix, token } = require ('../index.js');
        const embed = new Discord.MessageEmbed()
 
        if(!message.mentions.users.first()){
            embed.setTitle("Your Avatar:")
            embed.setImage(message.author.displayAvatarURL())
            embed.setColor("d7b8e9")
            return message.channel.send(embed)
        }else{
            const user = message.mentions.users.first()
            embed.setTitle(`${user.tag}'s Avatar:`)
            embed.setImage(user.displayAvatarURL())
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}