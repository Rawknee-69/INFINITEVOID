const { MessageActionRow , MessageButton , MessageEmbed } = require(`discord.js`);

module.exports = {
    name : "setup",
    aliases : [],
    cat : 'security',
    ownerPermit : false,
    adminPermit : false,
    run : async(client,message,args,prefix) => {
        var ans;
        let data = await client.data2.get(`setup_${message.guild.id}`);
        if(!data) await client.data2.set(`setup_${message.guild.id}`,`none`);
        if(data == "beast") ans = `Beast Mode`;
        if(data == "none") ans = `None`;
        if(data == "secure") ans = `Secure Mode`;
        let em = new MessageEmbed().setColor(`#2f3136`).setDescription(
            `**Current setup mode is set to - \`${ans}\`**
            
            ${client.emoji.dot} __**Secure Mode**__ ?
            Secure Mode is the safer mode to secure your server using **Quarantine System**
            1. It operates the offender by **Quarantaining** them and if they even tries to do some mischief admins are there to kick them :).
            2. It don't removes the offender from the user until they are out of quarantine.
            
            ${client.emoji.dot} __**Beast Mode**__ ?
            Beast Mode is powerful mode to secure your server using **SUPER INFINITY VOID POWERS ;)**
            1. It operates the offender by **Banning** IT HAS THE MOST AGGRESSION ,WELL I CANT DO ANYTHING THE DEV WAS SO FUC**** MAKING ME HE THOUGHT OF SOME MISCHIEF AND HERE IS THE RESULT (:;).
            2. It bans the offender by SUPER INFINITY VOID POWERS π;.`
        ).setFooter({text : `IT IS RECOMMENDED TO USE OUR BEAST MODE. FOR THE BEST SECURITY.`}).setAuthor({name : `| ${client.user.username.toUpperCase()} SETUP` , iconURL : message.guild.iconURL({dynamic : true})})
        let ok = new MessageActionRow().addComponents(
            new MessageButton().setStyle("SUCCESS").setLabel(`Secure Mode`).setCustomId(`secure`),
            new MessageButton().setStyle("DANGER").setLabel(`Beast Mode`).setCustomId(`beast`),
            new MessageButton().setStyle("SECONDARY").setCustomId(`no`).setLabel(`None`)
        );
        
        return message.channel.send({embeds : [em] , components : [ok]});
    }
}