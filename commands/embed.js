const Discord = require('discord.js');
module.exports = {
    name: 'embed',
    execute(message, args){
        const { prefix, token } = require (`../index.js`);
        const embed = new Discord.MessageEmbed()


       
        embed.setTitle('TITE')
        embed.setDescription('**maliit tite ni** <@!745089736128987226> <:Kanna_Curious:760735880968273950>')
        embed.setImage('https://media2.giphy.com/media/YW3obh7zZ4Rj2/giphy.gif')
        embed.setFooter('Nocturnal Hub')
        embed.setColor('#aff2b6')
            message.channel.send(embed)

            .then(msg => {
                msg.delete({ timeout: 20000 });
            })

    }

};