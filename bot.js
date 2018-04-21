const Discord = require("discord.js");
const client = new Discord.Client({ fetchAllMembers: true });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});





client.on('ready', () => {
    console.log('----------------');
    console.log('By Mark');
    console.log('----------------');
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setStatus("dnd")

    
});

client.on("message", message => {
    if (message.content === "123213e") {
     const embed = new Discord.RichEmbed() 
         .setColor("#6fc167")
         .setThumbnail(message.author.avatarURL)
         .setDescription
         
         (`

╱╱╭╮╱╱╭╮╭╮╱╱╱╱╭━━╮╱╱╱╭╮
╱╱┃┃╱╱┃┃┃┃╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╱╱┃┣━━┫┃┃┃╭╮╱╭┫╰╯╰┳━┻╮╭╯
╭╮┃┃┃━┫┃┃┃┃┃╱┃┃╭━╮┃╭╮┃┃
┃╰╯┃┃━┫╰┫╰┫╰━╯┃╰━╯┃╰╯┃╰╮
╰━━┻━━┻━┻━┻━╮╭┻━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╱╭━╯┃╱╱╱╱╱╱╱╱╱╱
╱╱╱╱╱╱╱╱╱╱╰━━╯╱╱╱╱╱╱╱╱╱╱
**اوامر الادارة|Administrator**

 **#kick**:**طرد العضو**


 **#ban**:**حظر العضو**


 **#mute**:**اعطاء ميوت للعضو**


 **#u**:**لتبليغ عن العضو**


 **#unmute**:**فك الميوت عن العضو**


 **#bc**:**ارسال رسالة للاعضاء فالخاص**


 **#clear**:**مسح الشات بالعدد**
 
 
  **#clearall**:**مسح خمسين رسالة**

 
 **#role**:**اعطاء شخص رتبة**
 
 **#roles**:**اظهار الرتب فالسيرفر**
 
**#رابط**                  

 **لشات اللوق اكتب اسم الشات **:**log**
 
 **اوامر العامة|Normal**
 
  **#bot**:**معلومات بسيطة عن البوت**
 
  **#mb**:**حالة اعضاء السيرفر**
 
  **#server**:**معلومات عن السيرفر**
 
  **#time**:**لمعرفة الوقت**
 
  **#avatar**:**تعرض صورتك الشخصية**
  
  **#aserver**:**تعرض صورة السيرفر**
    
  **#ping**:**تشوف كم سرعة استجابة البوت**
      
  **#info**:**معلومات كافية عن البوت**
    
  **#server**:**مجموعة سيرفرات البوت**
  
  **#id**:**مدة دخولك فالسيرفر والديسكورد**
    
 **اوامر الالعاب|Game**
      
 **#صراحة**

 **#عقاب**

 **#كت تويت**

 **#خواطر**

 **#حب**
 
 **اوامر الميوزك|Music Commands**
 
 **#join**:**ليدخل البوت الروم**
 
 **#play**:**ليشغل اغنية**
  
 **#skip**:**ليتخطى عن الاغنية**
 
 **#vol**:**لرفع الصوت وخفضه**
  
 **#stop**:**لتتوقف الاغنية**
 
 **أخرى**
 
 **#support**:**سيرفر السبورت اصحاب البوت**
 
 **#invite**:**لدعوة البوت الى السيرفر**
 
`)
.setFooter("Jelly Bot™", 'https://cdn.discordapp.com/avatars/419865652547944458/960cc2c1fba9ab4f3b7497b6512b461d.png?size=2048')
     .setTimestamp();
message.author.sendEmbed(embed)

}
}); 

client.on('message', message => {
if (message.content === 'سيشhelp') {
message.reply('**DONE :grin: **')
message.react('📩')
}

});




//-------------------------------------هيلب



//-------------------------------------بوت
client.on('message', message => {
    var prefix = "#";
    if (message.content.startsWith(prefix + "bot")) {
        const embed = new Discord.RichEmbed()
            .setColor("#6fc167")
            .setDescription(`**Servers**🌐 **__${client.guilds.size}__**
**Users**👥 **__${client.users.size}__**
**Channels**📚 **__${client.channels.size}__** `)
.setFooter("Jelly Bot™", 'https://cdn.discordapp.com/avatars/419865652547944458/960cc2c1fba9ab4f3b7497b6512b461d.png?size=2048')
     .setTimestamp();
     message.channel.sendEmbed(embed);

    }
});

//-------------------------------------بوت


//-------------------------------------في رساله في الخااص !!
var prefix = "#"
client.on('message', function (message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var Jelly = new Discord.RichEmbed()
            .setColor('#6fc167')
            .setTimestamp()
            .setTitle('``عندي رساله جديده بل خاص ! ``')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
            .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)
        client.channels.get("417408457218588682").send({ embed: Jelly });
    }
});

//-------------------------------------في رساله ب الخااص !!

//-------------------------------------برودكستات السيرفر فقط
var prefix = "#"
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
                    .addField(' الـسيرفر', `${message.guild.name}`, true)
                    .addField(' الـمرسل ', `${message.author.username}*${message.author.discriminator}`, true)
                    .addField(' الرسالة ', args)
                    .setThumbnail(message.guild.iconURL)
                    .setColor('#6fc167')
.setFooter("Jelly Bot™", 'https://cdn.discordapp.com/avatars/419865652547944458/960cc2c1fba9ab4f3b7497b6512b461d.png?size=2048')
     .setTimestamp();
                m.send(`${m}`, { embed: bc });
            });
            const AziRo = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('✅| جاري ارسال رسالتك ')
                .addBlankField(true)
                .addField('♨| عدد الاعضاء المرسل لهم ', message.guild.memberCount, true)
                .addField('📝| الرسالة ', args)
                .setColor('#6fc167')
.setFooter("Jelly Bot™", 'https://cdn.discordapp.com/avatars/419865652547944458/960cc2c1fba9ab4f3b7497b6512b461d.png?size=2048')
     .setTimestamp();
            message.channel.sendEmbed(AziRo);
        message.delete();

        }
    } else {
        return;
    }
});

//-------------------------------------برودكستات السيرفر فقط


//-------------------------------------الكيك

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
.setFooter("Jelly Bot™", 'https://cdn.discordapp.com/avatars/419865652547944458/960cc2c1fba9ab4f3b7497b6512b461d.png?size=2048')
     .setTimestamp();
        message.channel.send({
            embed: kickembed
        })
    }
});
//-------------------------------------الكيك

//-------------------------------------الباند
var prefix = "#"
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
.setFooter("Jelly Bot™", 'https://cdn.discordapp.com/avatars/419865652547944458/960cc2c1fba9ab4f3b7497b6512b461d.png?size=2048')
     .setTimestamp();
        message.channel.send({
            embed: banembed
        })
    }
});

//-------------------------------------الباند





//-------------------------------------الساي

var prefix = "df";
client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    if (command == "fgfgfggfgfgy") {
        message.channel.sendMessage(args.join("  "))

        message.delete();
    }

});

//-------------------------------------الساي


//-------------------------------------ح��له الاعضاع

