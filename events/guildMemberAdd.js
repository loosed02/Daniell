const Discord = require('discord.js');
const db = require('../lib/zeke.db');

exports.run = async(client, member, message) => {
    var embed = new Discord.RichEmbed()
    .setAuthor("Member Joined!")
    .setDescription(`Welcome ${member.user.username} to the server!`);
    var prefixess = new db.table('WelcomeMessages')
    let fetched = await prefixess.fetch(`p_${member.guild.id}`);
    if (fetched == null) fetched = `Welcome %player% to the server!`;
    var newstr = fetched.replace(/%player%/i, `${member.user}`);
    var serverChannelModeration = new db.table('JoinChannels');
    (member.guild.channels.get(serverChannelModeration.get(`p_${member.guild.id}`)) || member.channel).send(newstr);
}
