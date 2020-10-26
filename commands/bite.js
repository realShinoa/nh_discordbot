const Discord = require('discord.js');
 
module.exports = {
    name: 'bite',
    description: '',
    execute(message, args){
        const { prefix, token } = require ('../index.js');
        const embed = new Discord.MessageEmbed()
 
        if(!message.mentions.users.first()){
            embed.setDescription("Wrong arguments! Please tag someone <:1399_KamaD:760736173114261585>")
            embed.setImage('')
            embed.setColor("d7b8e9")
            return message.channel.send(embed)
            
            .then(msg => {
                msg.delete({ timeout: 3000 });
            })

        }else{
            const user = message.mentions.users.first()
            embed.setDescription(`${message.author} bites ${user}! nom~`)
            embed.setImage('https://media0.giphy.com/media/OqQOwXiCyJAmA/giphy.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)

            
        }
    }
}