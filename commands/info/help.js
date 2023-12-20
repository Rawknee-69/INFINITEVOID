const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require("discord.js");

module.exports = {
  name : `help`,
  aliases : ['h'],
  arjunop : false,
  adminPermit : false,
  ownerPermit : false,
  cat : 'info',
  run : async(client,message,args,prefix) => {
      let em = new MessageEmbed().setColor(`#2f3136`).setAuthor({name : `${client.user.username} Help Panel` , iconURL : client.user.displayAvatarURL()}).setDescription(
          `Hey ${message.author} It's ${client.user.username} here
          You are in front of my Help Menu!
          [Invite](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands) | [Support](${client.config.support_server_link})`
      ).addFields([
          {name : `Choose Categories Below` , value : `🔒 \`:\` Security \n 👑 \`:\` Admin \n ℹ️ \`:\` Information \n 🧰 \`:\` Utility \n 👑 \`:\` Owner`}
      ]).setThumbnail(message.author.displayAvatarURL({dynamic : true})).setFooter({text : `Just A Powerful Discord bot with some DARK INFINITY VOID POWERS 👻)` , iconURL : message.guild.iconURL({dynamic : true})});

      let r1 = new MessageActionRow().addComponents(
          new MessageSelectMenu().setCustomId(`he`).addOptions([
              {
                label : `Home`,
                emoji : `🏠`,
                value : `h1`,
                description : `Takes you to the main page`
              },
              {
                label : `Security`,
                emoji : `🔒`,
                value : `h2`,
                description : `Shows Antinuke and Security Commands`
              },
              {
                label : `Admin`,
                emoji : `👑`,
                value : `h3`,
                description : `Shows the Administrator Commands`
              },
              {
                label : `Information`,
                emoji : `ℹ️`,
                value : `h5`,
                description : `Shows the bot Information Commands`
              },
              {
                label : `Utility`,
                emoji : `🧰`,
                value : `h6`,
                description : `Shows the utility commands`
              },
              {
                label : `Owner`,
                emoji : `👑`,
                value : `h7`,
                description : `Shows the Bot Owner Commands`
              }
          ])
      );

      let r2 = new MessageActionRow().addComponents(
          new MessageButton().setStyle(`PRIMARY`).setCustomId(`lol1`).setEmoji(`⬅️`),
          new MessageButton().setStyle(`SECONDARY`).setCustomId(`lol2`).setEmoji(`⬅️`),
          new MessageButton().setStyle(`DANGER`).setCustomId(`lol3`).setEmoji(`🏠`),
          new MessageButton().setStyle(`SECONDARY`).setCustomId(`lol4`).setEmoji(`➡️`),
          new MessageButton().setStyle(`PRIMARY`).setCustomId(`lol5`).setEmoji(`➡️`)
      );

      let msg = await message.channel.send({embeds : [em] , components : [r2,r1]});
      let page = 0;

      let embed1 = new MessageEmbed().setColor(`#2f3136`).addFields({name : `Security Commands` , value : `${client.commands.filter(x => x.cat && x.cat === `security`).map(x => `\`${x.name}\``).sort().join(', ')}`}).setAuthor({name : `| Security Commands` , iconURL : client.user.displayAvatarURL()})
      let embed2 = new MessageEmbed().setColor(`#2f3136`).addFields({name : `Admin Commands` , value : `${client.commands.filter(x => x.cat && x.cat === `admin`).map(x => `\`${x.name}\``).sort().join(', ')}`}).setAuthor({name : `| Admin Commands` , iconURL : client.user.displayAvatarURL()})
      let embed3 = new MessageEmbed().setColor(`#2f3136`).addFields({name : `Information Commands` , value : `${client.commands.filter(x => x.cat && x.cat === `info`).map(x => `\`${x.name}\``).sort().join(', ')}`}).setAuthor({name : `| Information Commands` , iconURL : client.user.displayAvatarURL()})
      let embed4 = new MessageEmbed().setColor(`#2f3136`).addFields({name : `Utility Commands` , value : `${client.commands.filter(x => x.cat && x.cat === `util`).map(x => `\`${x.name}\``).sort().join(', ')}`}).setAuthor({name : `| Utility Commands` , iconURL : client.user.displayAvatarURL()})
      let embed5 = new MessageEmbed().setColor(`#2f3136`).addFields({name : `Owner Commands` , value : `${client.commands.filter(x => x.cat && x.cat === `arjun`).map(x => `\`${x.name}\``).sort().join(', ')}`}).setAuthor({name : `| Owner Commands` , iconURL : client.user.displayAvatarURL()})
      var embeds = [];
      embeds.push(embed1);embed2;embed3;embed4;embed5;
      let collector = msg.createMessageComponentCollector({componentType: 'SELECT_MENU'});

      collector.on('collect', async(interaction) => {
          if(interaction.isSelectMenu()) {
              let value = interaction.values[0];
              if(value === `h1`) {
                 let em = new MessageEmbed().setColor(`#2f3136`).setAuthor({name : `${client.user.username} Help Panel` , iconURL : client.user.displayAvatarURL()}).setDescription(
                     `Hey ${interaction.member} It's ${client.user.username} here
                     You are in front of my Help Menu!
                     Basically I am a security bot to secure your \n servers with powerful modules
                     [Invite](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands) | [Support](${client.config.support_server_link})`
                 ).addFields([
                     {name : `Choose Categories Below` , value : `🔒 \`:\` Security \n 👑 \`:\` Admin \n ℹ️ \`:\` Information \n 🧰 \`:\` Utility \n 👑 \`:\` Owner`}
                 ]).setThumbnail(interaction.user.displayAvatarURL({dynamic : true})).setFooter({text : `Just A Powerful Discord bot` , iconURL : interaction.guild.iconURL({dynamic : true})});
                 return interaction.update({embeds : [em]});
              }
              if(value === `h2`) {
                 return interaction.update({embeds : [embed1]});
              }
              if(value === `h3`) {
                 return interaction.update({embeds : [embed2]});
              }
              if(value === `h5`) {
                 return interaction.update({embeds : [embed3]});
              }
              if(value === `h6`) {
                 return interaction.update({embeds : [embed4]});
              }
              if(value === `h7`) {
                 return interaction.update({embeds : [embed5]});
              }
          }
          if(interaction.isButton()) {
              if(interaction.customId === `lol4`) {
                 page = page + 1 < embeds.length ? ++page : 0;
                 return interaction.update({embeds : [embeds[page]]});
              }
              if(interaction.customId === `lol5`) {
                 page = page + 1 < embeds.length ? ++page : 0;
                 page = page + 1 < embeds.length ? ++page : 0;
                 return interaction.update({embeds : [embeds[page]]});
              }
              if(interaction.customId === `lol3`) {
                 return interaction.update({embeds : [em]})
              }
              if(interaction.customId === `lol2`) {
                 page = page > 0 ? --page : embeds.length - 1;
                 return interaction.update({embeds : [embeds[page]]});
              }
              if(interaction.customId === `lol1`) {
                 page = page > 0 ? --page : embeds.length - 1;
                 page = page > 0 ? --page : embeds.length - 1;
                 return interaction.update({embeds : [embeds[page]]})
              }
          }
      });

      collector.on('end', async() => {
          msg.edit({embeds : [em] , components : [] , content : `${client.emoji.info} | Help Query Got Timed Out!`})
      });
  }
 }