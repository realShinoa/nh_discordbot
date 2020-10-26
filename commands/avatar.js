const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'avatar',
    description: 'returns a users avatar',
    execute(message, args) {
        const { prefix, token } = require('../index.js');

        let embed = new Discord.MessageEmbed();

        if (!message.mentions.users.first()) {
            embed.setTitle('Your avatar');
            embed.setTimestamp();
            embed.setFooter(message.author.username);
            embed.setImage(message.author.displayAvatarURL({ size: 2048, dynamic: true }));
            message.channel.send(embed);
        } else {
            let user = message.mentions.users.first();
            embed.setTitle(`${user.username}'s avatar`);
            embed.setTimestamp();
            embed.setFooter(user.username);
            embed.setImage(user.displayAvatarURL({ size: 2048, dynamic: true }));
            message.channel.send(embed);
        }
    }
}