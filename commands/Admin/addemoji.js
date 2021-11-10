const { Client, Message, Util, MessageEmbed } = require("discord.js")

module.exports = {
  name: "steal",
  aliases: ["addemoji"],
  usage: "steal emoji",
  description: "steals an emoji",
  run: async (client, message, args) => {
    const simplydjs = require('simply-djs')
    // message event
    // steal command
    if (!args[0]) {
      let embed1 = new MessageEmbed()
        .setTitle("<a:error:907951993614651483> Please Specify an Emoji To Steal! <a:error:907951993614651483>")
        .setFooter("BOT DEVELOPERS: Ashura#0464| Prefix: p!")
        message.channel.send(embed1)
    } else {
      let embed2 = new MessageEmbed()
        .setTitle("<a:success:907963383066816563> Emoji Succesfully Stolen! <a:success:907963383066816563>")
        .setFooter("BOT DEVELOPERS: Ashura#0464| Prefix: p!")
        
      simplydjs.stealEmoji(message, args, {
        embedTitle: 'Emoji Added ;)', // default: `Emoji Added ;)`
        embedColor: 'FF0000', //default: #075FFF;
        embedFoot: "BOT DEVELOPERS: Ashura#0464| Prefix: p!", // default: 'Stop stealing.. its illegal.'
        failedMsg: 'sorry emoji not found' //default: "Couldn't find an emoji from it"
      
      })
    }
  }
}
