const { Permissions, MessageEmbed } = require("discord.js")

module.exports = {
 name : `lockall`,
 aliases : ['lockserver','lockdown'],
 arjunop : false,
 adminPermit : true,
 cat : 'admin',
 ownerPermit : false,
 run : async(client,message,args,prefix) => {
    if(!message.guild.members.me.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return message.channel.send({embeds : [
        new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | I don't have adequate permissions.Please check my permissions`)
    ]});

    let count = 0;
    let totalChannels = message.guild.channels.cache.size;
    message.guild.channels.cache.forEach(c => {
        c.permissionOverwrites.edit(message.guild.id,{SEND_MESSAGES : false}).catch(error => {
            console.error(error);
        });
        count++;
    });

    if (count !== totalChannels) {
        return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.cross} | An error occurred while trying to lock all channels.`)]});
    }

    return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.emoji.tick} | SuccessFully **Locked** ${count} channels.`)]})
 }
}
