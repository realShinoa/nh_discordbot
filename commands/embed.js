const Discord = require('discord.js');
module.exports = {
    name: 'embed',
    execute(message, args) {
        const { prefix, token } = require(`../index.js`);
        const embed = new Discord.MessageEmbed()



        embed.setTitle('Karaoke Night')
        embed.setDescription("hey, Dreamers! <a:011_nhub:762401995188469810>\n\n> **Nocturnal Hub** will be hosting a **Karaoke Night** event later this evening at 8 PM.  Everyone can join, hangout and chill with us! <a:006_nhubb:768137940005158934>\n\n> Warm up your vocal chords and get ready to sing the night away! If you’ve never tried karaoke with us before you will surely not regret it!\n\n**When**: 8 PM November 21 <a:0001_ajoinvc:760755965309222942>\n**Where**: Music Hall vc <a:0001_ajoinvc:760755965309222942>\n\n \n")
        embed.setImage('https://cdn.discordapp.com/attachments/765662435436134402/771919929858588672/karaokenight.gif')
        embed.setThumbnail('https://cdn.discordapp.com/attachments/765662435436134402/771930777725829140/911a33e4b40c488251e6d241bdbba274-dynamic-microphone-icon.png')
        embed.setFooter('Nocturnal Hub')
        message.channel.send(embed)

    }

};