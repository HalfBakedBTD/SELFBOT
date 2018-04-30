const discord = require('discord.js')
const client = new discord.Client();

client.on('ready', () => console.log('CONNECTED TO ' + client.user.username))
client.on('message', async message => {
	if(message.author.id !== '284137818895417344') return;
	console.log(`${message.author.username} said ${message.content} in ${message.channel.name}.`)
	if(message.content === '.ping') {
    message.delete();
    const msg = await message.channel.send('Loading...')
    msg.edit('Ping: **' + (msg.createdAt - message.createdAt) + 'ms**');
  }
})
 
client.login(process.env.BOT_TOKEN);
