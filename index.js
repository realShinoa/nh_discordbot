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

client.once('ready', () => {
   console.log('Bot is online');
   client.user.setActivity('Nocturnal Hub server', { type: 'WATCHING' }).catch(console.error)
});

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

   //multiple embeds
   client.on('message', message => {

      let args = message.content.substring(prefix.length).split(" ");

      switch (args[0]) {
         case 'info':

            const embed = new Discord.MessageEmbed()
               .setAuthor('Information')
               .setDescription("<a:008_nhubtown:765985914731495454> **__Nocturnal Hub__** <a:008_nhubtown:765985914731495454> is a friendly discord community open to everyone who would like to socialize, make friends, interact daily, play games, and much more! A fun and safe environment for everyone to hang out and join server activities such as events, giveaways and tournaments. <a:011_nhub:762401995188469810>")
            message.channel.send(embed)

            const embed2 = new Discord.MessageEmbed()
               .setAuthor('Server Rules')
               .setDescription("<a:008_nhubtown:765985914731495454> **__Server Rules__**: <a:008_nhubtown:765985914731495454>\n\n• Be respectful. No hate speech, racism, sexism, homophobia or disrespect. Using any kind of racial slurs will result in ban (ex. N-word). \n• Absolutely no NSFW. Do not attemt to post anything NSFW related content in the server or this will result in ban. \n• Swearing excessively is forbidden.\n• Trolling in both text and voice channels will result in kick. \n• Posting other server invite link is forbidden. \n• Do not spam. Use #spam channel instead.")
            message.channel.send(embed2)

            const embed3 = new Discord.MessageEmbed()
               .setAuthor('<a:008_nhubtown:765985914731495454> Staff Information <a:008_nhubtown:765985914731495454>')
               .setDescription("<a:008_nhubtown:765985914731495454> **STAFF POSITIONS** <a:008_nhubtown:765985914731495454>\n\n<@&761580701866655772>\n<@&761580706324938783>\n<@&761580716513034240>\n<@&762349900393480243>\n<@&759481868725911552>\n<@&761847043932946442>\n\n **How to apply as a staff?**  <a:004_stars:761643682705178634>\nRequirements for staff application:\n\n➽ User must be level 20 in the server.\n➽ User must be active in the server, both voice and text channels.\n➽ User must have the experience/knowledge on how to manage and moderate a server.\n➽ User must submit a form.\n\nForm link: https://docs.google.com/forms/d/16xSwRcSG-nC30_UdnAuiEYVREw8fxUQJgZxOGyuPKqo/prefill\n\n⇁ We must first review your application before reaching out. Applicants must also show and prove the following requirements. We ask for your patience.")
            message.channel.send(embed3)

            const embed4 = new Discord.MessageEmbed()
               .setDescription("<a:008_nhubtown:765985914731495454> **LEVEL ROLE INFO** <a:008_nhubtown:765985914731495454>\n\nUsers can unlock certain levels and gain rewards by chatting in the server.\n\n**LEVEL ROLES**: \n\n<@&783571577920290896>\n<@&757096162317828106>\n<@&757152384832241664>\n<@&757152387277389877>\n<@&757152389366153246>\n<@&757152391052394546>\n<@&759473912228216902>\n<@&760169322454319164>\n\n**LEVEL REWARDS**: \n\n<@&783571577920290896>\n➽ add reactions.\n➽ use external emojis.\n➽ attach files in <#745714849635631164>\n\n<@&757096162317828106>\n➽ add reactions.\n➽ use external emojis.\n➽ change nickname.\n\n<@&757152384832241664>\n➽ can apply for staff positions.\n\n<@&757152387277389877>\n➽ embed links\n\n<@&757152389366153246>\n➽ gets @OG |タフ role.\n\n<@&757152391052394546>\n➽ gets @Supreme | ボス role.\n\n<@&759473912228216902>\n➽ gets 2 emoji slot of your choice.\n➽ given a custom color! ‍\n\n<@&760169322454319164>\n➽ highest rank role.")
            message.channel.send(embed4)

            const embed5 = new Discord.MessageEmbed()
               .setDescription("<a:008_nhubtown:765985914731495454> **BOOSTER PERKS**<a:008_nhubtown:765985914731495454>\n\nUsers who boosts the server will get special perks in the server!\n\n➽ 5 slots of emojis\n➽ Custom color and Custom role!\n➽ gains the exclusive <@&756884169174417431>\n➽ Change nickname permission.\n➽ creates a voice channel of your own! [Users who boost the server for more than twice only]\n\n**SPONSOR PERKS**\nUser who sponsors for events and tournaments will get special perks in the server!\n\n➽ gains the <@&759035047679885325>\n➽ Custom color and Custom role!\n➽ Change nickname permission.\n➽ can change rules and permissions of events/tournaments.\n\nDM <@&766110897764433970> or any of the <@&761847043932946442> members.")
               .setThumbnail('https://cdn.discordapp.com/attachments/757440073619996814/767029460331134986/boost.cb45e94.png')
            message.channel.send(embed5)

            message.channel.send("Want to invite your friends? Invite Link: https://discord.gg/3nRvX8N")
            break;

      }
   })

   if (message.channel.type == 'dm') {
      let userContent = message.content
      bot.channels.get('756454025175498792').send(userContent);
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