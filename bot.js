const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

/**
* Multiple message events for every command can cause data over-flows.
*/

client.on('message', message => {
    //Add only user commands can only in guild
    if(!message.guild || message.user.bot) return;
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
