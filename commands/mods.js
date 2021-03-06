const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('info sur')
            .setTitle('***MODS***')
            .setColor('#DD00EC')
            .addField(`Applied Energetics 2`, `https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2/download/2747063`, true)
            .addField(`Botania`, `https://www.curseforge.com/minecraft/mc-mods/botania/download/2698039`, true)
            .addField(`Tinkers Construct`, `https://www.curseforge.com/minecraft/mc-mods/tinkers-construct/download/2902483`, true)
            .addField(`Draconic Evolution`, `https://www.curseforge.com/minecraft/mc-mods/draconic-evolution/download/3051542`, true)
            .addField(`JEI`, `https://www.curseforge.com/minecraft/mc-mods/jei/download/3040523`, true)
            .addField(`OpenBlock`, `https://www.curseforge.com/minecraft/mc-mods/openblocks/download/2699056`, true)
            .addField(`Chisel`, `https://www.curseforge.com/minecraft/mc-mods/chisel/download/2619468`, true)
            .addField(`Journey Map`, `https://www.curseforge.com/minecraft/mc-mods/journeymap/download/2916002`, true)
            .addField(`Mystical Agriculture`, `https://www.curseforge.com/minecraft/mc-mods/mystical-agriculture/download/2704562`, true)
            .addField(`Bibliocraft`, `https://www.curseforge.com/minecraft/mc-mods/bibliocraft/download/2574880`, true)
            .addField(`Environmental Tech`, `https://www.curseforge.com/minecraft/mc-mods/environmental-tech/download/2691536D`, true)
            .addField(`Davincis Vessels`, ` https://www.curseforge.com/minecraft/mc-mods/davincis-vessels/download/2499846`, true)
            .addField(`ToroHealth`, `https://www.curseforge.com/minecraft/mc-mods/torohealth-damage-indicators/download/2483817`, true)
            .addField(`Security Craft`, `https://www.curseforge.com/minecraft/mc-mods/security-craft/download/3090828`, true)
            .addField(`Milénaire`, `https://www.curseforge.com/minecraft/mc-mods/millenaire/download/2811528`, true)
            .addField(`GalacticraftCore`, `https://micdoodle8.com/download?R2FsYWN0aWNyYWZ0Q29yZS0xLjEyLjItNC4wLjIuMjgwLmphcj9odHRwczovL21pY2Rvb2RsZTguY29tL25ldy1idWlsZHMvR0MtMS4xMi8yODAvR2FsYWN0aWNyYWZ0Q29yZS0xLjEyLjItNC4wLjIuMjgwLmphcj9HQy0xXzEyPzI4MA==`, true)
            .addField(`GalacticraftPlanets`, `https://micdoodle8.com/download?R2FsYWN0aWNyYWZ0LVBsYW5ldHMtMS4xMi4yLTQuMC4yLjI4MC5qYXI/aHR0cHM6Ly9taWNkb29kbGU4LmNvbS9uZXctYnVpbGRzL0dDLTEuMTIvMjgwL0dhbGFjdGljcmFmdC1QbGFuZXRzLTEuMTIuMi00LjAuMi4yODAuamFyP0dDLTFfMTI/Mjgw`, true)
            .addField(`GalacticraftMicdoodleCore`, `https://micdoodle8.com/download?TWljZG9vZGxlQ29yZS0xLjEyLjItNC4wLjIuMjgwLmphcj9odHRwczovL21pY2Rvb2RsZTguY29tL25ldy1idWlsZHMvR0MtMS4xMi8yODAvTWljZG9vZGxlQ29yZS0xLjEyLjItNC4wLjIuMjgwLmphcj9HQy0xXzEyPzI4MA==`, true)
            .addField(`Extraplanets`, `https://www.curseforge.com/minecraft/mc-mods/extraplanets/download/3213697`, true)
            .addField(`Optifine`, `https://optifine.net/adloadx?f=OptiFine_1.12.2_HD_U_G5.jar`, true)
            .setThumbnail('')
            .setURL())
            
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('info sur')
            .setTitle('***API***')
            .setColor('#FF0008')
            .addField(`Baubles 1.5.2`, `https://www.curseforge.com/minecraft/mc-mods/baubles/download/2518667`, true)
            .addField(`MovingWorld`, `https://www.curseforge.com/minecraft/mc-mods/movingworld/download/3007966`, true)
            .addField(`BrandonCore 2.4.19`, `https://www.curseforge.com/minecraft/mc-mods/brandons-core/download/3051539`, true)
            .addField(`Valkyrie 2.0.20.1`, `https://www.curseforge.com/minecraft/mc-mods/valkyrielib/download/2691542
            C`, true)
            .addField(`Cucumber 1.1.2`, `https://www.curseforge.com/minecraft/mc-mods/cucumber/download/2641719`, true)
            .addField(`OpenModsLib 0.12.2`, `https://www.curseforge.com/minecraft/mc-mods/openmodslib/download/2699055`, true)
            .addField(`Mantle 1.3.3.49`, `https://www.curseforge.com/minecraft/mc-mods/mantle/download/2713386`, true)
            .addField(`RestoneFlux (any)`, `https://www.curseforge.com/minecraft/mc-mods/redstone-flux/download/2920436`, true)
            .addField(`CodeChickenLib 3.2.0`, `https://www.curseforge.com/minecraft/mc-mods/codechicken-lib-1-8/download/2575906`, true)
            .addField(`CTM 0.2.3.8`, `https://www.curseforge.com/minecraft/mc-mods/ctm/download/2642375`, true)
            .addField(`MJRL 0.2.3.8`, `https://www.curseforge.com/minecraft/mc-mods/mjrlegendslib/download/3029768`, true)
            .setThumbnail('')
            .setURL())
    },
    name: 'modstamere'
}