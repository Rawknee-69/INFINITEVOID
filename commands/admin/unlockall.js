const { Permissions, MessageEmbed } = require("discord.js")

module.exports = { 
   name : `unlockall`,
   aliases : [],
   arjunop : false,
   adminPermit : true,
   ownerPermit : false,
   cat : 'admin',
   run : async(client,message,args,prefix) => {
 if(!message.guild.members.me.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS) && !message.guild.members.me.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | I don't have adequate permissions.Please check my permissions.`)]})

 let c = 0;
 message.guild.channels.cache.forEach(ch => {
   ch.permissionOverwrites.edit(message.guild.id,{SEND_MESSAGES : true}).catch(error => {
       console.error(error);
   });
   c++;
 });
 return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.tick} | SuccessFully **Unlocked** ${c} Channels.`)]})
 }
}
