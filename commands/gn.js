const Discord = require('discord.js');
 
module.exports = {
    name: 'gn',
    description: '',
    execute(message, args){
        const { prefix, token } = require ('../index.js');
        const embed = new Discord.MessageEmbed()
 
        if(!message.mentions.users.first()){
            embed.setDescription("Oyasumi nasai おやすみ <a:004_stars:761643682705178634>!")
            embed.setImage('https://i.pinimg.com/originals/f9/e0/f3/f9e0f33473ba26f6b2b3330bb58cf610.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor("d7b8e9")
            return message.channel.send(embed)
        }else{
            const user = message.mentions.users.first()
            embed.setDescription(`Oyasumi nasai ${user}! おやすみ <a:004_stars:761643682705178634>`)
            embed.setImage('https://i.pinimg.com/originals/6d/7a/24/6d7a247ed62dee0e492e38e23dcd4d15.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}
