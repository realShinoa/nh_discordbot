const Discord = require('discord.js');
module.exports = {
    name: 'embed',
    execute(message, args) {
        const { prefix, token } = require(`../index.js`);
        const embed = new Discord.MessageEmbed()


        embed.setDescription("**Nocturnal Hub Rules**:\n\nDiscord Terms of Service and Guidelines apply (including ages 13+ only)\nhttps://discordapp.com/terms\nhttps://discordapp.com/guidelines\n\n**Rules are implemented to keep the server fun and friendly.**\n\n1. Be respectful. No hate speech, racism, sexism, homophobia or disrespect. Using any kind of slurs will result in ban (ex. N-word).\n\n2. Absolutely no NSFW content, do not attempt to post anything nsfw in any channel or this will result in ban.\n\n3. Do not ask for personal information or distribute any personal information without consent. Also, do not post pictures of anyone in the server without their consent (including real names, addresses etc.)\n\n4. Do not harass anyone in any way. No offensive language/cursing, excessive swearing can result in mute.\n\n5. No trolling and spamming in #general-chat. Use #spam channel instead.\n\n6. Listen to the Admins and Moderators. No interfering with moderator's duties. Don't argue with them while they actively moderate. Don't troll with fake evidence when reporting someone.\n\n7. Keep nicknames simple and easy to tag. You cannot have symbols in your name (including invisible names).\n\n8. You cannot use your voice to annoy others in any Voice Channels (ex. voice changers, ear-rape, blowing air in the microphone).\n\n9. Staff members reserve the right to disconnect, mute, deafen, or move members to and from voice channels if anyone is violating the following rules.\n\n10. Promoting discord servers are not allowed unless granted permission.\n\n**Everyone in the server is obliged to follow the rules**. Violating the rules will result in warn, kick or ban. If you have any concerns or want to report someone, kindly DM any of the staff members.")
        embed.setFooter('Nocturnal Hub')
        message.channel.send(embed)

    }

};