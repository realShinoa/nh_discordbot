module.exports = {
    name: 'invite',
    description: "this is an invite command!",
    execute(message, args) {
        message.channel.send('Want to invite your friends here? Invite link: https://discord.gg/3nRvX8N');
    }
}