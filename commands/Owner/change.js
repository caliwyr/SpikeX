const { Discord, MessageEmbed } = require("discord.js");
const ownerid = "855595858954027049";
const disbut = require("discord-buttons");

module.exports = {
  name: "change",
  aliases: [""],
  category: "owner",
  description: "",
  usage: " ",

  run: async (bot, message, args) => {
    if (message.author.id == ownerid) {
      let embed = new MessageEmbed()
        .setFooter("Bot Developer: Ashura#0464 | Prefix : p!")
        .setTitle("<a:general:907956850610290698> **New Discord Changes Incoming!** <a:general:907956850610290698> ")
        .setDescription("There are some new changes about Discord Server Boosting Coming up!\nThese Changes include:\n> Tier 2 Boosts = 7 boosts instead of 15\n> Tier 3 Boosts = 14 Boosts instead of 30.")
        .addField(
          "<a:offline:907957070895128626> DISCLAIMER<a:offline:907957070895128626> ",
          "These Changes are Still Being Tested and Are Not 100% Confirmed Yet!"
        )
        .setThumbnail("https://cdn.discordapp.com/avatars/872021217157193729/73768354b2fa3533939460e5f97970dc.webp?size=1024")
        .setImage("https://cdn.discordapp.com/attachments/876151387459846145/876689128585039932/standard.gif")
      let button1 = new disbut.MessageButton()
        .setStyle('url')
        .setLabel(' • Invite Me')
        .setEmoji("907958533675438111")
        .setURL("https://discord.com/api/oauth2/authorize?client_id=876690046487498752&permissions=8&scope=bot");
      let button2 = new disbut.MessageButton()
        .setStyle('url')
        .setEmoji('907959049113436200')
        .setLabel(' • Support Server')
        .setURL("https://discord.gg/KRHRYJvEtX");
      let button3 = new disbut.MessageButton()
        .setStyle('url')
        .setEmoji('889437206362607656')
        .setLabel(' • Tutorial Video')
        .setURL("https://www.youtube.com/");


      return message.channel.send(embed, {
        button: [button1, button2, button3],
      });
      message.channel.send(embed)

    } else {
      message.channel.send("Only Owner May Use This Command!")
    }
  }
};  