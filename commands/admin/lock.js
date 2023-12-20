const { MessageEmbed } = require("discord.js");

module.exports = {
 name : `lock`,
 aliases : ["lockchannel","lock-channel","lockch"],
 arjunop : false,
 adminPermit : true,
 ownerPermit : false,
 cat : 'admin',
 run : async(client,message,args,prefix) => {
     if (!message.member.hasPermission('MANAGE_CHANNELS')) {
         return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | You do not have permission to manage channels.`)]});
     }

     let ch = message.mentions.channels.first() || client.channels.cache.get(args[0]);
     let ro = message.guild.id;

     ch.permissionOverwrites.edit(message.guild.id,{SEND_MESSAGES : false}).then(x => {
         return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.tick} | SuccessFully **Locked** ${ch} for <@&${ro}>`)]});
     }).catch(error => {
         console.error(error);
         return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | An error occurred while trying to lock the channel.`)]});
     });
 }
}