client.on('message', message => {
    var prefix = "#";
    if (message.content.startsWith(prefix +'mb')) {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   all:  ${message.guild.memberCount}**`)         
              .setColor("#6fc167")
.setFooter("Jelly Bot™", 'https://cdn.discordapp.com/avatars/419865652547944458/960cc2c1fba9ab4f3b7497b6512b461d.png?size=2048')
     .setTimestamp();
     message.channel.send({embed});

    }
  });

//-------------------------------------حاله الأعضاع

//-------------------------------------معلومات السيرفر

client.on('message', message => {
  var prefix = "#";
    if (message.content.startsWith(prefix +"server")) {
        if (!message.channel.guild) return;
        const millis = new Date().getTime() - message.guild.createdAt.getTime();
        const now = new Date();

        const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
        const days = millis / 1000 / 60 / 60 / 24;
        let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
        var embed = new Discord.RichEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL)
            .addField("**🆔 سيـرفر ايــدي**", "**" + message.guild.id + "**", true)
            .addField("**👑 سيــرفر اونـر**", "**" + message.guild.owner + "**", true)
            .addField("**✅ الشــات الاســاســي**", "**" + message.guild.DefaultChannel + "**", true)
            .addField("**🌍 المـوقع**", "**" + message.guild.region + "**", true)
            .addField('**💬 عدد الرومــات الكتابيــة**', `**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`, true)
            .addField("**📣 عدد الرومــات الصوتــية**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `, true)
            .addField("**🤔 عدد ايــام انشــاء السيــرفر**", ` ** [ ${days.toFixed(0)} ] ** Day `, true)
            .addField("**roles| الــرتــب**", `**[${message.guild.roles.size}]** Role `, true)
            .addField("👥عدد الاعضــاء", `
**${message.guild.memberCount}**`)
            .setThumbnail(message.guild.iconURL)
            .setColor('#6fc167')
.setFooter("Jelly Bot™", 'https://cdn.discordapp.com/avatars/419865652547944458/960cc2c1fba9ab4f3b7497b6512b461d.png?size=2048')
     .setTimestamp();
     message.channel.sendEmbed(embed)

    }
});

//-------------------------------------معلومات السيرفر


//-------------------------------------ايدي

client.on("message", msg => {
    var prefix = "#";
    if (msg.content.startsWith(prefix + "ايدي")) {
        if (!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
        const embed = new Discord.RichEmbed();
        embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}*${msg.author.discriminator} ]**`, true)
            .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
            .setColor("#6fc167")
            .setFooter(msg.author.username, msg.author.avatarURL)
            .setThumbnail(`${msg.author.avatarURL}`)
            .setTimestamp()
            .setURL(`${msg.author.avatarURL}`)
            .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
            .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
            .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
            .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);

        msg.channel.send({ embed: embed })
    }
});
//-------------------------------------ايدي

//-------------------------------------مسح الشات
client.on("message", message => {
    var prefix = "#";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clearall")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('  ');
        var msg;
        msg = parseInt();
        
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
       var     messagesDeleted = messages.array().length;
             var embed = new Discord.RichEmbed()
             .setColor("#6fc167")
             .setDescription(`
🔹 | messages cleared : **${messagesDeleted}**

👤 | By :**${message.author.username}**
             `)
.setFooter("Jelly Bot™", 'https://cdn.discordapp.com/avatars/419865652547944458/960cc2c1fba9ab4f3b7497b6512b461d.png?size=2048')
     .setTimestamp();
     message.channel.sendEmbed(embed)
            .then(msg => {msg.delete(3000)});
          })
            }
    });


//-------------------------------------مسح الشات


//-------------------------------------الصوره الشخصيه

client.on('message', message => {
   if(message.content.startsWith(prefix +"avatar")) {
        var mentionned = message.mentions.users.first();
        var Jelly;
        if (mentionned) {
            var Jelly = mentionned;
        } else {
            var Jelly = message.author;

        }
        const embed = new Discord.RichEmbed()
            .setColor("#6fc167")
            .setImage(`${Jelly.avatarURL}`)
.setFooter("Jelly Bot™", 'https://cdn.discordapp.com/avatars/419865652547944458/960cc2c1fba9ab4f3b7497b6512b461d.png?size=2048')
     .setTimestamp();
        message.channel.sendEmbed(embed);
    }
});

//-------------------------------------الصوره الشخصيه

//-------------------------------------صوره السيرفر

client.on("message", message => {
    const prefix = "#"

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
.setFooter("Jelly Bot™", 'https://cdn.discordapp.com/avatars/419865652547944458/960cc2c1fba9ab4f3b7497b6512b461d.png?size=2048')
     .setTimestamp();
        message.channel.send({ embed });
    }
});

//-------------------------------------صوره السيرفر

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

//-------------------------------------بنق

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
                        .addField('`Time Taken`:',msg + " ms :signal_strength: ")
                        .addField('`Discord Api`:',api + " ms :signal_strength: ")
.setFooter("Jelly Bot™", 'https://cdn.discordapp.com/avatars/419865652547944458/960cc2c1fba9ab4f3b7497b6512b461d.png?size=2048')
     .setTimestamp();
         message.channel.send({embed:embed});

                        }
                    });


//-------------------------------------بنق

//-------------------------------------ايمبيد

var prefix = "#";

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);



    if (command == "embed") {
        let say = new Discord.RichEmbed()
            .setDescription(args.join("  "))
            .setColor("#6fc167")
.setFooter("Jelly Bot™", 'https://cdn.discordapp.com/avatars/419865652547944458/960cc2c1fba9ab4f3b7497b6512b461d.png?size=2048')
     .setTimestamp();
        message.channel.sendEmbed(say);
        message.delete();
    }


});

//-------------------------------------ايمبيد

//-------------------------------------رساله لكل السيرفرات

client.on('message', message => {
    let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.startsWith(prefix +'bc2')) {
        if (!message.author.id === '') return;
        message.channel.sendMessage('جار ارسال الرسالة :white_check_mark:')
        client.users.forEach(m => {
            m.sendMessage(args)
        })
    }
});

//-------------------------------------رساله لكل السيرفرات

//-------------------------------------الهيلب ب الشات

//-------------------------------------الهيلب  ب   الشات

//-------------------------------------ستاتس
client.on('message', message => {
    if(message.content.startsWith(prefix +"info")) {
        message.channel.send({
            embed: new Discord.RichEmbed()
                .setAuthor(client.user.username, client.user.avatarURL)
                .setThumbnail(client.user.avatarURL)
                .setColor('#6fc167')
                .setTitle('``INFO Mark|Bot`` ')
                .addField('``Uptime``', [timeCon(process.uptime())], true)
                .addField('``My Ping``', [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
                .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
                .addField('``servers``', [client.guilds.size], true)
                .addField('``channels``', `[ ${client.channels.size} ]`, true)
                .addField('``Users``', `[ ${client.users.size} ]`, true)
                .addField('``My Name``', `[ ${client.user.tag} ]`, true)
                .addField('``My ID``', `[ ${client.user.id} ]`, true)
                .addField('``My Prefix``', `[ # ]`, true)
                .addField('``My Language``', `[ Java Script ]`, true)
.setFooter("Jelly Bot™", 'https://cdn.discordapp.com/avatars/419865652547944458/960cc2c1fba9ab4f3b7497b6512b461d.png?size=2048')
     })
    }
});
//-------------------------------------ستاتس

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


