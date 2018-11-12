const Discord = require('discord.js');

exports.run = async (users, message, client) => {
    let embed = new Discord.RichEmbed()
        .setAuthor("Verification System")
        .setDescription("Welcome to ``TheOriginMC``!\nBefore you're able to gain access to the other channels we must do a quick inspection that you aren't a client!\nPlease react to the emote ✅ to gain ``Verify`` role.")
        .setColor("#55FFFF")
        .setTimestamp()
        .setFooter("THEORIGINMC.COM | Join today!")
        const reactmessage = await message.channel.send(embed);
        await reactmessage.react("✅");
        const filter = (reaction, user) => reaction.emoji.name === '✅' && !user.bot;
		const collector = reactmessage.createReactionCollector(filter, {  });

		collector.on('collect', async reaction => {
			const user = reaction.users.last();
			const guild = reaction.message.guild;
			const member = guild.member(user) || await guild.fetchMember(user);
			member.addRole('511319353845874709');
		});
	}

