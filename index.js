const discord = require('discord.js')
const Discord = require('discord.js')
const client = new discord.Client();
let chat = require("./chats.json");

client.on('ready', () => console.log('CONNECTED TO ' + client.user.username))

client.on('guildCreate', guild => {
  client.channels.filter(c => c.id === '440364762505805845').forEach(channel => {
    let botAvatar = client.user.displayAvatarURL;
    let eventEmbed = new Discord.RichEmbed()
    .setColor('#27ae60')
    .setThumbnail(botAvatar)
    .setDescription(`**Event:** added to a guild.\n**User Guilds Size:** ${client.guilds.size}\n**Guild:** ${guild.name}\n**Owner**: ${guild.owner}\n**Owner ID:** ${guild.ownerID}\n**Members:** ${guild.memberCount}\n**Region:** ${guild.region}\n**Verification Level:** ${guild.verificationLevel}`);
  
   channel.send(eventEmbed);
  });
});

client.on('guildDelete', guild => {
  client.channels.filter(c => c.id === '440364762505805845').forEach(channel => {
    let botAvatar = client.user.displayAvatarURL;
    let eventEmbed = new Discord.RichEmbed()
    .setColor('#e74c3c')
    .setThumbnail(botAvatar)
    .setDescription(`**Event:** removed from a guild.\n**User Guilds Size:** ${client.guilds.size}\n**Guild:** ${guild.name}\n**Owner**: ${guild.owner}\n**Owner ID:** ${guild.ownerID}\n**Members:** ${guild.memberCount}\n**Region:** ${guild.region}\n**Verification Level:** ${guild.verificationLevel}`);
  
   channel.send(eventEmbed);
  });
});

client.on('message', async message => {
	if(message.author.id !== '284137818895417344') return;
	console.log(`${message.author.username} said ${message.content} in #${message.channel.name}.`)
	if(message.content === 'ping') {
    message.delete();
    const msg = await message.channel.send('Loading...')
    msg.edit('Ping: **' + (msg.createdAt - message.createdAt) + 'ms**');
  }
	if(message.content === 'members') {
    message.delete();
    const msg = await message.channel.send('Loading...')
    msg.edit(`Server Members: ${message.guild.memberCount}`);
  }
	if(message.content.startsWith('d')) {
    message.delete();
  }
	if(message.content === 'help') {
    message.delete();
		client.channels.filter(c => c.id === '440364762505805845').forEach(channel => {
    	channel.send("**My Commands:**\n`.help` - gives help...\n`.ping` - pings me.\n`.d` - deletes the message.\n`.members` - gives membercount.");
		});
  }
	if(message.content.startsWith('tu')) {
    message.delete();
		message.channel.send("👍")
  }
	if(message.content.startsWith('td')) {
    message.delete();
		message.channel.send("👎")
  }
	if(message.content.startsWith('tow')) {
    message.delete();
		message.channel.send("😜")
  }
})
 
client.login(process.env.BOT_TOKEN);