//-------------------------------------ميوت
client.on("message", message => {
    if (message.author.bot) return;

    let command = message.content.split(" ")[0];

    if (command === "te") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
        let user = message.mentions.users.first();
        let modlog = client.channels.find('name', 'mute-log');
        let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
        if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
        if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);

        const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setTimestamp()
            .addField('الأستعمال:', 'اسكت/احكي')
            .addField('تم ميوت:', `${user.username}*${user.discriminator} (${user.id})`)
            .addField('بواسطة:', `${message.author.username}*${message.author.discriminator}`)

        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

        if (message.guild.member(user).roles.has(muteRole.id)) {
            return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
        } else {
            message.guild.member(user).addRole(muteRole).then(() => {
                return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
            });
        }

    };

});

//-------------------------------------ميوت

//-------------------------------------فك ميوت

client.on("message", message => {
    if (message.author.bot) return;

    let command = message.content.split(" ")[0];

    if (command === "te") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
        let user = message.mentions.users.first();
        let modlog = client.channels.find('name', 'mute-log');
        let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
        if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
        if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
        const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setTimestamp()
            .addField('الأستعمال:', 'اسكت/احكي')
            .addField('تم فك الميوت عن:', `${user.username}*${user.discriminator} (${user.id})`)
            .addField('بواسطة:', `${message.author.username}*${message.author.discriminator}`)

        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

        if (message.guild.member(user).removeRole(muteRole.id)) {
            return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
        } else {
            message.guild.member(user).removeRole(muteRole).then(() => {
                return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
            });
        }

    };

});

//-------------------------------------فك ميوت


//-------------------------------------تم اضافه البوت و خروجه



//-------------------------------------اضافه البوت و خروجه

//------------------------------------- رساله في الخاص للأونر

client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
        .setColor(0x5500ff)
        .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك :blush:**`)
    guild.owner.send(embed)
});

client.on('guildDelete', guild => {
    var embed = new Discord.RichEmbed()
        .setColor(0x5500ff)
        .setDescription(`**نتمى انكم استمتعتم ب البوت :wink:**`)
    guild.owner.send(embed)
});

//-------------------------------------رساله في الخاص للأونر



//-------------------------------------تغير بدون اطفاء

client.on('message', message => {
    var prefix = "#";

    if (!message.content.startsWith(prefix)) return;
    var args = message.content.split(' ').slice(1);
    var argresult = args.join(' ');
    if (message.author.id == 414307130821181441) return;


    if (message.content.startsWith(prefix + 'playing')) {
        if (message.author.id !== '414307130821181441') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
        client.user.setGame(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
    } else


        if (message.content.startsWith(prefix + 'streem')) {
            if (message.author.id !== '414307130821181441') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
            client.user.setGame(argresult, "http://twitch.tv/y04zgamer");
            message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
        } else

            if (message.content.startsWith(prefix + 'set-name')) {
                if (message.author.id !== '414307130821181441') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
                client.user.setUsername(argresult).then
                message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
                return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
            } else

                if (message.content.startsWith(prefix + 'set-avatar')) {
                    if (message.author.id !== '414307130821181441') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
                    client.user.setAvatar(argresult);
                    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
                } else


                    if (message.content.startsWith(prefix + 'watching')) {
                        if (message.author.id !== '414307130821181441') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
                        client.user.setActivity(argresult, { type: 'watching' });
                        message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
                    }

});
//-------------------------------------تغير بدون اطفاء


//games


//-------------------------------------ولكم

client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`يا هلا بك :raised_hand::skin-tone-1: :smiley:`)
        .setDescription(`اهلاً بك في سيرفرنا :blush:`)
        .addField(' :bust_in_silhouette:  انت رقم', `**[ ${member.guild.memberCount} ]**`, true)
        .setColor('GREEN')
        .setFooter('======= نــتــمــنــآ لــكــم آســتــمـــتــآع =======', 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')

    var channel = member.guild.channels.find('name', 'لاg')
    if (!channel) return;
    channel.send({ embed: embed });
});

client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   تبقي', `**[ ${member.guild.memberCount} ]**`, true)
        .setColor('RED')
        .setFooter(`======= نــتــمــنــآ لــكــم آســتــمـــتــآع =======`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')

    var channel = member.guild.channels.find('name', 'لاg')
    if (!channel) return;
    channel.send({ embed: embed });
})
//------------------------------------- المغادره


//-------------------------------------الأغاني يلد





//..........

//-------------------------------------







client.on('message', message => {
    if (message.content === prefix + "servers") {

        if (!message.channel.guild) return;
        if (message.content < 1023) return
        const Embed11 = new Discord.RichEmbed()
            .setAuthor(client.user.username, client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setDescription(`***مجموع السيرفرات ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}***`)
        message.channel.sendEmbed(Embed11)
    }
});

const moment = require('moment');
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', message => {
   if (message.content.startsWith(prefix +"id")) {
        var args = message.content.split(" ").slice(1);
        let user = message.mentions.users.first();
        var men = message.mentions.users.first();
       if(mentionned){
            var official = mentionned;} 
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
        .setColor("#6fc167")
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
   .addField("Name",                              `** ${message.author.username}**`, true)
   .addField("#",                                 `${message.author.discriminator} `, true)
   .setFooter("Jelly Bot™", 'https://cdn.discordapp.com/attachments/435458962054447122/435464826819444737/giphy-preview.gif')
     .setTimestamp();
        message.channel.send(id)
}       });









//-------------------------------------توكن















 


client.on("roleCreate",  rc => {
const channel = rc.guild.channels.find("name", "log")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` - Role Create`)
  .setDescription(`A role Has been created \n Name : ${rc.name}`)
  .setColor(`#6fc167`)
.setFooter("Jelly Bot™", 'https://cdn.discordapp.com/attachments/435458962054447122/435464826819444737/giphy-preview.gif')
     .setTimestamp();
channel.sendEmbed(embed)
}
});

client.on("roleDelete",  rd => {
const channel = rd.guild.channels.find("name", "log")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` - Role Delete`)
  .setDescription(`A role has been deleted \n Name : ${rd.name}`)
  .setColor(`#6fc167`)
.setFooter("Jelly Bot™", 'https://cdn.discordapp.com/attachments/435458962054447122/435464826819444737/giphy-preview.gif')
     .setTimestamp();
channel.sendEmbed(embed)
}
});


 
 
 

   client.on('message', message => {   
if (message.author.boss) return;
var prefix = "#";
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);
if (command == "mute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).addRole(muteRole);
const muteembed = new Discord.RichEmbed()
.addField("**تم اعطاء الشخص ميوت فالخاص**")
message.channel.send({embed : muteembed});
var muteembeddm = new Discord.RichEmbed()
.setAuthor(`Muted!`, user.displayAvatarURL)
.setDescription(`
       .setFooter('Jelly Bot™ ')
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين 

 ${message.author.tag} تمت معاقبتك بواسطة

[ ${reason} ] : السبب

اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين 
`)
.setFooter(` : ${message.guild.name}`)
.setColor("#6fc167")
 user.send( muteembeddm);
}
if (command == "unmute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انتا لا تملك صلاحيات").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).removeRole(muteRole);
const unmuteembed = new Discord.RichEmbed()
.addField("**تم اعطاء الشخص ميوت فالخاص**")
message.channel.send({embed : unmuteembed}).then(msg => msg.delete(5000));
var unmuteembeddm = new Discord.RichEmbed()
.setDescription(`تم فك الميوت عنك ${user}`)
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setColor("#6fc167")
       .setFooter('Jelly Bot™ ')

  user.send( unmuteembeddm);
}
});





       

