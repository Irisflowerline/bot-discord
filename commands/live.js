const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('info sur')
            .setTitle('***liste de personne qui fonbt des live sur twitch ou youtube***')
            .setColor('#0000000000')
            .addField('*JUBILABO*', ' https://www.twitch.tv/irisflowerzebi ', true)
            .setThumbnail('')
            .setURL(''))
    },
    name: 'live'
}