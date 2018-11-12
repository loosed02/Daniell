const Discord = require('discord.js');

exports.run = async (member,message, args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor("Server Rules")
    .setDescription("Twitter: ``@TheOriginMc``\nWebsite: ``TheOriginMc.com``\nIP: ``TheOriginMc.com/Play.TheOriginMc.com``")
    .setColor("#55FFFF")
    .setTimestamp()
    .setFooter("THEORIGINMC.COM | Join today!")
    return message.channel.send(embed);
}