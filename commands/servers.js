const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('info sur')
            .setTitle('servers Minecraft list')
            .setColor('#FF0000')
            .addField('**serveur de Albertamere**', '**version** : 1.12.2 forge          **ip** : 4.tcp.eu.ngrok.io:14557', false)
            .addField('**serveur survie 2**', 'empty', false)
            .addField('**serveur survie 3**', '**version** : Snapshot 21w10b          **ip** : empty', false)
            .addField('**serveur build**', 'empty', false)
            .addField('**serveur hardcore**', 'empty', false)
            .addField('**serveur test**', 'empty', false)
            .addField('**serveur moddé**', 'empty', false)
            .setThumbnail()
            .setURL('https://www.serveurs-minecraft.org'))
    },
    name: 'servers'
}