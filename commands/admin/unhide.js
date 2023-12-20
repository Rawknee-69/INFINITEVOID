const { MessageEmbed } = require("discord.js");

module.exports = {
 name : `unhide`,
 aliases : ["unshow"],
 arjunop : false,
 ownerPermit : false,
 adminPermit : true,
 cat : 'admin',
 run : async(client,message,args,prefix) => {
 if(!message.guild.me.permissions.has("MANAGE_CHANNELS") && !message.guild.me.permissions.has("ADMINISTRATOR")) return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | I don't have adequate permissions.Please check my permissions.`)]})

 let ch = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

 try{
 ch.permissionOverwrites.edit(message.guild.id,{VIEW_CHANNEL : true}).then(x => {
 return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.tick} | SuccessFully **Unhided** ${ch} for <@&${message.guild.id}>`)]}); });
 } catch(e) { 
 return message.channel.send({embeds : [new MessageEmbed().setColor(`${client.emoji.cross} | I am missing adequate permissions.Please check my permissions.`)]})
 }
 }
}
