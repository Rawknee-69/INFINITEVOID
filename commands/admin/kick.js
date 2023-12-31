const { MessageEmbed } = require(`discord.js`);

module.exports = {
 name : `kick`,
 aliases : [""],
 adminPermit : true,
 ownerPermit : false,
 arjunop : false,
 cat : 'admin',
 run : async(client,message,args,prefix) => {
     if (!message.member.hasPermission('KICK_MEMBERS')) {
         return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | You do not have permission to kick someone.`)]});
     }

     if(!args[0]) {
         return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | Command Usage : \`${prefix}kick <user> [reason]\``)]});
     }

     let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
     if(!user) { return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | Please provide me a valid user.`)]}) }

     if(user.id === message.guild.ownerId) return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | You can't **Kick** Server Owner Dumb.`)]})
     if(client.config.owner.includes(user.id)) return message.channel.send({embeds : [ new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | I can't kick my owner.`)]})

     if(user.id === message.member.id) return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | You can't **Kick** Yourself.`)]})
     if(!user.kickable) return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | I can't **Kick** that user.Please check my role position and permissions.`)]})
     let reason = args.slice(1).join(' ');
     if(!reason) reason = `No Reason given`;

     message.guild.members.kick(user.id,{reason : `${message.author.tag} | ${reason}`}).then(() => {
         return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.tick} | SuccessFully **Kicked** ${user.user.tag} executed by : ${message.author.tag}\n${client.emoji.arrow} Reason : ${reason}`)]});
     }).catch((err) => {
         console.error(err);
         return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | An error occurred while trying to kick the user.`)]});
     });
 }
}
