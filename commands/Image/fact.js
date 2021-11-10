const { MessageEmbed } = require('discord.js');
const Random = require("srod-v2");
const disbut = require("discord-buttons")
let commenthelp = new disbut.MessageButton()
  .setStyle('blurple')
  .setLabel('Help Menu')
  .setEmoji("904658953491845130")
  .setID("commenthelp");
module.exports = {
    name: 'fact',
    category: 'fun',
    description: 'Shows some cool fact',
    usage: 'fact',
    aliases: [''],
    run: async(bot, message, args) => {
       let data = await Random.GetFact();
       message.channel.send(data);
    }
};