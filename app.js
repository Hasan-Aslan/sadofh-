const fs = require("fs")
const Discord = require("discord.js");
const { Intents, Collection } = Discord;
const client = new Discord.Client({
    "intents": [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

// Commands
client.commands = new Collection()

// Command Hander
const commands = fs.readdirSync("./commands");
commands.forEach(commandName => {
    const commands = require(`./commands/${commandName}`)
    client.commands.set(commands.name, commands)
})

// Events
const events = fs.readdirSync("./events")

// Config File
const {token} = require("./config.json")

client.once("ready", () => {
    
    console.log("Bot aktif!");

    client.user.setPresence({ status: "online", activities: [{ name: "!yardım", type: "PLAYING"}] })

    // Events 
    events.forEach(event => {
        const eventFunc = require(`./events/${event}`)
        eventFunc(client)
    })
})

client.login(token)