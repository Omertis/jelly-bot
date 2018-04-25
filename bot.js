const Discord = require("discord.js");
const client = new Discord.Client({ fetchAllMembers: true });

client.on('message', message => {
    var prefix = ".";
    if (message.content.startsWith(prefix + "bot")) {
        const embed = new Discord.RichEmbed()
            .setColor("#6fc167")
            .setDescription(`**my servers**🌐 **__${client.guilds.size}__**
**Users Count**👥 **__${client.users.size}__**
**channels Count**📚 **__${client.channels.size}__** `)
     .setTimestamp();
     message.channel.sendEmbed(embed);

    }
});
//--------------------------------------------------------------------------
var prefix = "."
client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
        let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
        if (message.content.split(' ')[0] == 'bc') {
            if (!args[1]) {
                message.channel.send("**bc <message!**");
                return;
            }
            message.guild.members.forEach(m => {
                if (!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL)
                    .addField(' this message form this server', `${message.guild.name}`, true)
                    .addField(' the sender ', `${message.author.username}*${message.author.discriminator}`, true)
                    .addField(' messge info ', args)
                    .setThumbnail(message.guild.iconURL)
                    .setColor('#6fc167')
     .setTimestamp();
                m.send(`${m}`, { embed: bc });
            });
            const AziRo = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('✅| the message has been sent ')
                .addBlankField(true)
                .addField('♨| it have been sended to member', message.guild.memberCount, true)
                .addField('📝| messga info ', args)
                .setColor('#6fc167')
     .setTimestamp();
            message.channel.sendEmbed(AziRo);
        message.delete();

        }
    } else {
        return;
    }
});
//--------------------------------------------------------------------------
client.on('message', message => {
  var prefix = ".";
    if (message.content.startsWith(prefix +"server")) {
        if (!message.channel.guild) return;
        const millis = new Date().getTime() - message.guild.createdAt.getTime();
        const now = new Date();

        const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
        const days = millis / 1000 / 60 / 60 / 24;
        let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
        var embed = new Discord.RichEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL)
            .addField("**🆔 Server ID**", "**" + message.guild.id + "**", true)
            .addField("**👑 OWNER SHIP**", "**" + message.guild.owner + "**", true)
            .addField("**🌍 Server Country**", "**" + message.guild.region + "**", true)
            .addField('**💬 Text Channels Count**', `**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`, true)
            .addField("**📣 Voice Channels Count**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `, true)
            .addField("**🤔 server created time**", ` ** [ ${days.toFixed(0)} ] ** Day `, true)
            .addField("**Roles Count**", `**[${message.guild.roles.size}]** Role `, true)
            .addField("Members Count", `
**${message.guild.memberCount}**`)
            .setThumbnail(message.guild.iconURL)
            .setColor('#6fc167')
     .setTimestamp();
     message.channel.sendEmbed(embed)

    }
});
//--------------------------------------------------------------------------
client.on('message', message => {
    if (message.author.Jelly) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    if (command == "kick") {
        if (!message.channel.guild) return message.reply('** This command only for servers**');

        if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
        if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
        let user = message.mentions.users.first();
        let reason = message.content.split(" ").slice(2).join(" ");
        let b5bzlog = client.channels.find("name", "log");

        if (!b5bzlog) return message.reply("I've detected that this server doesn't have a log text channel.");
        if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
              message.delete();

        if (!reason) return message.reply("**كتب سبب الطرد**");
            message.delete();

    if (!message.guild.member(user)
            .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
        message.guild.member(user).kick();

        const kickembed = new Discord.RichEmbed()
            .setAuthor(`KICKED!`, user.displayAvatarURL)
            .setColor("#6fc167")
            .setTimestamp()
            .addField("**User:**", '**[ ' + `${user.tag}` + ' ]**')
            .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
            .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
     .setTimestamp();
        message.channel.send({
            embed: kickembed
        })
    }
});
//--------------------------------------------------------------------------
var prefix = "."
client.on('message', message => {
    if (message.author.x5bz) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    if (command == "ban") {
        if (!message.channel.guild) return message.reply('** This command only for servers**');

        if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
        if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
        let user = message.mentions.users.first();
        let reason = message.content.split(" ").slice(2).join(" ");
        let b5bzlog = client.channels.find("name", "log");

        if (!b5bzlog) return message.reply("I've detected that this server doesn't have a log text channel.");
        if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
              message.delete();
   if (!reason) return message.reply("**اكتب سبب الطرد**");
        message.delete();

        if (!message.guild.member(user)
            .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

        message.guild.member(user).ban(7, user);

        const banembed = new Discord.RichEmbed()
            .setAuthor(`BANNED!`, user.displayAvatarURL)
            .setColor("#6fc167")
            .setTimestamp()
            .addField("**User:**", '**[ ' + `${user.tag}` + ' ]**')
            .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
            .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
     .setTimestamp();
        message.channel.send({
            embed: banembed
        })
    }
});
//--------------------------------------------------------------------------
client.on('message', message => {
   if(message.content.startsWith(prefix +"avatar")) {
        var mentionned = message.mentions.users.first();
        var client;
        if (mentionned) {
            var client = mentionned;
        } else {
            var client = message.author;

        }
        const embed = new Discord.RichEmbed()
            .setColor("#6fc167")
            .setImage(`${client.avatarURL}`)
     .setTimestamp();
        message.channel.sendEmbed(embed);
    }
});





client.login(process.env.BOT_TOKEN);
