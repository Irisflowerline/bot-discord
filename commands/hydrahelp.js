const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('info sur')
            .setTitle('***Comment faire marcher le bot de musique ?***')
            .setColor('#093FBB')
            .addField(`**Seul chose à faire**`, `pour ça il faut juste aller dans le salon <#823308583852441630> et juste écrire le nom ou l'url de la musique que l'on veut écouter
            
            et le bot se chargera de mettre de la musique dans le salon vocal où vous vous situez`, true)
            .setThumbnail('')
            .setURL(''))
    },
    name: 'hydra_help'
}