client.on('guildMemberAdd', member=> {

        var embed = new Discord.RichEmbed()
                .setTitle(`**لتفعيل اكتب #تفعيل**:raised_hand::skin-tone-1: :smiley:`)
    var channel =member.guild.channels.find('name', 'activated')
    if (!channel) return;
    channel.send({embed : embed});
    });

          client.on('message', function(message) {
    var prefix = "#"
 
    if(message.content.startsWith(prefix + 'تفعيل')) {
        let guild = message.mentions.members.first();
                                  let modlog = client.channels.find('name', 'active');


                          let ZmA = new Discord.RichEmbed()
  .setColor('3fcf24')
                  .setDescription('**__:white_check_mark: لقد تم تفعيلك في السيرفر__**')
                                      .addField('تم تفعيل العضو :', "<@" + message.author.id + ">")
             
             
             
                    .setImage(`${message.author.avatarURL}`)
  

  message.delete("..");


        message.member.addRole(message.guild.roles.find('name', 'acيييive'));
                    message.channel.send({embed:ZmA});
    }
});
 




client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Members"));
    });





 client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);

});


client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('id', '419d4921895247895');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('#6fc167')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: |' , `**WELCOME TO EMOTES**, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| YOU ARE USER NUMBER',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                      
                                     .addField('here', `${member.guild.name}`,true)
                                       
     .setFooter(" **HEY HEY SO LUCKY**   ")
        .setTimestamp()
    
      channel.sendEmbed(embed);
    });
    
    

 












    
 client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);

});


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Users] ${client.users.size}`)

});




 
    client.on('message', msg => {
    if (msg.content === 'i want to go to the market') {
      msg.reply('**ok _+**');
    }
  });
  
  
client.on('message', message => {
   
    if (message.content.startsWith(prefix +"#رابط")) {
        
  message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("#6fc167")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("#6fc167")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
       .setFooter('Jelly Bot™ ')

**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 1 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
          .setFooter('Jelly Bot™ ')
      message.author.sendEmbed(Embed11)
    }
});





client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Users] ${client.users.size}`)

});


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Users] ${client.users.size}`)

});




client.on('message', message => {
    var prefix = "#"
if (message.content.startsWith(prefix + "uptime")) {
   let uptime = client.uptime;

   let days = 0;
   let hours = 0;
   let minutes = 0;
   let seconds = 0;
   let notCompleted = true;

   while (notCompleted) {

       if (uptime >= 8.64e+7) {

           days++;
           uptime -= 8.64e+7;

       } else if (uptime >= 3.6e+6) {

           hours++;
           uptime -= 3.6e+6;

       } else if (uptime >= 60000) {

           minutes++;
           uptime -= 60000;

       } else if (uptime >= 1000) {
           seconds++;
           uptime -= 1000;

       }

       if (uptime < 1000)  notCompleted = false;

   }

   message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");

        message.delete();

}
});



   
     client.on('guildMemberAdd', member => {

     if (member.guild.id === "4d1566m059867658") {
    
    
var Canvas = require('canvas')
var jimp = require('jimp')

const w = ['./img/dsa.jpg'];

        let Image = Canvas.Image,
            canvas = new Canvas(401, 202),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 401, 202);

})

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        //Avatar
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.drawImage(ava, 152, 27, 95, 95);
                        
                                                //wl
                        ctx.font = '20px Arial Bold';
                        ctx.fontSize = '25px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText("WELCOME TO EMOTES", 210, 154);
                        
                        //ur name
                        ctx.font = '20px Arial';
                        ctx.fontSize = '28px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 213, 190);
                        
client.channels.get("41732075d0m0813").sendFile(canvas.toBuffer())
client.channels.get("41732075d0m520813").send(`Welcome ${member} To __${member.guild.name}___`)



})
})

}
});

var Canvas = require('canvas')
var jimp = require('jimp')
client.on('guildMemberAdd', member => {
      
        if (member.guild.id === "4198542n95247893") {
        var w = ['./img/aaa.jpg'];
           let Image = Canvas.Image,
               canvas = new Canvas(401, 202),
               ctx = canvas.getContext('2d');
           ctx.patternQuality = 'bilinear';
           ctx.filter = 'bilinear';
           ctx.antialias = 'subpixel';
           ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
           ctx.shadowOffsetY = 2;
           ctx.shadowBlur = 2;
           fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
               if (err) return console.log(err);
               let BG = Canvas.Image;
               let ground = new Image;
               ground.src = Background;
               ctx.drawImage(ground, 0, 0, 401, 202);
   
   })
   
                   let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                   jimp.read(url, (err, ava) => {
                       if (err) return console.log(err);
                       ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                           if (err) return console.log(err);
//Avatar
                           let Avatar = Canvas.Image;
                           let ava = new Avatar;
                           ava.src = buf;
                           ctx.beginPath();
                           ctx.arc(152 , 72, 95, 95, Math.PI*2);
                              ctx.closePath();
                              ctx.clip();
                           ctx.drawImage(ava, 152, 72, 95, 95);                           
   client.channels.get("419854921n9527895").sendFile(canvas.toBuffer())
  client.channels.get("419854921n9547895").send(`Welcome ${member} To __${member.guild.name}__`)
   })})  }
   });



client.on('message', message => {

if (message.content.startsWith("#addrole")) {
             if(!message.channel.guild) return message.reply('**Commands in the server**');
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('⚠ **You do not have permissions**');
        let args = message.content.split(" ").slice(1);
            message.guild.createRole({
                name : args.join(' '),
                color : "#6fc167", 
                permissions : [1]
            }).then(function(role){
                message.addRole(role)
                 message.delete();

            })

}
});

client.on('message', message => { 
    var prefix = "#";
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "role") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**ضع منشن الشخص!!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.reply('*** Done :grin:   ***').then(msg => {msg.delete(10000)});
    }
    });


client.on('message', message => {
    if (message.content === '#roles') {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('#6fc167')
        .addField('Roles:',`**[${roles}]**`)
              .setFooter('Jelly Bot™ ')
 
       message.channel.sendEmbed(embed);
    }
});




  

const Sra7a = [
  'صراحه  |  صوتك حلوة؟',
  'صراحه  |  التقيت الناس مع وجوهين؟',
  'صراحه  |  شيء وكنت تحقق اللسان؟',
  'صراحه  |  أنا شخص ضعيف عندما؟',
  'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
  'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
  'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
  'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
  'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
  'صراحه  |  أشجع شيء حلو في حياتك؟',
  'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
  'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
  'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
  'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
  'صراحه  |  نظرة و يفسد الصداقة؟',
  'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
  'صراحه  |  شخص معك بالحلوه والمُره؟',
  'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
  'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
  'صراحه  |  وش تتمنى الناس تعرف عليك؟',
  'صراحه  |  ابيع المجرة عشان؟',
  'صراحه  |  أحيانا احس ان الناس ، كمل؟',
  'صراحه  |  مع مين ودك تنام اليوم؟',
  'صراحه  |  صدفة العمر الحلوة هي اني؟',
  'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
  'صراحه  |  صفة تحبها في نفسك؟',
  'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
  'صراحه  |  تصلي صلواتك الخمس كلها؟',
  'صراحه  |  ‏تجامل أحد على راحتك؟',
  'صراحه  |  اشجع شيء سويتة بحياتك؟',
  'صراحه  |  وش ناوي تسوي اليوم؟',
  'صراحه  |  وش شعورك لما تشوف المطر؟',
  'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
  'صراحه  |  ما اكثر شي ندمن عليه؟',
  'صراحه  |  اي الدول تتمنى ان تزورها؟',
  'صراحه  |  متى اخر مره بكيت؟',
  'صراحه  |  تقيم حظك ؟ من عشره؟',
  'صراحه  |  هل تعتقد ان حظك سيئ؟',
  'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
  'صراحه  |  كلمة تود سماعها كل يوم؟',
  'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
  'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
  'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
  'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
  '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
  'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
  '‏صراحه | هل تحب عائلتك ام تكرههم؟',
  '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
  '‏صراحه  |  هل خجلت من نفسك من قبل؟',
  '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
  '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
  '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
 '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
  '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
  '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
  'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
  '‏صراحه  |  ما هو عمرك الحقيقي؟',
  '‏صراحه  |  ما اكثر شي ندمن عليه؟',
'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
client.on('message', message => {
if (message.content.startsWith('#صراحة')) {
  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.RichEmbed()
.setTitle("لعبة صراحة ..")
.setColor('#6fc167')
.setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
.setImage("https://cdn.discordapp.com/attachments/435458962054447122/435464826819444737/giphy-preview.gif")
               .setTimestamp()

message.channel.sendEmbed(client);
message.react("??")
}
});


const Za7f = [
 "**صورة وجهك او رجلك او خشمك او يدك**.",
 "**اصدر اي صوت يطلبه منك الاعبين**.",
 "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
 "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
 "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
 "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
 "**ذي المرة لك لا تعيدها**.",
 "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
 "**صور اي شيء يطلبه منك الاعبين**.",
 "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
 "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
 "**سو مشهد تمثيلي عن مصرية بتولد**.",
 "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
 "**ذي المرة لك لا تعيدها**.",
 "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
 "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
 "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
 "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
 "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
 "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
 "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
 "**اتصل على امك و قول لها انك تحبها :heart:**.",
 "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
 "**قل لواحد ماتعرفه عطني كف**.",
 "**منشن الجميع وقل انا اكرهكم**.",
 "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
 "**روح المطبخ و اكسر صحن او كوب**.",
 "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
 "**قول لاي بنت موجود في الروم كلمة حلوه**.",
 "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
 "**لا تتكلم ولا كلمة الين يجي دو����ك مرة ثانية و اذا تكلمت يجيك باند لمدة ي��م كامل من السيرفر**.",
 "**قول قصيدة **.",
 "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
 "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
 "**اول واحد تشوفه عطه كف**.",
 "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
 "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
 "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
 "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من ��ختيار الي معك**.",
 "**تاخذ عقابين**.",
 "**قول اسم امك افتخر بأسم امك**.",
 "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
 "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
 "**اذهب الى واحد ماتعرفه وقل له انا ك����وت وابي بوسه**.",
 "**تتصل على الوالده  و تقول لها خطفت شخص**.",
 "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
 "**����تصل على الوالده  و تقول لها  احب وحده**.",
   "**تتصل على شرطي تقول له عندكم مطافي**.",
   "**خلاص سامحتك**.",
   "** تصيح في الشارع انا  مجنوون**.",
   "** تروح عند شخص تقول له احبك**.",

]


client.on('message', message => {
if (message.content.startsWith("#عقاب")) {
             if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('#6fc167')
.setThumbnail(message.author.avatarURL) 
.addField('Jelly Boy ™' ,
`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
console.log('عقاب Send By: ' + message.author.username)
 }
});


