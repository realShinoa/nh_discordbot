const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    execute(message, args){
        const { prefix, token } = require ('../index.js');
        

            message.channel.send("Pong!");
        

    }  

};