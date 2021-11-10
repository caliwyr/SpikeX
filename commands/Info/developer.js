const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "developer",
  description: "Shows all commands of the bot",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  aliases: ["newhelp"],
  ownerOnly: false,
  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("<a:A_emoji:907974898272567306> <a:S_emoji:907974919126646794> <a:H_emoji:907974938336583710> <a:U_emoji:907974958947401728> <a:R_emoji:907974975749771274> <a:A_emoji:907974898272567306>")
      
      .addField(
        "About Me:",
        "Hi I am akg! I am a bot developer who codes in node.js! I have been coding since June of 2021. Some of my hobbies are playing basketball, playing video games and coding! ",
      )
      .setThumbnail("https://cdn.discordapp.com/avatars/855595858954027049/a_8fa475df0c9bce7f89744cf37ba9d396.gif?size=1024")
      .setFooter("Make sure to show your support by subbing to my youtube(linked below)! If you have any questions about the bot, join support server linked below or send me a DM at Ashura#0464! ")

      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('💞 • Invite Me') 
      .setURL("https://discord.com/api/oauth2/authorize?client_id=872365081281826846&permissions=8&scope=bot");
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🤔 • Support Server') 
      .setURL("https://discord.gg/GE4mHjJuYf");
      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🎬 • Youtube Channel') 
      .setURL("https://www.youtube.com/channel/UCAtfolySyoNksk93rgMmAyA");



      return message.channel.send(helpEmbed,{
        button: [button1,button2,button3],
      });

  },
};