const cuttweet = [
  'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
  'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
  'كت تويت | الحرية لـ ... ؟',
  'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
  'كت تويت ‏| كلمة للصُداع؟',
  'كت تويت ‏| ما الشيء الذي يُفارقك؟',
  'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
  'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
  'كت تويت | بعد ١٠ سنين ا��ش بتكون ؟',
  'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
  '‏كت تويت | عم����ك شلت مصيبة عن شخص برغبتك ؟',
  'كت تويت | أكثر س��ال وجِّه إليك مؤخرًا؟',
  '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
  '‏كت تويت | وش يفسد الصداقة؟',
  '‏كت تويت | شخص لاترفض له طلبا ؟',
  '‏كت تويت | كم مره خسرت شخص تحبه؟.',
  '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
  '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
  '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
  '‏كت تويت |أقوى كذبة مشت عليك ؟',
  '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
  'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
  '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
  '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
  '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
  '‏كت تويت | مطلبك الوحيد الحين ؟',
  '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

client.on('message', message => {
if (message.content.startsWith("#كت تويت")) {
             if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('#6fc167')
.setThumbnail(message.author.avatarURL) 
.addField('لعبه كت تويت' ,
`${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
message.channel.sendEmbed(embed);
console.log('Jelly Bot™: ' + message.author.username)
 }
});


const secreT = [
"**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
"**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
"**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
"**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
"**ان تعالج ألمك بنفسك تلك هى القوة**.", 
"**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
"**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
"**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
"**المناقشات العقيمة لا تنجب افكارا**.", 
"**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
"**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]


client.on('message', message => {
if (message.content.startsWith(prefix +"خواطر")) {
             if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('#6fc167')

.setThumbnail(message.author.avatarURL) 
.addField('لعبه خواطر' ,
`${secreT[Math.floor(Math.random() * secreT.length)]}`)
message.channel.sendEmbed(embed);
console.log('Jelly Bot™: ' + message.author.username)
 }
});

const Love = [  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",   "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلاك بعـــاشق ارهـــابي**.",   "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",   "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",   "**لو كنت دمعة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيوني**.",   "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",   "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",   "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",   "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",   "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",   "**نفسى أكون نجمة سماك .. همسة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",   "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**.", ]


client.on('message', message => {
if (message.content.startsWith(prefix +"حب")) {
             if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('#6fc167')
.setThumbnail(message.author.avatarURL) 
.addField('Jelly Bot™' ,
`${Love[Math.floor(Math.random() * Love.length)]}`)
message.channel.sendEmbed(embed);
console.log('Jelly Bot™: ' + message.author.username)
 }
});

 client.on('message' , message => {
       if (message.content.startsWith(prefix +"invite")) {
            if(!message.channel.guild) return message.reply('This Command is Only For Servers');
         const embed = new Discord.RichEmbed()
     .setColor("#6fc167")
     .setThumbnail(client.user.avatarURL)
     .setAuthor(message.author.username, message.author.avatarURL)
     .setTitle('Click Here To Invite The Bot')
     .setURL('https://discordapp.com/api/oauth2/authorize?client_id=419857953651425290&scope=bot&permissions=1')
.setFooter("Jelly Bot™", 'https://cdn.discordapp.com/attachments/435458962054447122/435464826819444737/giphy-preview.gif')
     .setTimestamp();
      message.channel.sendEmbed(embed);
           message.delete();

       }
    });

client.on('message', message => {
  if (true) {
if (message.content.startsWith(prefix +'support')) {
     message.author.send('https://discord.gg/yWN69sa').catch(e => console.log(e.stack));
    }
   } 
  });
 
client.on('message', message => {
     if (message.content.startsWith(prefix +"support")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#6fc167")
  .addField("By Mark" , " تــــم ارســالك في الخــاص")
.setFooter("Jelly Bot™", 'https://cdn.discordapp.com/attachments/435458962054447122/435464826819444737/giphy-preview.gif')
     .setTimestamp();

  message.channel.sendEmbed(embed);
           message.delete();

    }
});

client.on('messageUpdate', (message, newMessage) => {
  if (message.content === newMessage.content) return;
  if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
  const channel = message.guild.channels.find('name', 'log');
  if (!channel) return;
  
  let embed = new Discord.RichEmbed()
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setColor('#6fc167')
     .setDescription(`✏ **Message sent by <@${message.author.id}> edited in** <#${message.channel.id}>\n\nOld:\n \`${message.cleanContent}\`\n\nNew:\n \`${newMessage.cleanContent}\``)
   .setFooter("Jelly Bot™", 'https://cdn.discordapp.com/attachments/435458962054447122/435464826819444737/giphy-preview.gif')
     .setTimestamp();
   channel.send({embed:embed});

});
// لوق الرسائل المنحذفه
client.on('messageDelete', message => {
  if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
  const channel = message.guild.channels.find('name', 'log');
  if (!channel) return;
  
  let embed = new Discord.RichEmbed()
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setColor('#6fc167')
     .setDescription(`🗑️ **Message sent by <@${message.author.id}> deleted in** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
     .setFooter("Jelly Bot™", 'https://cdn.discordapp.com/attachments/435458962054447122/435464826819444737/giphy-preview.gif')
     .setTimestamp();
   channel.send({embed:embed});

});
// لوق خروج اللاعبين
client.on('guildMemberRemove', member => {
  if (!member || !member.id || !member.guild) return;
  const guild = member.guild;

  const channel = member.guild.channels.find('name', 'log');
  if (!channel) return;
  let memberavatar = member.user.avatarURL
  const fromNow = moment(member.joinedTimestamp).fromNow();
  
  let embed = new Discord.RichEmbed()
     .setAuthor(`${member.user.tag}`, member.user.avatarURL)
   .setThumbnail(memberavatar)
     .setColor('#6fc167')
     .setDescription(`📤 <@${member.user.id}> **left the server**\n\n **Had joined:** \n \`${fromNow}\``)
     .setFooter("Jelly Bot™", 'https://cdn.discordapp.com/attachments/435458962054447122/435464826819444737/giphy-preview.gif')
     .setTimestamp();
   channel.send({embed:embed});
});
// لوق دخول اللاعبين
client.on('guildMemberAdd', member => {
  if (!member || !member.id || !member.guild) return;
  const guild = member.guild;

  const channel = member.guild.channels.find('name', 'log');
  if (!channel) return;
  let memberavatar = member.user.avatarURL
  const fromNow = moment(member.user.createdTimestamp).fromNow();
  const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';
  
  let embed = new Discord.RichEmbed()
     .setAuthor(`${member.user.tag}`, member.user.avatarURL)
   .setThumbnail(memberavatar)
     .setColor('#6fc167')
     .setDescription(`📥 <@${member.user.id}> **Joined the server**\n\n **Created:** \n \`${fromNow} ${isNew}\``)
     .setFooter("Jelly Bot™", 'https://cdn.discordapp.com/attachments/435458962054447122/435464826819444737/giphy-preview.gif')
     .setTimestamp();
   channel.send({embed:embed});
});


  


client.on("message", message => {
 if (message.content.startsWith(prefix +"time")) {
let user = message.mentions.users.first();
var args = message.content.split(" ").slice(1);
var men = message.mentions.users.first();
var heg;
if(men)
{heg = men} else {heg = message.author}
var mentionned = message.mentions.members.first();
var xsateam;
if(mentionned) 
{xsateam = mentionned}
else {xsateam = message.member}
moment.locale("ar-TN"); //TN
var id = new  Discord.RichEmbed()
.setColor("#6fc167")
.setAuthor(`${heg.username}#${heg.discriminator} `,heg.avatarURL)
.setDescription([`***clock:***${moment().format("HH:mm:ss A")}
***DATE:***${moment().format("YYYY/M/D")}
***DAY:*** ${moment().format("dddd")}`])
.setFooter("Jelly Bot™", 'https://cdn.discordapp.com/avatars/419865652547944458/960cc2c1fba9ab4f3b7497b6512b461d.png?size=2048')
     .setTimestamp();
message.channel.send(id)};});

client.on("message", message => {
    if(message.author.id !== "414307130821181441") return;

    if(message.content === "#j"){
        console.log("your say restart for this i'm closed");
        return process.exit(26);
    }   
});
 



client.on('message', message => {
                        if(message.content == '-d') {
                            const embed = new Discord.RichEmbed()
                            .setColor("RANDOM")
                            .setAuthor(`Requisted BY`)
                            .setTitle("__اوامر البوت__")
                            .addField('**-<bc**' , '**لنشر رساله الى جميع الاعضاء المتواجدين**')
                            .addField('**-<bot**' , '**لمعرفه عدد السيرفرات التي تستضيف البوت**')
                            .addField('**-<rules**' , '**لرؤيه جميع القواعد و القوانين في السيرفر**')
                            .addField('**-<ping**' , '**لرؤيه سرعة اتصال البوت في الخادم**')
                            .addField('**-<kick**' , '**لطرد اي شخص من السيرفر**')
                            .addField('**-<invite**' , '**لاضافه البوت الى سيرفرك**')
                                  
                                   message.author.sendEmbed(embed).then(message.reply('Check In DM :mailbox_with_mail:')).then(message.react('📩')).then(message.delete());
                        }
                    });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Users] ${client.users.size}`)

});
client.on('guildMemberAdd', member => {

     if (member.guild.id === "4198592189524789#") {
    
    
var Canvas = require('canvas')
var jimp = require('jimp')

const w = ['./img/sss.png'];
let Image = Canvas.Image,
            canvas = new Canvas(401, 202),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 401, 202);

})
let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        //Avatar
                        let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(76, 100, 64, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 10, 25, 135, 170);
                        
                                                //wl
                        ctx.font = '20px Arial Bold';
                        ctx.fontSize = '25px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText("Welcome To Server", 210, 154);
                        
                        //ur name
                        ctx.font = '20px Arial';
                        ctx.fontSize = '28px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "left";
                        ctx.fillText(member.user.username, 213, 190);
                        
client.channels.get("41985492189547895").sendFile(canvas.toBuffer())
client.channels.get("41985492189547895").send(`Welcome ${member} To __${member.guild.name}__`)



})
})

}
});


client.on('guildMemberAdd', member => {
      
        if (member.guild.id === "41985491195247893") {
        var w = ['img/11.jpg'];
           let Image = Canvas.Image,
               canvas = new Canvas(401, 202),
               ctx = canvas.getContext('2d');
           ctx.patternQuality = 'bilinear';
           ctx.filter = 'bilinear';
           ctx.antialias = 'subpixel';
           ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
           ctx.shadowOffsetY = 2;
           ctx.shadowBlur = 2;
           fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
               if (err) return console.log(err);
               let BG = Canvas.Image;
               let ground = new Image;
               ground.src = Background;
               ctx.drawImage(ground, 0, 0, 401, 202);
   
   })
   
                   let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                   jimp.read(url, (err, ava) => {
                       if (err) return console.log(err);
                       ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                           if (err) return console.log(err);

//AVATAR�
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(76, 100, 64, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 10, 30, 135, 170);                    
   client.channels.get("4199361334313922").sendFile(canvas.toBuffer())
  client.channels.get("419936451334331922").send(`**Welcome ${member} To __${member.guild.name}__  you are user number  ${member.guild.memberCount}**`)


 
    })})  }
   });









client.on('message', message => {
     if (message.content.startsWith(prefix +"rn")) {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('#6fc167')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
       .setFooter("Jelly Bot™", 'https://cdn.discordapp.com/attachments/435458962054447122/435464826819444737/giphy-preview.gif')
     .setTimestamp();
        message.channel.sendEmbed(embed);
    }
});



 
 
 
 
 
 




























const Eris = require("eris");
var x5bzteam = new Eris("NDE5ODU3OTUzNjUxNDI1Mjkw.DZKg7A.C7uz8lJCuU6Ha2RpMlVwqVmsssk");
x5bzteam.on("ready", () => {
    console.log("Yo! Changer [ON]");
    onstart();
});
x5bz = "419857953651425290";
nick = "Jelly Bot";
function onstart(){
    var v1 = nick.split('');
    var counter;
    var i=0;
var x5bz2 = ' ';
  var x5bz3 =   setInterval(function(){
     
     if (i == v1.length){
     clearInterval(x5bz3);
     onstart()
      return;
     }
     var v2 = v1[i];
    x5bz2 += v2;
    x5bzteam.editNickname(x5bz, x5bz2);
 
        i++;
   
     }, 1000);
}
x5bzteam.connect();

 



client.on('ready', function(){
    var ms = 60000 ;
    var setGame = [`#help|bot in ${client.guilds.size}servers`,` https://discord.gg/MEzxQ8n`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/Streammingg`);
    }, ms);

});



