const { Permissions, MessageEmbed } = require("discord.js")

module.exports = {
 name : `unhideall`,
 aliases : [''],
 arjunop : false,
 adminPermit : true,
 cat : 'admin',
 ownerPermit : false,
 run : async(client,message,args,prefix) => {
 if(!message.guild.members.me.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS) && !message.guild.members.me.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | I don't have adequate permissions.Please check my permissions.`)]})

 let count = 0;
 message.guild.channels.cache.forEach(ch => {
    ch.permissionOverwrites.edit(message.guild.id,{VIEW_CHANNEL : true}).catch(error => {
        console.error(error);
    });
    count++
 });
 return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.tick} | SuccessFully **Unhided** ${count} channels.`)]})
 }
}
