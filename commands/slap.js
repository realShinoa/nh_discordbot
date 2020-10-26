const Discord = require('discord.js');
 
module.exports = {
    name: 'slap',
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
                msg.delete({ timeout: 3000 });
            })

        }else{
            const user = message.mentions.users.first()
            embed.setDescription(`${message.author} slaps ${user}! u sonuvabitch 郎 グ!`)
            embed.setImage('https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}