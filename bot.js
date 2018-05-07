const Discord = require("discord.js");
const client = new Discord.Client({ fetchAllMembers: true });
const moment = require("moment");
//--------------------------------------------------------------------------

client.on('message', message => {
    if(message.content === prefix + 'help') {
        const embed = new Discord.RichEmbed()
        .setColor('#34495E')
        .setTitle('___Bull Commands___')
        .setDescription('**Adminstartion Commands**')
        .addField(prefix + 'Kick','**To kick someone out of your server with reason**')
        .addField(prefix + 'ban','**To ban someone out of your server with reason **')
        .addField(prefix + 'mute','**To mute someone (Requier Muted Role)**')
        .addField(prefix + 'unmute','**To remove the mute from someone (Requier Muted Role)**')
        .addField(prefix + 'vc','**To kick someone from voice channel**')
        .addField(prefix + 'clear','**To clear the chat**')
       .addField('<:checkmark:439800491644289024><a:blob:439807830586032138> have a good time')
	message.author.send({embed})
    }
});

//--------------------------------------------------------------------------

client.on('message', message => {
    var prefix = ".";
    if (message.content.startsWith(prefix + "bot")) {
        const embed = new Discord.RichEmbed()
            .setColor("#34495E")
            .setDescription(`**my servers**🌐 **__${client.guilds.size}__**
**Users Count**👥 **__${client.users.size}__**
**channels Count**📚 **__${client.channels.size}__** `)
     .setTimestamp();
     message.channel.sendEmbed(embed);

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
            .setColor('#34495E')
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
        if (message.mentions.users.size < 1) return message.reply("**Mention Someone**");
              message.delete();

        if (!reason) return message.reply("**Write the reason to kick**");
            message.delete();

    if (!message.guild.member(user)
            .kickable) return message.reply("**You Can't kick someone Bigger than me**");
        message.guild.member(user).kick();

        const kickembed = new Discord.RichEmbed()
            .setAuthor(`KICKED!`, user.displayAvatarURL)
            .setColor("#34495E")
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
        if (message.mentions.users.size < 1) return message.reply("**Mention Someone**");
              message.delete();
   if (!reason) return message.reply("**Write the reason to ban**");
        message.delete();

        if (!message.guild.member(user)
            .bannable) return message.reply("**You Can't ban someone Bigger than me**");

        message.guild.member(user).ban(7, user);

        const banembed = new Discord.RichEmbed()
            .setAuthor(`BANNED!`, user.displayAvatarURL)
            .setColor("#34495E")
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
            .setColor("#34495E")
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
            .setColor("#34495E")
            .setImage(message.guild.iconURL)
            .setURL(message.guild.iconrURL)
            .setTimestamp()
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
                        .setColor('#34495E')
                        .addField('`Time Taken`:',msg + " ms  ")
                        .addField('`Discord Api`:',api + " ms  ")
     .setTimestamp();
         message.channel.send({embed:embed});

                        }
                    });
