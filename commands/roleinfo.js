const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('info sur')
            .setTitle('information about roles on the server')
            .setColor('#0EB6CA')
            .addField('**Le rôle Knight**', 'Est un rôle qui s obtient en aidant plus de 5 fois des personnes sur le serveur', true)
            .addField('**le rôle Animateur du serveur**', 'Est un rôle qui s obtient en proposant de nombreuses activités sur le serveur (plus de 3 par mois minimum) ', true)
            .addField('**le rôle Modo**', 'Celui-ci s obtient en étant très actif sur le serveur (10 messages par jour minimum et en aillant une écoute sur les membres)', true)
            .setThumbnail('')
            .setURL())
    },
    name: 'roleinfo'
}