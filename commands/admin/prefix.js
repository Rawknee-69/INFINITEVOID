const { MessageEmbed } = require(`discord.js`);

module.exports = {
 name : `prefix`,
 aliases : ['setprefix','set-prefix'],
 arjunop : false,
 adminPermit : false,
 ownerPermit : false,
 cat : 'admin',
 run : async(client,message,args,prefix) => {
   if(!message.member.permissions.has(`MANAGE_GUILD`) && !message.member.permissions.has(`ADMINISTRATOR`)) return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | You require \`MANAGE_GUILD\` permissions to change guild prefix.`)]})

   if(!args[0]) {
       return message.channel.send({embeds : [new MessageEmbed().setDescription(`${client.emoji.info} | My prefix for the server is : \`${prefix}\``).setColor(`#2f3136`)]})
   }

   if(args[0].length > 3 || args[0] === '') {
       return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | You cannot set more than a triple argument as prefix.`)]})
   }

   if(args[1]) {
       return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | You cannot set 2nd args as prefix`)]})
   }

   if(args[0] === client.config.prefix){
       client.data.delete(`prefix_${message.guild.id}`);
       return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.tick} | SuccessFully Restted the guild prefix to - \`${client.config.prefix}\``)]})
   }

   client.data.set(`prefix_${message.guild.id}`,args[0]);
   return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.tick} | Guild prefix has been set to - \`${args[0]}\``)]})
 }
}