//--------------------------------------------------------------------------
 client.on('message', message => {
    if(message.content.startsWith(prefix +"info")) {
        message.channel.send({
            embed: new Discord.RichEmbed()
                .setAuthor(client.user.username, client.user.avatarURL)
                .setThumbnail(client.user.avatarURL)
                .setColor('#34495E')
                .setTitle('``INFO BULL`` ')
                .addField('``Uptime``', [timeCon(process.uptime())], true)
                .addField('``My Ping``', [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
                .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
                .addField('``My Name``', `[ ${client.user.tag} ]`, true)
                .addField('``My ID``', `[ ${client.user.id} ]`, true)
                .addField('``My Prefix``', `[ . ]`, true)
                .addField('``My Language``', `[ Java Script ]`, true)
     })
    }
});                          

//-------------------------------------------------------------------------- LOG
client.on("roleCreate",  rc => {
const channel = rc.guild.channels.find("name", "log")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` - Role Create`)
  .setDescription(`A role Has been created \n Name : ${rc.name}`)
  .setColor(`#34495E`)
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
  .setColor(`#34495E`)
     .setTimestamp();
channel.sendEmbed(embed)
}
});                           
client.on('messageUpdate', (message, newMessage) => {
  if (message.content === newMessage.content) return;
  if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
  const channel = message.guild.channels.find('name', 'log');
  if (!channel) return;
  
  let embed = new Discord.RichEmbed()
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setColor('#34495E')
     .setDescription(`✏ **Message sent by <@${message.author.id}> edited in** <#${message.channel.id}>\n\nOld:\n \`${message.cleanContent}\`\n\nNew:\n \`${newMessage.cleanContent}\``)
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
     .setColor('#34495E')
     .setDescription(`🗑️ **Message sent by <@${message.author.id}> deleted in** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
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
     .setColor('#34495E')
     .setDescription(`📤 <@${member.user.id}> **left the server**\n\n **Had joined:** \n \`${fromNow}\``)
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
     .setColor('#34495E')
     .setDescription(`📥 <@${member.user.id}> **Joined the server**\n\n **Created:** \n \`${fromNow} ${isNew}\``)
     .setTimestamp();
   channel.send({embed:embed});
});                           
//--------------------------------------------------------------------------
client.on('message', message => {   
if (message.author.boss) return;
var prefix = ".";
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);
if (command == "mute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have Permissions !! ").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("the bot do not have Permissions ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** i don't find the  'Muted'role **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** You Should Mention someone first **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).addRole(muteRole);
const muteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`Muted!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  user**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  muted by **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  reson**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : muteembed});
var muteembeddm = new Discord.RichEmbed()
.setAuthor(`Muted!`, user.displayAvatarURL)
.setDescription(`
${user}  

 ${message.author.tag} you have been muted by

[ ${reason} ] : reason

if this mute by mistake contact Admin
`)
.setFooter(`on server : ${message.guild.name}`)
.setColor("RANDOM")
 user.send( muteembeddm);
}
if (command == "unmute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have Permissions").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("the bot do not have Permissions ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** i don't find the  'Muted'role **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** You Should Mention someone first**').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).removeRole(muteRole);
const unmuteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  user**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:   muted by**", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  reason**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : unmuteembed}).then(msg => msg.delete(5000));
var unmuteembeddm = new Discord.RichEmbed()
.setDescription(`Mute has been decomposed of you ${user}`)
.setAuthor(`UnMute!`, user.displayAvatarURL)
  user.send( unmuteembeddm);
}
});                           
//--------------------------------------------------------------------------
client.on('message', message => {
    var prefix = "."
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
//--------------------------------------------------------------------------
var roles = {}; 
var prefix = '.'; 
var token = "";


 
client.on("message", message => {
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**Sorry,You do not have permission** `ADMINISTRATOR`<:xx123:439800927457640448>' );
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**Sorry,You do not have permission** `ADMINISTRATOR`' );
		if( !args[0] ) return message.reply( '**<:xx123:439800927457640448> Please place the role to be withdrawn from the person**' );
		if( !args[1] ) return message.reply( '**<:xx123:439800927457640448> Please place the role to be withdrawn from the person**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**<:xx123:439800927457640448> Please place the role to be withdrawn from the person**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('** <:checkmark:439800491644289024> [ '+role1.name+' ] role [ '+args[0]+' ] removed from **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('** <:checkmark:439800491644289024> [ '+role1.name+' ] the role removed from all Members**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('** <:checkmark:439800491644289024> [ '+role1.name+' ] the role removed from all bots**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('** <:checkmark:439800491644289024> [ '+role1.name+' ] the role removed from all humans**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**<:xx123:439800927457640448> Please mention the person to be given the role**' );
		if( !args[1] ) return message.reply( '**<:xx123:439800927457640448> Please mention the person to be given the role**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**<:xx123:439800927457640448> Please specify the role to be given to the person**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('** <:checkmark:439800491644289024> [ '+role1.name+' ] role [ '+args[0]+' ] Was given **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('** <:checkmark:439800491644289024> [ '+role1.name+' ] All role was given**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('** <:checkmark:439800491644289024> [ '+role1.name+' ]  The role bots were given**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('** <:checkmark:439800491644289024> [ '+role1.name+' ] The role humans were given**');
		} 
	} 
});                           











//--------------------------------------------------------------------------
client.on('message', message => {
    if (message.content.startsWith(prefix + 'roles')) {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('#34495E')
        .addField('Roles:',`**[${roles}]**`)
 
       message.channel.sendEmbed(embed);
    }
});                                                                                                   
//------------------------------------------------------------------------
client.on('message', message => {

           if (message.content.startsWith(prefix + "id")) {

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
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
       
    .setColor("#34495E")
    .setAuthor(message.author.username, message.author.avatarURL) 
.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField("Name",                              `** ${message.author.username}**`, true)
.addField("#",                                 `${message.author.discriminator} `, true)
.addField(': عدد الدعوات',                         inviteCount,false)
    message.channel.sendEmbed(id);
})
}
    

         
     });
//------------------------------------------------------------------------
pretty = require('pretty-ms')
,tamp={};

client.on('message', Mess => {
    if(!Mess.guild) return;
    let id = Mess.author.id,prefix=".";
    if (tamp[id] && (new Date).getTime() - tamp[id] < 60*1000) {
        let r = (new Date).getTime() - tamp[id];
        r = 60*1000 - r;
    Mess.reply(` **Sorry, wait ${pretty(r, {verbose:true})}**<a:loading:439807730564464659>`);
    return;
    }
    if ( Mess.content == prefix+'رابط'){
        try{
        Mess.channel.createInvite({maxAge: 86400 }).then(invite => {
        Mess.member.send(invite.url);
        Mess.reply(` **Done, check your DM**<:checkmark:439800491644289024>.`).then(()=> tamp[id] = (new Date).getTime());
        });
        } catch(e){
            console.log(e);
        }
        

    }
});






//------------------------------------------------------------------------                           
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
  title: "<:checkmark:439800491644289024>",

  color: 0x34495E,
  footer:{
     
  
      
  }
  }}).then(msg => {msg.delete(3000)});
};

});                           
//------------------------------------------------------------------------                           
const child_process = require("child_process");
const adminprefix = ".";
const devs = ['426471752877604874'];

client.on('message', message => {
if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`⚠️ **Done ${message.author.username}**`);
        console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`تم اعادة تشغيل البوت`);
    }
  
  });
                           
const arraySort = require('array-sort'),
      table = require('table');

client.on('message' , async (message) => {

    if(message.content.startsWith(prefix + "top")) {

  let invites = await message.guild.fetchInvites();

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });

    let possibleInvites = [['User', 'Uses']];
    invites.forEach(i => {
      possibleInvites.push([i.inviter.username , i.uses]);
    })
    const embed = new Discord.RichEmbed()
    .setColor(0x7289da)
    .setTitle("Invites")
    .addField(' Top !' , `\`\`\`${table.table(possibleInvites)}\`\`\``)

    message.channel.send(embed)
    }
});                           
                           
client.login(process.env.BOT_TOKEN);
