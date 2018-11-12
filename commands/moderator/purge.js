const Discord = require("discord.js");
const db = require('../../lib/zeke.db');

exports.run = async (client, message, args) => {
  const deleteCount = parseInt(args[0], 10);
  if (message.content.toLowerCase() == "-purge help") {
    const error1 = new Discord.RichEmbed()
      .setAuthor("Hold up! :gear:")
      .setColor("#55FFFF")
      .setDescription(":Oops, looks like there was an error while processing the command. Seems like you have forgotten something Usage: ```-purge <int>```")
      .setFooter("TheOriginMC | Version 1.0.0");
    return message.channel.send(error1)
  }
  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const error2 = new Discord.RichEmbed()
      .setAuthor("Hold up! :gear:")
      .setColor("#55FFFF")
      .setDescription("Oops, looks like there was an error while processing the command. Seems like I'm missing permission ```MANAGE_MESSAGES```")
      .setFooter("TheOriginMC | Version 1.0.0");
    return message.channel.send(error2)
  } else if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    const error3 = new Discord.RichEmbed()
      .setAuthor("Hold up! :gear:")
      .setColor("#55FFFF")
      .setDescription("Oops, looks like there was an error while processing the command. Looks like you don't have enough permission!")
      .setFooter("TheOriginMC | Version 1.0.0");
    return message.channel.send(error3)
  } else if (deleteCount == "" | deleteCount == " ") {
    const error4 = new Discord.RichEmbed()
      .setAuthor("Hold up! :gear:")
      .setColor("#55FFFF")
      .setDescription(", looks like there was an error while processing the command. Seems like you have forgotten something Usage: ```-purge <int>```")
      .setFooter("TheOriginMC | Version 1.0.0");
    return message.channel.send(error4)
  }
  const error5 = new Discord.RichEmbed()
    .setAuthor("Watch out!")
    .setColor("#55FFFF")
    .setDescription("Oops, looks like there was an error while processing the command. You must delete a message between ``1-100``")
    .setFooter("TheOriginMC | Version 1.0.0");
  if (!deleteCount || deleteCount < 1 || deleteCount > 100)
    return message.reply(error5)
  const fetched = await message.channel.fetchMessages({
    limit: deleteCount
  })
  const succesffullyy = new Discord.RichEmbed()
    .setAuthor("Succesfully Purged Messages!")
    .setColor("#55FFFF")
    .setDescription(`Succesfully cleared ${deleteCount} messages\nBy: ` + "`` " + `${message.author.username}` + " ``")
    .setFooter("TheOriginMC | Version 1.0.0")
    .setTimestamp();

  const error6 = new Discord.RichEmbed()
    .setAuthor("Hold up! :gear:")
    .setColor("#55FFFF")
    .setDescription("Oops, looks like there was an error while sending a message. Sorry, couldn't find the ``Moderator`` channel!\nUsage:```-config set modlog <#Channel>```")
    .setFooter("TheOriginMC | Version 1.0.0");
  var serverChannelModeration = new db.table('ModChannels');
  message.channel.bulkDelete(fetched).then(() => {
    (message.guild.channels.get(serverChannelModeration.get(`p_${message.guild.id}`)) || message.channel).send(succesffullyy);

  })

}