client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["414307130821181441"];
if (message.content.startsWith(prefix + '#vo')) {
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage(`انت صاحب البوت تم اثبات ملكية البوت لكـ` + `:white_check_mark:`)
} else {
   message.reply('انت لست صاحب البوت ' + ':x:');   
}
}
});





client.on("message", msg => {
    var prefix = "<>";
    if(msg.content.startsWith (prefix + "id")) {
      var mentionned = msg.mentions.users.first();
      var official;
        if(mentionned){
            var official = mentionned;} 
            else 
        {var official = msg.author;}
        var roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
    if(!msg.channel.guild) return msg.reply("**:x: اسف لكن هذا الامر للسيرفرات فقط **");     
    const embed = new Discord.RichEmbed();
    embed.addField(":cloud_tornado:  الاسم", `**[ ${official.username}#${official.discriminator} ]**`, true)
    .addField(":id:  الايدي", `**[ ${official.id} ]**`, true)
    .setColor("RANDOM")
    .setFooter(official.username , official.avatarURL)
    .setThumbnail(`${official.avatarURL}`).setTimestamp()
    .setURL(`${official.avatarURL}`)
    .addField(":spy:  الحالة", `**[ ${official.presence.status.toUpperCase()} ]**`, true)
    .addField(":satellite_orbital:   يلعب", `**[ ${official.presence.game === null ? "No Game" : official.presence.game.name} ]**`, true)
    .addField(":military_medal:  الرتب", `**[ ${message.guild.roles.size} ]**`, true)
    .addField(":robot:  هل هو بوت", `**[ ${official.bot.toString().toUpperCase()} ]**`, true);
    msg.channel.send({embed: embed})}});
  prefix +
