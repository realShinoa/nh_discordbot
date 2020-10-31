const Discord = require('discord.js');
 
module.exports = {
    name: 'dc',
    description: '',
    execute(message, args){
        const { prefix, token } = require ('../index.js');
        const embed = new Discord.MessageEmbed()
 
        if(!message.mentions.users.first()){
            embed.setDescription(`a dead chat & a dead cat デッド.. oof <:2468_YuriSmug:760768339232161804>`)
            embed.setImage('https://cdn.iwastesomuchtime.com/1032015020677.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor("d7b8e9")
            return message.channel.send(embed)
        }else{
            const user = message.mentions.users.first()
            embed.setDescription(`a dead chat & a dead cat デッド.. oof <:2468_YuriSmug:760768339232161804>`)
            embed.setImage('https://cdn.iwastesomuchtime.com/1032015020677.gif')
            embed.setFooter('Nocturnal Hub')
            embed.setColor('d7b8e9')
            return message.channel.send(embed)
        }
    }
}