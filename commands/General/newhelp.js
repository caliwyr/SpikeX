const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "newhelp",
  description: "Shows all commands of the bot",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  ownerOnly: true,
  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("<:bluehearts:907958533675438111> Here are my commands")
      .setDescription("<a:YellowArrow:907968715738480660> ** *Uptimer* Is An Free Discord Bot That Allows You To Make Your Projects ( Bot ) Online 24/7 Just By Using A Single Command.**")
      .addField(
        "<a:admin:907969096996503582> **ADMIN**",
        "`ban` `unban` `kick` `addemoji`"
      )
      .addField(
        "<a:general:907956850610290698> **GENERAL**",
        "`servericon` `calculator` `invite` `membercount`"
      )
      .addField(
        "<a:Giveaway:907969496743026689> **GIVEAWAY**",
        "`gstart` `gend` `greroll`"
      )
      .addField(
        "<:info:907969678440267808> **INFO**",
        "`avatar` `report-bug` `developer` `help` `howtouse` `info` `serverinfo`"
      )
      .addField(
        "<:moderation:907969827073839124> **MODERATION**",
        "`lockchannel` `purge` `slowmode` `unlockchannel`"
      )
      .addField(
        "<:owner:907969959911645225> **OWNER**",
        "`eval` `reload` `serverlist`"
      )
      .addField(
        "<a:uptimer:908022746301210675> **UPTIME**",
        "`add` `calc` `ping` `projects` `remove` `stats` `total`"
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("BOT DEVELOPERS: Ashura#0464| Prefix: p!")

      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('❤️ Invite Me') 
      .setURL("https://discord.com/api/oauth2/authorize?client_id=872365081281826846&permissions=8&scope=bot");
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('❓ Support Server') 
      .setURL("https://discord.gg/GE4mHjJuYf");
      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('▶️ Tutorial Video') 
      .setURL("https://www.youtube.com/");


      return message.channel.send(helpEmbed,{
        button: [button1,button2,button3],
      });

  },
};