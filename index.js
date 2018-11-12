const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client({});
client.commands = new Discord.Collection();

fs.readdir('./events/', (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
        let eventFunc = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunc.run(client, ...args));
    });
    fs.readdir(`./commands/general/`, (err, files) => {
        if (err) console.log(err);
        files.forEach(file => {
            const eventFunc = require(`./commands/general/${file}`);
            let eventName = file.split(".")[0];
            client.commands.set(eventName, eventFunc);
        });
    });
});
fs.readdir(`./commands/config/`, (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
        const eventFunc = require(`./commands/config/${file}`);
        let eventName = file.split(".")[0];
        client.commands.set(eventName, eventFunc);
    });
});
fs.readdir(`./commands/moderator/`, (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
        const eventFunc = require(`./commands/moderator/${file}`);
        let eventName = file.split(".")[0];
        client.commands.set(eventName, eventFunc);
    });
});


client.login(process.env.TOKEN);