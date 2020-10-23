const Discord = require('discord.js');
 
module.exports = {
    name: 'kiss',
    description: '',
    execute(message, args){
        const { prefix, token } = require ('../index.js');
        const embed = new Discord.MessageEmbed()
 
        if(!message.mentions.users.first()){
            embed.setTitle("smooch ⁽˙³˙⁾!")
            embed.setImage('https://i.pinimg.com/originals/e8/58/67/e858678426357728038c277598871d6d.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor("d7b8e9")
            return message.channel.send(embed)
        }else{
            const user = message.mentions.users.first()
            embed.setDescription(`${message.author} kisses ${user}! sweet~~`)
            embed.setImage('https://i.pinimg.com/originals/54/47/72/544772fea7e57b042e03f4fbe20cb953.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}