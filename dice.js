const Discord = require('discord.js');

const bot = new Discord.Client();



bot.on('message', message => {
    var sender = message.author;
    var prefix = 'roll!'
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'dice') {
        var dc = Math.floor(Math.random() * 6) + 1;
        message.channel.send(dc);
    }
});

bot.login('Nzc5MzY4NDgwMTgwMTQyMTIy.X7fhdQ.g46nkXAWYUdhNs7M3SV65mZ4vDs') //token