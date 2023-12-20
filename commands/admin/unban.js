const { MessageEmbed } = require("discord.js")

module.exports = {
 name : `unban`,
 aliases : ['ub'],
 arjunop : false,
 adminPermit : true,
 cat : 'admin',
 ownerPermit : false,
 run : async(client,message,args,prefix) => {
  if(!args[0]) {
      return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | Command Usage : \`${prefix}unban <user_id>\``)]})
  }

  if(!message.member.permissions.has(`MANAGE_GUILD`) && !message.member.permissions.has(`ADMINISTRATOR`)) return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | You require \`MANAGE_GUILD\` permissions to change guild prefix.`)]})

  const bans = await message.guild.bans.fetch().catch(error => {
      console.error(error);
      return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | An error occurred while trying to fetch bans.`)]});
  });

  let reason = args.slice(1).join(' ');
  if(!reason) reason = `No Reason given`;

  let user = bans.map(x => x.user).find(u => u.id === args[0]);

  if(!user){
      return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | I couldn't find that member in ban list.`)]})
  }

  message.guild.members.unban(user ? user.id : args[0],`${message.author.tag} | ${reason}`).catch(error => {
      console.error(error);
      return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | An error occurred while trying to unban the user.`)]});
  });

  return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.tick} | SuccessFully **Unbanned** ${user.tag} executed by : ${message.author.tag}\n${client.emoji.arrow} Reason : ${reason}`)]});
 }
}
