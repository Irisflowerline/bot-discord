const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('info sur')
            .setTitle('help for moderators')
            .setColor('#E89711')
            .addField('**Pour nous aider**', 'tu peux simplement aller sur le site : empty', true)
            .setThumbnail('')
            .setURL())
    },
    name: 'helpmod'
}