const Discord = require('discord.js');
 
module.exports = {
    name: 'lick',
    description: '',
    execute(message, args){
        const { prefix, token } = require ('../index.js');
        const embed = new Discord.MessageEmbed()
 
        if(!message.mentions.users.first()){
            embed.setDescription("Wrong arguments! Please tag someone <:1399_KamaD:760736173114261585>")
            embed.setImage('')
            embed.setFooter('Nocturnal Hub')
            embed.setColor("d7b8e9")
            return message.channel.send(embed)
     .then(msg => {
                msg.delete(10000)
              })

        }else{
            const user = message.mentions.users.first()
            embed.setDescription(`${message.author} licks ${user}! lewd <:75350_red:762428539348844574>`)
            embed.setImage('https://i.pinimg.com/originals/81/76/9e/81769ee6622b5396d1489fb4667fd20a.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}