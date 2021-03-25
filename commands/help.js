const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('info sur')
            .setTitle('commands help')
            .setColor('RANDOM')
            .addField('``/helpmod``', 'Vous permet d aider les modérateurs du serveurs', true)
            .addField('``/servers``', 'donne la liste des serveur présent sur le serveur et comment y accéder', true)
            .addField('``/roleinfo``', 'cette commande vous permet de savoir comment obtenir des roles sur le serveur', true)
            .addField('``/planning``', `donne un aprecu de l'emploi du temps de la semaine`, true)
            .addField('``/modstamere``', `fait montrer tous les mods pour le serveur de <@528652572320464918>`, true)
            .setThumbnail('')
            .setURL())
    },
    name: 'help'
}