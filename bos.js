const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});





client.on('ready', () => {
  console.log('Kffdf98079');
});

client.on('message', message => {
  if (message.content === '=') {
      if (message.author.id !== '444155387130675210') return message.react('⚠')
    const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }
});



client.login(process.env.BOT_TOKEN);
