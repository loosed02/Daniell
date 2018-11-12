const Discord = require('discord.js');

exports.run = (client, message) => {
    if(message.guild.roles.get("264410914592129025"));
    const members = message.guild.members.filter(member => member.displayName && /(discord\.(gg|io|me|li)\/.+|discordapp\.com\/invite\/.+)/i.test(member.displayName));
    const error1 = new Discord.RichEmbed()
    .setAuthor("Nickname checking..")
    .setColor("#55FFFF")
    .setDescription(members.map(member => `\`${member.id}\` ${member.displayName}`).join('\n') || 'Currently no one has a nicked name as a Discord invite!')
    .setFooter("TheOriginMC | Version 1.0.0");  
     return message.channel.send(error1);
  };