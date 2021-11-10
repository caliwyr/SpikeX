const simplydjs = require('simply-djs')
const Discord = require("discord.js")

module.exports = {
  name: "help",
  aliases: [""],
  usage: "unban",
  description: "unbans member",


  run: async (client, message, args) => {
    let embed1 = new Discord.MessageEmbed()
      .setTitle('** <:redheart:907965588360540161> Help Panel <:redheart:907965588360540161>**')
      .setDescription('<:redbullet:907966023200825414> ** *Pequin*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "<a:uptimer:908022746301210675> COMMAND CATEGORIES",
        "**<:redheart:907965588360540161> ADMIN\n<:redheart:907965588360540161> GENERAL\n<:redheart:907965588360540161> GIVEAWAY\n<:redheart:907965588360540161> INFO\n<:redheart:907965588360540161> IMAGE\n<:redheart:907965588360540161> MODERATION\n<:redheart:907965588360540161> OWNER\n<:redheart:907965588360540161> FUN\n<:redheart:907965588360540161> UPTIMER**")
      .setThumbnail("https://cdn.discordapp.com/avatars/872021217157193729/73768354b2fa3533939460e5f97970dc.webp?size=1024")
      .setImage('https://cdn.discordapp.com/attachments/876151387459846145/876689128585039932/standard.gif')
      .setFooter('Bot Made By Ashura#0464 | Prefix: p!')

    let embed2 = new Discord.MessageEmbed()
      .setTitle('** <:redheart:907965588360540161> Help Panel <:redheart:907965588360540161>**')
      .setDescription('<:redbullet:907966023200825414> ** *Pequin*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "<a:uptimer:908022746301210675> MODERATION",
        "`ban` `unban` `kick` `addemoji` `addrole` `removerole` `announce` `setnick` `resetnick` `ticket` `lockchannel` `purge` `slowmode` `mute` `unmute` `nuke` `resetwarns` `warn` `warnings`")
      .setThumbnail("https://cdn.discordapp.com/avatars/872021217157193729/73768354b2fa3533939460e5f97970dc.webp?size=1024")
      .setImage('https://cdn.discordapp.com/attachments/876151387459846145/876689128585039932/standard.gif')
      .setFooter('Bot Made By Ashura#0464 | Prefix: p!')
    let embed3 = new Discord.MessageEmbed()
      .setTitle('** <:redheart:907965588360540161> Help Panel <:redheart:907965588360540161>**')
      .setDescription('<:redbullet:907966023200825414> ** *Pequin*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "<a:uptimer:908022746301210675> GENERAL",
        "`servericon` `calculator` `invite` `membercount` `help` `serverinfo` `leaderboard`")
      .setThumbnail("https://cdn.discordapp.com/avatars/872021217157193729/73768354b2fa3533939460e5f97970dc.webp?size=1024")
      .setImage('https://cdn.discordapp.com/attachments/876151387459846145/876689128585039932/standard.gif')
      .setFooter('Bot Made By Ashura#0464 | Prefix: p!')
    let embed4 = new Discord.MessageEmbed()
      .setTitle('** <:redheart:907965588360540161> Help Panel <:redheart:907965588360540161>**')
      .setDescription('<:redbullet:907966023200825414> ** *Pequin*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "<a:uptimer:908022746301210675> GIVEAWAY",
        "`gstart` `gend` `greroll`")
      .setThumbnail("https://cdn.discordapp.com/avatars/872021217157193729/73768354b2fa3533939460e5f97970dc.webp?size=1024")
      .setImage('https://cdn.discordapp.com/attachments/876151387459846145/876689128585039932/standard.gif')
      .setFooter('Bot Made By Ashura#0464 | Prefix: p!')
    let embed5 = new Discord.MessageEmbed()
      .setTitle('** <:redheart:907965588360540161> Help Panel <:redheart:907965588360540161>**')
      .setDescription('<:redbullet:907966023200825414> ** *Pequin*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "<a:uptimer:908022746301210675> INFO",
        "`avatar` `bug-report` `feedback` `developer` `help` `howtouse` `info` `serverinfo` `position` `urban` `weather` `status` `channelinfo` `rolememberinfo`")
      .setThumbnail("https://cdn.discordapp.com/avatars/872021217157193729/73768354b2fa3533939460e5f97970dc.webp?size=1024")
      .setImage('https://cdn.discordapp.com/attachments/876151387459846145/876689128585039932/standard.gif')
      .setFooter('Bot Made By Ashura#0464 | Prefix: p!')
    let embed6 = new Discord.MessageEmbed()
      .setTitle('** <:redheart:907965588360540161> Help Panel <:redheart:907965588360540161>**')
      .setDescription('<:redbullet:907966023200825414> ** *Pequin*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "<a:uptimer:908022746301210675> IMAGE",
        "`tweet` `deepfry` `eject` `meme` `kangaroo` `dog` `cat` `changemymind` `fire` `respect` `scary`")
      .setThumbnail("https://cdn.discordapp.com/avatars/872021217157193729/73768354b2fa3533939460e5f97970dc.webp?size=1024")
      .setImage('https://cdn.discordapp.com/attachments/876151387459846145/876689128585039932/standard.gif')
      .setFooter('Bot Made By Ashura#0464 | Prefix: p!')
    let embed7 = new Discord.MessageEmbed()
      .setTitle('** <:redheart:907965588360540161> Help Panel <:redheart:907965588360540161>**')
      .setDescription('<:redbullet:907966023200825414> ** *Pequin*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "<a:uptimer:908022746301210675> FUN",
        "`rps` `coinflip` `meme` `reverse` `hangman` `tictactoe` `trivia` `fact` `Shuffle-guess`")
      .setThumbnail("https://cdn.discordapp.com/avatars/872021217157193729/73768354b2fa3533939460e5f97970dc.webp?size=1024")
      .setImage('https://cdn.discordapp.com/attachments/876151387459846145/876689128585039932/standard.gif')
      .setFooter('Bot Made By Ashura#0464 | Prefix: p!')
    let embed8 = new Discord.MessageEmbed()
      .setTitle('** <:redheart:907965588360540161> Help Panel <:redheart:907965588360540161>**')
      .setDescription('<:redbullet:907966023200825414> ** *Pequin*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "<a:uptimer:908022746301210675> UPTIME",
        "`add` `calc` `ping` `projects` `remove` `stats` `total`")
      .setThumbnail("https://cdn.discordapp.com/avatars/872021217157193729/73768354b2fa3533939460e5f97970dc.webp?size=1024")
      .setImage('https://cdn.discordapp.com/attachments/876151387459846145/876689128585039932/standard.gif')
      .setFooter('Bot Made By Ashura#0464 | Prefix: p!')
    



    let pages = [embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8] // REQUIRED

    // its still possible without embed
    // let pages = ['page1', 'page2', 'page3']

    simplydjs.embedPages(client, message, pages, {
      firstEmoji: '907966957742075954', // default: ⏪
      backEmoji: '907967205013082123', // default: ◀️
      delEmoji: '907967402254422056', // default: 🗑️
      forwardEmoji: '907967649533808691', // default: ▶️
      lastEmoji: '907967790873444362', // default: ⏩

      btncolor: 'grey', // default: green 
      delcolor: 'red', // default: red
      skipcolor: 'grey', // default: blurple
      // Colors that discord-buttons support. like red, blurple, grey, green

      skipBtn: true,
    })
  }
}
