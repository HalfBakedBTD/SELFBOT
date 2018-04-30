const discord = require('discord.js')
const client = new discord.Client();

client.on('ready', () => console.log('CONNECTED TO ' + client.user.username))
client.on('message', async msg => {
	if(msg.author.id !== '284137818895417344') return;
	console.log(`${msg.author.username} said ${msg.content} in ${msg.channel.name}.`)
	if(msg.content === '.ping') {
        msg.delete();
        const msg = await message.channel.send('Loading...')
        msg.edit('Ping: **' + (msg.createdAt - message.createdAt) + 'ms**');
    }
})
 
client.login(process.env.BOT_TOKEN);
