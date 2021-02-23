const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('ONLINE');
});

client.on('message', message => {
    if (message.content === `java!`) {
        message.channel.send(`Hi, if you need help, type **java! help** or ask any of the server moderators.`);
    }
});

/* client.on('message', message => {
    if (message.content === `Java Bot`) {
        message.channel.send(`Hi, if you need help type **java! help** or ask any of the server moderators`);
    }
});

client.on('message', message => {
    if (message.content === `java bot`) {
        message.channel.send(`Hi, if you need help type **java! help** or ask any of the server moderators`);
    }
}); */

//--------------------------------------

client.on('message', message => {
    if (message.content === `${prefix}serverName`) {
        message.channel.send(`Server name: ${message.guild.name}`);
    }
});

client.on('message', message => {
    if (message.content === `${prefix}channelName`) {
        message.channel.send(`Channel name: ${message.channel.name}`);
    }
});

client.on('message', message => {
    if (message.content === `${prefix}totalMembers`) {
        message.channel.send(`Total members: ${message.guild.memberCount}`);
    }
});

client.on('message', message => {
    if (message.content === `${prefix}myUsername`) {
        message.channel.send(`Your username: ${message.author.username}`);
    }
});

client.on('message', message => {
    if (message.content === `${prefix}myID`) {
        message.channel.send(`Your ID: ${message.author.id}`);
    }
});

//-------------------------------------

/* client.on('message', message => {
    if (message.content === `${prefix}text`) {
        message.channel.send(`**java! ** - __*This is the prefix of the Java bot. Use it in the start of every command.*__`);
        message.channel.send(`**java! serverName** - *sends the name of the current server.*`);
        message.channel.send(`**java! channelName** - *sends the name of the current channel.*`);
        message.channel.send(`**java! totalMembers** - *sends the number of members in the current server.*`);
        message.channel.send(`**java! myUsername** - *sends your username.*`);
        message.channel.send(`**java! myID** - *sends your ID.*`);
    }
}); */


client.on('message', message => {
    if (message.content === `${prefix}Java`) {
        const Discord = require('discord.js');

// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#FF6100')
	.setTitle('Java Bot')
	.setURL('https://discord.com/api/oauth2/authorize?client_id=813394799759196160&permissions=2147483639&scope=bot')
	.setAuthor('Java Bot', 'https://cdn.discordapp.com/attachments/809437477240438794/813786473064693790/cirOriginal.png', 'https://discord.com/api/oauth2/authorize?client_id=813394799759196160&permissions=2147483639&scope=bot')
	.setDescription('The Discord bot **Java** is made by Nia Nancheva (niaplnan) on February 22, 2021. ')
	.setThumbnail('https://cdn.discordapp.com/attachments/809437477240438794/813436272886415380/roundOriginal.png')
	.setFooter('Bot by niaplnan', 'https://cdn.discordapp.com/attachments/809437477240438794/813437402961674250/143256259_232689495154677_2291309154156772430_o.jpg');

message.channel.send(exampleEmbed);
    }
});




client.on('message', message => {
    if (message.content === `${prefix}help`) {
        const Discord = require('discord.js');

// inside a command, event listener, etc.
const helpEmbed = new Discord.MessageEmbed()
	.setColor('#FF6100')
	.setTitle('Java Bot - Help')
	.setAuthor('Java Bot', 'https://cdn.discordapp.com/attachments/809437477240438794/813786473064693790/cirOriginal.png', 'https://discord.com/api/oauth2/authorize?client_id=813394799759196160&permissions=2147483639&scope=bot')
    .setDescription('This is the full list of the Java Bot commands.')
    .addFields(
		{ name: 'java!', value: 'This is the prefix of the Java bot. Use it in the start of every command.' },
		/* { name: '\u200B', value: '\u200B' }, */
        { name: 'java! help', value: 'Sends the list of Java Bot commands.'},
        { name: 'java! niaplnan', value: 'Sends the social media links of the Java Bot inventor.'},
		{ name: 'java! serverName', value: 'Sends the name of the current server.'},
		{ name: 'java! channelName', value: 'Sends the name of the current channel.'},
        { name: 'java! totalMembers', value: 'Sends the number of members in the current server.'},
        { name: 'java! myUsername', value: 'Sends your username.'},
        { name: 'java! myID', value: 'Sends your ID.'},
	)
	.setFooter('Bot by niaplnan', 'https://cdn.discordapp.com/attachments/809437477240438794/813437402961674250/143256259_232689495154677_2291309154156772430_o.jpg');

message.channel.send(helpEmbed);
    }
});



client.on('message', message => {
    if (message.content === `${prefix}niaplnan`) {
        const Discord = require('discord.js');

// inside a command, event listener, etc.
const NiaEmbed = new Discord.MessageEmbed()
	.setColor('#FF6100')
	.setTitle('Nia Nancheva')
	.setAuthor('Java Bot', 'https://cdn.discordapp.com/attachments/809437477240438794/813786473064693790/cirOriginal.png', 'https://discord.com/api/oauth2/authorize?client_id=813394799759196160&permissions=2147483639&scope=bot')
    .setDescription('Here are some of my social media links:')
    .addFields(
        {name: `Facebook`, value: `https://www.facebook.com/niaplnan`},
        {name: `Instagram`, value: `https://www.instagram.com/niaplnan`},
        {name: `GitHub`, value: `https://github.com/niaplnan`},
        {name: `Twitter`, value: `https://twitter.com/niaplnan`},
        {name: `YouTube`, value: `https://www.youtube.com/user/niaplnan`},
        {name: `Reddit`, value: `https://www.reddit.com/user/nia-pl-nan`},
        {name: `Business Email`, value: `niaplnan.business@gmail.com\n(Business integrations only)` },
        /* {name: ``, value: ``},
        {name: ``, value: ``},
        {name: ``, value: ``},
        {name: ``, value: ``}, */
    )
	.setFooter('Bot by niaplnan', 'https://cdn.discordapp.com/attachments/809437477240438794/813437402961674250/143256259_232689495154677_2291309154156772430_o.jpg');

message.channel.send(NiaEmbed);
    }
});






/* if (command === 'avatar') {
	if (!message.mentions.users.size) {
		return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
	}

	const avatarList = message.mentions.users.map(user => {
		return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
	});
	message.channel.send(avatarList);
} */


// send the entire array of strings as a message
	// by default, discord.js will `.join()` the array with `\n`

/* client.on('message', message => {
    if (message.content === `${prefix}TEXT`) {
        message.channel.send(`TEXT: ${message}`);
    }
}); */




client.login('ODEzMzk0Nzk5NzU5MTk2MTYw.YDOq8A.yaWRHvPGVSiE8GWF2rAe9Hirp4M');