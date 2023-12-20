const { Permissions, MessageEmbed } = require(`discord.js`);

module.exports = {
 name : `unlock`,
 aliases : ["unlockchannel","unlockch"],
 arjunop : false,
 adminPermit : true,
 ownerPermit : false,
 cat : 'admin',
 run : async(client,message,args,prefix) => {
 if(!message.guild.members.me.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS) && !message.guild.members.me.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | I don't have adequate permissions.Please check my permissions.`)]})

 let ch = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

 try{
 ch.permissionOverwrites.edit(message.guild.id,{SEND_MESSAGES : true}).then(x => {
 return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.tick} | SuccessFully **Unlocked** ${ch} for <@&${message.guild.id}>`)]}); });
 } catch(e) { 
 return message.channel.send({embeds : [new MessageEmbed().setColor(`${client.emoji.cross} | I am missing adequate permissions.Please check my permissions.`)]})
 }
 }
}
