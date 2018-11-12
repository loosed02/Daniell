const Discord = require('discord.js');
const db = require('../../lib/zeke.db');

exports.run = async (member, message, args) => {
    {
        const error = new Discord.RichEmbed()
            .setAuthor("Watch out!")
            .setColor("#55FFFF")
            .setDescription("You don't have enough permission!")
            .setFooter("TheOriginMC | Version 1.0.0");
        if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '186244786649432065') return message.channel.send(error);
    }
    if (`${args[0]}` == `set`) {
        if (`${args[1]}` == `modlog`) {
            try {
                let Error2 = new Discord.RichEmbed()
                    .setAuthor("Watch out!")
                    .setColor("#55FFFF")
                    .setDescription("You don't have enough permission!")
                    .setFooter("TheOriginMC | Version 1.0.0");
                if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '186244786649432065')
                    if (!args[2]) return message.channel.send(Error2);
                if (!args.slice(2, 1000, args[2]).join(' ') === 'NONE') return message.channel.send(Error1);
                let newChannel;
                if (args.slice(2, 1000, args[2]).join(' ') === 'NONE') newChannel = ''
                else newChannel = args.slice(2, 1000, args[2]).join(' ')
                if (`${message.mentions.channels.first()}` == `undefined`) return
                let SuccessFullSet = new Discord.RichEmbed()
                    .setAuthor("Succesfully Set Channel!")
                    .setColor("#55FFFF")
                    .setDescription(`New moderation channel has been set to: ${message.mentions.channels.first()}\nAll moderations punishments will be bound to this channel!`)
                    .setFooter("TheOriginMC | Version 1.0.0");
                var serverChannelModeration = new db.table('ModChannels')
                serverChannelModeration.set(`p_${message.guild.id}`, `${message.mentions.channels.first().id}`)
                message.channel.send(SuccessFullSet)
                message.delete();
            } catch (err) {
                console.log(`Error with setting channel\n${err}`)
            }
        } else if (`${args[1]}` == `joinlog`) {
            try {
                let Error1 = new Discord.RichEmbed()
                    .setAuthor("Watch out!")
                    .setColor("#55FFFF")
                    .setDescription("You don't have enough permission!")
                    .setFooter("TheOriginMC | Version 1.0.0");
                if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '186244786649432065')
                    if (!args[2]) return message.channel.send(Error1);
                if (!args.slice(2, 1000, args[2]).join(' ') === 'NONE') return message.channel.send(Error1);
                let newChannel;
                if (args.slice(2, 1000, args[2]).join(' ') === 'NONE') newChannel = ''
                else newChannel = args.slice(2, 1000, args[2]).join(' ')
                if (`${message.mentions.channels.first()}` == `undefined`) return
                let SuccessFullSet = new Discord.RichEmbed()
                    .setAuthor("Succesfully Set Channel!")
                    .setColor("#55FFFF")
                    .setDescription(`New JoinLog channel has been set to: ${message.mentions.channels.first()}\nAll join messages will be here!`)
                    .setFooter("TheOriginMC | Version 1.0.0");
                var serverChannelModeration = new db.table('JoinChannels')
                serverChannelModeration.set(`p_${message.guild.id}`, `${message.mentions.channels.first().id}`)
                message.channel.send(SuccessFullSet)
                message.delete();
            } catch (err) {
                console.log(`Error with setting channel\n${err}`)
            }
        } else if (`${args[1]}` == `prefix`) {
            try {
                let Error23 = new Discord.RichEmbed()
                    .setAuthor("Watch out!")
                    .setColor("#55FFFF")
                    .setDescription("You don't have enough permission!")
                    .setFooter("TheOriginMC | Version 1.0.0");
                if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '186244786649432065')
                    if (!args[2]) return message.channel.send(Error23);
                if (!args.slice(2, 1000, args[2]).join(' ') === 'NONE') return message.channel.send(Error1);
                if (args.slice(2, 1000, args[2]).join(' ') === 'NONE') newChannel = ''
                else newPrefix = args.slice(2, 1000, args[2]).join(' ')
                var prefixess = new db.table('Prefixes')
                prefixess.set(`p_${message.guild.id}`, newPrefix);
                let SuccessFullSe3t = new Discord.RichEmbed()
                    .setAuthor("Succesfully Prefix Changed!")
                    .setColor("GREEN")
                    .setDescription(`Current guild prefix has been changed to ` + "``" + `${newPrefix}` + "``")
                    .setFooter("TheOriginMC | Version 1.0.0");
                message.channel.send(SuccessFullSe3t);
            } catch (err) {
                console.log(`Error with setting channel\n${err}`)
            }
        } else if (`${args[1]}` == `welcome`) {
            try {
                let Error23 = new Discord.RichEmbed()
                    .setAuthor("Watch out!")
                    .setColor("#55FFFF")
                    .setDescription("You don't have enough permission!")
                    .setFooter("TheOriginMC | Version 1.0.0");
                if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '186244786649432065')
                    if (!args[2]) return message.channel.send(Error23);
                if (!args.slice(2, 1000, args[2]).join(' ') === 'NONE') return message.channel.send(Error1);
                if (args.slice(2, 1000, args[2]).join(' ') === 'NONE') newChannel = ''
                else newPrefixx = args.slice(2, 1000, args[2]).join(' ')
                var prefixess = new db.table('WelcomeMessages')
                prefixess.set(`p_${message.guild.id}`, newPrefixx);
                let SuccessFullSe3t = new Discord.RichEmbed()
                    .setAuthor("Succesfully Welcome Message Changed!")
                    .setColor("#55FFFF")
                    .setDescription(`Welcome message has been set to` + "```" + `${newPrefixx}` + "```")
                    .setFooter("TheOriginMC | Version 1.0.0");
                message.channel.send(SuccessFullSe3t);
            } catch (err) {
                console.log(`Error with setting channel\n${err}`)
            }
        }
    }
}