const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "oldiehelp",
  description: "Shows all commands of the bot",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  aliases: ["newhelp"],
  ownerOnly: false,
  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("<a:bluehearts:907958533675438111> Here are my commands")
      .setDescription("<a:yellowarrow:873996169880162335> ** *Uptimer* Is An Free Discord Bot That Allows You To Make Your Projects ( Bot ) Online 24/7 Just By Using A Single Command.**")
      .addField(
        "<a:admin:907969096996503582> **ADMIN**",
        "`ban` `unban` `kick` `addemoji` `addrole` `removerole` `announce` `setnick` `resetnick` `ticket`"
      )
      .addField(
        "<a:general:907956850610290698> **GENERAL**",
        "`servericon` `calculator` `invite` `membercount` `help` `serverinfo` `leaderboard` "
      )
      .addField(
        "<a:Giveaway:907969496743026689> **GIVEAWAY**",
        "`gstart` `gend` `greroll`"
      )
      .addField(
        "<:info:907969678440267808> **INFO**",
        "`avatar` `bug-report` `feedback` `developer` `help` `howtouse` `info` `serverinfo` `position` `urban` `weather` `status` `channelinfo` `rolememberinfo` "
      )
      .addField(
        "<:image:907971018046455818> **IMAGE**",
        "`tweet` `deepfry` `eject` `meme` `kangaroo` `dog` `cat` `changemymind` `fire` `respect` `scary` "
      )
      .addField(
        "<:moderation:907969827073839124> **MODERATION**",
        "`lockchannel` `purge` `slowmode` `mute` `unmute` `nuke`"
      )
      .addField(
        "<:owner:907969959911645225> **OWNER**",
        "`eval` `reload` `serverlist` `test1`"
      )
      .addField(
        "<:fun:907970916733046794> **FUN**",
        "`rps` `coinflip` `meme` `reverse` `hangman` `tictactoe` `trivia` `fact` `Shuffle-guess` "
      )
      .addField(
        "<a:uptimer:876630668044533820> **UPTIME**",
        "`add` `calc` `ping` `projects` `remove` `stats` `total`"
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("BOT DEVELOPERS: Ashura#0464 | Prefix: p!")

      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel(' • Invite Me') 
      .setEmoji("907958533675438111")
      .setURL("https://discord.com/api/oauth2/authorize?client_id=872365081281826846&permissions=8&scope=bot");
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setEmoji('907959049113436200')
      .setLabel(' • Support Server') 
      .setURL("https://discord.gg/GE4mHjJuYf");
      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setEmoji('889437206362607656')
      .setLabel(' • Tutorial Video') 
      .setURL("https://www.youtube.com/");


      return message.channel.send(helpEmbed,{
        button: [button1,button2,button3],
      });

  },
};