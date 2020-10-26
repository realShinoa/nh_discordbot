const Discord = require('discord.js');
const prefix = '.';

module.exports = {
    name: 'ping',
    description: 'sends pong',
    execute(message, args) {
        if (message.content.startsWith(prefix + "ping")) {
            var ping = Date.now() - message.createdTimestamp + " ms";
            message.channel.send("Your ping is `" + `${ping}` + " `");
        }
    }
}