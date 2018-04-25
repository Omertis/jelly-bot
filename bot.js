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
client.on('message', message => {
              if(!message.channel.guild) return;
    var prefix = ".";
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Dragon";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
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
//--------------------------------------------------------------------------
client.on('message', message => {
     if(message.content.startsWith(prefix +"bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`The ban count **${bans.size}** Person`))
  .catch(console.error);
}
});
//--------------------------------------------------------------------------
client.on("message", message => {
    var prefix = ".";
    const command = message.content.split(" ")[0];

    if(command == prefix+"vc"){

        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('you do not have permission to perform this action!');
        }

        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("please mention the member")
            return;
        }

    if(!member.voiceChannel){
    message.reply("i can't include voice channel for member!")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
        


    
      });
     });
    }
});
//--------------------------------------------------------------------------
client.on("message", message => {
    const prefix = "."

    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (message.content === prefix + "aserver") {
        const embed = new Discord.RichEmbed()

            .setTitle(`server avatar ** ${message.guild.name} **`)
            .setAuthor(message.author.username, message.guild.iconrURL)
            .setColor("#6fc167")
            .setImage(message.guild.iconURL)
            .setURL(message.guild.iconrURL)
            .setTimestamp()
     .setTimestamp();
        message.channel.send({ embed });
    }
});

//-------------------------------------

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
//--------------------------------------------------------------------------
client.on('message', message => {
                                if(!message.channel.guild) return;
                       if(message.content.startsWith(prefix +'ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('#6fc167')
                        .addField('`Time Taken`:',msg + " ms  ")
                        .addField('`Discord Api`:',api + " ms  ")
     .setTimestamp();
         message.channel.send({embed:embed});
//--------------------------------------------------------------------------
client.on('message', message => {
    if(message.content.startsWith(prefix +"info")) {
        message.channel.send({
            embed: new Discord.RichEmbed()
                .setAuthor(client.user.username, client.user.avatarURL)
                .setThumbnail(client.user.avatarURL)
                .setColor('#6fc167')
                .setTitle('``INFO BULL`` ')
                .addField('``Uptime``', [timeCon(process.uptime())], true)
                .addField('``My Ping``', [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
                .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
                .addField('``My Name``', `[ ${client.user.tag} ]`, true)
                .addField('``My ID``', `[ ${client.user.id} ]`, true)
                .addField('``My Prefix``', `[ ${prefix} ]`, true)
                .addField('``My Language``', `[ Java Script ]`, true)
     })
    }
});
//--------------------------------------------------------------------------
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
client.login(process.env.BOT_TOKEN);
