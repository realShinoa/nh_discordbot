const Discord = require('discord.js')
const client = new Discord.Client();
const prefix = '.';
const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
   const command = require(`./commands/${file}`);

   client.commands.set(command.name, command);
}

'use strict';

client.on('guildMemberAdd', member => {
   const channel = member.guild.channels.cache.find(ch => ch.name === '﹕general-chat')
   if (!channel) return;

   channel.send(`${member}`);
});

client.on('guildMemberAdd', member => {
   const channel = member.guild.channels.cache.find(ch => ch.name === '﹕general-chat');
   if (!channel) return;

   const embed = new Discord.MessageEmbed()

      .setTitle("Welcome to Nocturnal Hub!")
      .setThumbnail(member.user.displayAvatarURL())
      .setImage('https://cdn.discordapp.com/attachments/765662435436134402/769013221344280596/NH.gif')
      .setColor('#e6a7ff')
      .addField('Total Members', member.guild.memberCount, true)
      .setFooter("Nocturnal Hub")

   channel.send(embed);
});

client.once('ready', () => {
   console.log('Bot is online');
   client.user.setActivity('Nocturnal Hub server', { type: 'WATCHING' }).catch(console.error)
});

client.on('message', async message => {
   if (!message.content.startsWith(prefix) || message.author.bot) return;

   const embed = new Discord.MessageEmbed()
   const args = message.content.slice(prefix.length).split(/ +/);
   const command = args.shift().toLowerCase();

   if (command == 'cf') {
      function doRandHT() {
         var rand = ['Outcome: Heads!', 'Outcome: Tails!'];

         return rand[Math.floor(Math.random() * rand.length)];
      }

      const embed = {
         "title": `Coin flipped!`,
         "description": doRandHT(),
      };
      message.channel.send({ embed });
   }

   if (command === 'avatar') {
      client.commands.get('avatar').execute(message, args);
   }
   if (command === 'help') {
      client.commands.get('help').execute(message, args);
   }

   if (command === 'welcome') {
      client.commands.get('welcome').execute(message, args);
   }
   if (command === 'ping') {
      client.commands.get('ping').execute(message, args);
   }

   if (command === 'gm') {
      client.commands.get('gm').execute(message, args);
   }

   if (command === 'slap') {
      client.commands.get('slap').execute(message, args);
   }

   if (command === 'cry') {
      client.commands.get('cry').execute(message, args);
   }

   if (command === 'hug') {
      client.commands.get('hug').execute(message, args);
   }

   if (command === 'kill') {
      client.commands.get('kill').execute(message, args);
   }

   if (command === 'blush') {
      client.commands.get('blush').execute(message, args);
   }

   if (command === 'pout') {
      client.commands.get('pout').execute(message, args);
   }

   if (command === 'smile') {
      client.commands.get('smile').execute(message, args);
   }

   if (command === 'kiss') {
      client.commands.get('kiss').execute(message, args);
   }
   if (command === 'hbd') {
      client.commands.get('hbd').execute(message, args);
   }

   if (command === 'pat') {
      client.commands.get('pat').execute(message, args);
   }

   if (command === 'smug') {
      client.commands.get('smug').execute(message, args);
   }

   if (command === 'shrug') {
      client.commands.get('shrug').execute(message, args);
   }

   if (command === 'cuddle') {
      client.commands.get('cuddle').execute(message, args);
   }

   if (command === 'wave') {
      client.commands.get('wave').execute(message, args);
   }

   if (command === 'sleepy') {
      client.commands.get('sleepy').execute(message, args);
   }

   if (command === 'tired') {
      client.commands.get('tired').execute(message, args);
   }

   if (command === 'lick') {
      client.commands.get('lick').execute(message, args);
   }

   if (command === 'punch') {
      client.commands.get('punch').execute(message, args);
   }

   if (command === 'gn') {
      client.commands.get('gn').execute(message, args);
   }

   if (command === 'poke') {
      client.commands.get('poke').execute(message, args);
   }

   if (command === 'bite') {
      client.commands.get('bite').execute(message, args);
   }

   if (command === 'embed') {
      client.commands.get('embed').execute(message, args);
   }
   if (command === 'cf') {
      client.commands.get('cf').execute(message, args);
   }
   if (command === 'dc') {
      client.commands.get('dc').execute(message, args);
   }
   if (command === 'ily') {
      client.commands.get('ily').execute(message, args);
   }
   if (command === 'dance') {
      client.commands.get('dance').execute(message, args);
   }
   if (command === 'fu') {
      client.commands.get('fu').execute(message, args);
   }

});
client.login(process.env.token);