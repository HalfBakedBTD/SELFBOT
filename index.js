const discord = require('discord.js')
const client = new discord.Client();
let chat = require("./chats.json");

client.on('ready', () => console.log('CONNECTED TO ' + client.user.username))
client.on('message', async message => {
	if(message.author.id !== '284137818895417344') return;
	console.log(`${message.author.username} said ${message.content} in #${message.channel.name}.`)
	if(message.content === '.ping') {
    message.delete();
    const msg = await message.channel.send('Loading...')
    msg.edit('Ping: **' + (msg.createdAt - message.createdAt) + 'ms**');
  }
	if(message.content === '.members') {
    message.delete();
    const msg = await message.channel.send('Loading...')
    msg.edit(`Server Members: ${message.guild.memberCount}`);
  }
	if(message.content.startsWith('.d')) {
    message.delete();
  }
	if(message.content === '.help') {
    message.delete();
		client.channels.filter(c => c.id === '440364762505805845').forEach(channel => {
    	channel.send("**My Commands:**\n`.help` - gives help...\n`.ping` - pings me.\n`.d` - deletes the message.\n`.members` - gives membercount.");
		});
  }
})
 
client.login(process.env.BOT_TOKEN);