client .on("message", message => {
    let args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix +'u')) {
        let user = message.mentions.users.first();
        let reason = args.slice(1).join(' ');
        let modlog = client.channels.find('name', 'report');
        if (!reason) return message.reply('put a reson for your report  ');
          if (message.mentions.users.size < 1) return message.reply('You must mention someone to report them.').catch(console.error);
  
    if (!modlog) return message.reply('I can not find a report channel');
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('Action:', 'Report')
      .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('Modrator:', `${message.author.username}#${message.author.discriminator}`)
      .addField('Reason', reason);
      message.delete()
      return client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
  }
  });






client.on('message', message => {
  if (message.content.startsWith(prefix + 'clear')) {
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ماعندك هذا البرمشن[*MANAGE_MESSAGES*] `).catch(console.error);
message.delete()
if(!message.channel.guild) return;
let args = message.content.split(" ").slice(1);

const messagecount = parseInt(args.join(' '));
message.channel.fetchMessages({

limit: messagecount

}).then(messages => message.channel.bulkDelete(messages));

message.channel.sendMessage("", {embed: {
  title: "``✅ ``",

  color: 0x6fc167,
  footer:{
     
  
      
  }
  }}).then(msg => {msg.delete(3000)});
};

});




 

 
    




 

      
var fs = require('fs');
var Canvas = require('canvas')
var jimp = require('jimp')
client.on('guildMemberAdd', member => {
      
        if (member.guild.id === "41985491895247893") {
        var w = ['./img/Jelly.png'];
           let Image = Canvas.Image,
               canvas = new Canvas(401, 202),
               ctx = canvas.getContext('2d');
           ctx.patternQuality = 'bilinear';
           ctx.filter = 'bilinear';
           ctx.antialias = 'subpixel';
           ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
           ctx.shadowOffsetY = 2;
           ctx.shadowBlur = 2;
           fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
               if (err) return console.log(err);
               let BG = Canvas.Image;
               let ground = new Image;
               ground.src = Background;
               ctx.drawImage(ground, 0, 0, 401, 202);
   
   })
   
                   let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                   jimp.read(url, (err, ava) => {
                       if (err) return console.log(err);
                       ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                           if (err) return console.log(err);

//AVATAR�
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(75, 100, 63, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 10, 25, 135, 170);                    
      //ur name
                        ctx.font = '20px Arial';
                        ctx.fontSize = '28px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 228, 133);
   client.channels.get("419936453343313922").sendFile(canvas.toBuffer())
  client.channels.get("41993645334313922").send(`**Welcome ${member} To __${member.guild.name}__You are User number_  ${member.guild.memberCount}_** `)

   })})  }
   });
 
 
 
 
//▶




  
  
  

  







client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) {
    let pages = ['Page1','page2','page3']
    let page = 1;


    let embed = new Discord.RichEmbed()
    .setColor('#FFFFFF')
    .setDescription(pages[page-1])
embed.setDescription(`
**الصفحة الثانية لأوامر الادارة**
**الصفحة الثالثة للاوامر العامة**
`)
  
    message.author.sendEmbed(embed).then(msg => {


        msg.react('◀').then( r => {
            msg.react('▶')


        const backwardsFilter = (reaction, user) => reaction.emoji.name ===   '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 20000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 20000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setDescription(`
        
╱╱╭╮╱╱╭╮╭╮╱╱╱╱╭━━╮╱╱╱╭╮
╱╱┃┃╱╱┃┃┃┃╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╱╱┃┣━━┫┃┃┃╭╮╱╭┫╰╯╰┳━┻╮╭╯
╭╮┃┃┃━┫┃┃┃┃┃╱┃┃╭━╮┃╭╮┃┃
┃╰╯┃┃━┫╰┫╰┫╰━╯┃╰━╯┃╰╯┃╰╮
╰━━┻━━┻━┻━┻━╮╭┻━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╱╭━╯┃╱╱╱╱╱╱╱╱╱╱
╱╱╱╱╱╱╱╱╱╱╰━━╯╱╱╱╱╱╱╱╱╱╱
  **اوامر العامة|Normal**
 
  **#bot**:**معلومات بسيطة عن البوت**
 
  **#mb**:**حالة اعضاء السيرفر**
 
  **#server**:**معلومات عن السيرفر**
 
  **#time**:**لمعرفة الوقت**
 
  **#avatar**:**تعرض صورتك الشخصية**
  
  **#aserver**:**تعرض صورة السيرفر**
    
  **#ping**:**تشوف كم سرعة استجابة البوت**
      
  **#info**:**معلومات كافية عن البوت**
    
  **#server**:**مجموعة سيرفرات البوت**
  
  **#id**:**مدة دخولك فالسيرفر والديسكورد**
    
 **اوامر الالعاب|Game**
      
 **#صراحة**

 **#عقاب**

 **#كت تويت**

 **#خواطر**

 **#حب**
  
 **#عواصم**

 **#سرعة**

 **اوامر الميوزك|Music Commands**
 
 **#join**:**ليدخل البوت الروم**
 
 **#play**:**ليشغل اغنية**
  
 **#skip**:**ليتخطى عن الاغنية**
 
 **#vol**:**لرفع الصوت وخفضه**
  
 **#stop**:**لتتوقف الاغنية**
 
 **أخرى**
 
 **#support**:**سيرفر السبورت اصحاب البوت**
 
 **#invite**:**لدعوة البوت الى السيرفر**
       
         `)
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
                    embed.setDescription(`

       
       
╱╱╭╮╱╱╭╮╭╮╱╱╱╱╭━━╮╱╱╱╭╮
╱╱┃┃╱╱┃┃┃┃╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╱╱┃┣━━┫┃┃┃╭╮╱╭┫╰╯╰┳━┻╮╭╯
╭╮┃┃┃━┫┃┃┃┃┃╱┃┃╭━╮┃╭╮┃┃
┃╰╯┃┃━┫╰┫╰┫╰━╯┃╰━╯┃╰╯┃╰╮
╰━━┻━━┻━┻━┻━╮╭┻━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╱╭━╯┃╱╱╱╱╱╱╱╱╱╱
╱╱╱╱╱╱╱╱╱╱╰━━╯╱╱╱╱╱╱╱╱╱╱
 **اوامر الادارة|Administrator**

 **#kick**:**طرد العضو**

 **#ban**:**حظر العضو**

 **#mute**:**اعطاء ميوت للعضو**

 **#u**:**لتبليغ عن العضو**

 **#unmute**:**فك الميوت عن العضو**

 **#bc**:**ارسال رسالة للاعضاء فالخاص**
 
 **#clear**:**مسح الشات بالعدد**
 
 **#clearall**:**مسح خمسين رسالة**

 **#role**:**اعطاء شخص رتبة**
 
 **#roles**:**اظهار الرتب فالسيرفر**
 
 **#vc**:**لطرد الشخص من الروم الصوتي**

 **#رابط**                  

 

 **لشات اللوق اكتب اسم الشات **:**log
         `)
             msg.edit(embed)
        })
        })
    })
    }
});
    












  
  


client.on("message", (message) => {
if (message.content.startsWith("#ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});


client.on("message", (message) => {
if (message.content.startsWith("#cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});


client.on("message", (message) => {
    if (message.content.startsWith('#del')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});

client.on('message', message => {
if (message.content.startsWith(prefix + "000")) {
         if(!message.author.id === '287142980416962560') return;
var gimg;
var gname;
var gmemb;
var gbots;
var groles;
var servers = client.guilds;
servers.forEach((g)=>{
gname = g.name;
gimg = g.iconURL;
gmemb = g.members.size;
gbots = g.members.filter(m=>m.bot).size;
groles = g.roles.map(r=> {return r.name});
let serv = new Discord.RichEmbed()
.setAuthor(gname,gimg)
.setThumbnail(gimg)
.addField('Server bots',gbots)
.addField('Server Member Count',gmemb = g.members.size)
.setColor('RANDOM')
message.channel.send(`
Server Name : **${gname}**
Server MemberCount : **${gmemb} **
        `);
      message.channel.sendEmbed(serv);
}) 
}
});




 client.on('message', message => {
              if(!message.channel.guild) return;
    var prefix = "#";
    if(message.content.startsWith(prefix + 'bdc')) {
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
    
    
    
 




client.on('message', message => {
     if(message.content.startsWith(prefix +"bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`The ban count **${bans.size}** Person`))
  .catch(console.error);
}
});

client.on('message',function( m ){
    var args = m.content.split(' ');
    if( args[0] == 'setprefix' ){
        prefix = args[1];
    }
});


    




client.on("message", message => {
    var prefix = "#";
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










var prefix = '#'; // This is the prefix, you can change it to whatever you want.

// Listener Event: Runs whenever a message is received.
client.on('message', message => {

    // Variables - Variables make it easy to call things, since it requires less typing.
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let sender = message.author; // This variable takes the message, and finds who the author is.
    let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
    let args = cont.slice(1); // This slices off the command in cont, only leaving the arguments.

    // Commands

    // Weather Command - We're going to need a new package for this, so open up the console again.
    // Lets make a basic version of this, then make it look good.

    if (msg.startsWith(prefix + 'weather')) { // This checks to see if the beginning of the message is calling the weather command.
        // You can find some of the code used here on the weather-js npm page in the description.

        weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) { // Make sure you get that args.join part, since it adds everything after weather.
            if (err) console.log(err);

            // We also want them to know if a place they enter is invalid.
            if (result.length === 00) {
                message.channel.send('**Please enter a valid location.**') // This tells them in chat that the place they entered is invalid.
                return; // This exits the code so the rest doesn't run.
            }

            // Variables
            var current = result[0].current; // This is a variable for the current part of the JSON output
            var location = result[0].location; // This is a variable for the location part of the JSON output

            // Let's use an embed for this.
            const embed = new Discord.RichEmbed()
                .setDescription(`**${current.skytext}**`) // This is the text of what the sky looks like, remember you can find all of this on the weather-js npm page.
                .setAuthor(`Weather for ${current.observationpoint}`) // This shows the current location of the weather.
                .setThumbnail(current.imageUrl) // This sets the thumbnail of the embed
                .setColor(0x00AE86) // This sets the color of the embed, you can set this to anything if you look put a hex color picker, just make sure you put 0x infront of the hex
                .addField('Timezone',`UTC${location.timezone}`, true) // This is the first field, it shows the timezone, and the true means `inline`, you can read more about this on the official discord.js documentation
                .addField('Degree Type',location.degreetype, true)// This is the field that shows the degree type, and is inline
                .addField('Temperature',`${current.temperature} Degrees`, true)
                .addField('Feels Like', `${current.feelslike} Degrees`, true)
                .addField('Winds',current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true)

                // Now, let's display it when called
                message.channel.send({embed});
        });
    }

});














client.login(process.env.BOT_TOKEN);
