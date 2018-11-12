const Discord = require("discord.js");
const db = require('../../lib/zeke.db');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '186244786649432065') {
        let errorEmbed = new Discord.RichEmbed()
            .setAuthor('No Permissions', 'https://i.imgur.com/nNJ1qQM.png')
            .setDescription(`<@${sender.id}>, you do not have permission to use the ${prefix}wordadd command, you must be server owner.`)
            .setColor(0x00eed0)
        message.channel.send(errorEmbed);
        return;
    }
let word = args.join(' ');
console.log(word);
if (word === '') {
    let errorEmbed = new Discord.RichEmbed()
        .setAuthor("Watch out!")
        .setDescription("Wrong usage! ```-wordadd <word>```")
        .setColor("##ffffff")
    message.channel.send(errorEmbed);
    return;
}
var serverChannelModeration = new db.table('WordsBad')
serverChannelModeration.set(`p_${message.guild.id}`, ['nul', 'null'])
serverChannelModeration.push(`p_${message.guild.id}`, `${word}`);
let updateEmbed = new Discord.RichEmbed()
    .setAuthor("Watch out!")
    .setDescription("Currently filtering the word ```" + `${word}` + '```')
    .setColor("#df66d5")
message.channel.send(updateEmbed);
return;
}
