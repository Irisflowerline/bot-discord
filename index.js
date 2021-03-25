const Discord = require('discord.js'),
    client = new Discord.Client({
        fetchAllMembers: true
    }),
    config = require('./config.json'),
    fs = require('fs')
 
client.login(process.env.TOKEN)
client.commands = new Discord.Collection()
 
fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})
 
client.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return
    
    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    command.run(message, args, client)
})

client.on('ready', () => {
    const statuses = [
        () => `je peux répondre à vos commandes`,
        () => `Type /help`,
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i](), {type: 'LISTENING', url: 'https://www.twitch.tv/irisflowerzebi'})
        i = ++i % statuses.length
    }, 1e4)
})

client.on('guildMemberAdd', member => {
    member.guild.channels.cache.get(config.greeting.channel).send( new Discord.MessageEmbed()
        .setDescription(`YO **${member}** J'espère que tu va te plaire sur le serveur, à oui nous sommes **${member.guild.memberCount}** ça fais beaucoup de monde non? `)
        .addField(`Pour commencer`, `va dans <#766697972117012571> pour parler`)
        .addField(`les annonces du serveur`, ` pour ça il faut aller dans <#813759891784859689> ou dans <#817707063961845791>`)
        .setColor('#00DEF8'))
    member.roles.add(config.greeting.role)
})

client.on('guildMemberRemove', member => {
    member.guild.channels.cache.get(config.greeting.channel).send(new Discord.MessageEmbed()
        .setDescription(`${member} viens tout juste de quitter le serveur, quelle histoire triste`)
        .setColor('#FF6703'))
})