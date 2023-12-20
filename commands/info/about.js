const { MessageEmbed } = require("discord.js")

module.exports = {
    name : `about`,
    aliases : ['abo'],
    arjunop : false,
    adminPermit : false,
    ownerPermit : false,
    cat : 'info',
    run : async(client,message,args,prefix) => {
        let em = new MessageEmbed().setColor(`#2f3136`).setDescription(
            `__**What do I do?**__

            ${client.emoji.dot}\t**I Am A Highly Advanced, Multi-Purpose Bot Crafted By Rawknee.69 😎. I Possess The Abilities Needed To Safeguard Servers, Offering Protection Against Hackers, Attackers, And Ensuring They Remain Unscathed From Nuke Attacks And Other Threats.**

            ${client.emoji.dot}\tI Am Fulfilled With Robust Modules Designed To Safeguard Your Servers From Potential Nuke Attacks, Malicious Whizzes, Or Any Unwanted Intrusions.

            ${client.emoji.dot}\tI AM HERE TO PROTECT AND MAKE THIS SERVER A SUCCESSFUL AND PROVIDE BEST USER EXPERIENCE.

            ${client.emoji.arrow}\tHERE IS THE GUIDE TO USE ME - \`${prefix}help\`

            ${client.emoji.arrow}\tMy useful commands - \`${prefix}setup\` and \`${prefix}antinuke\` 
            `
        ).setAuthor({name : `| Hey There Buddies I am ${client.user.username}` , iconURL : client.user.displayAvatarURL()}).setThumbnail(client.user.displayAvatarURL({dynamic : true}))
        .addFields([
            {
                name : `**More Info**:`,
                value : `[**Support**](${client.config.support_server_link}) \n [**Invite**](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)`,
                inline : true
            }
        ]);

        return message.channel.send({embeds : [em]});
    }
}