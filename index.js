const Discord = require('discord.js')
const  { MessageEmbed, MessageAttachment } = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
const bdd = require("./fichier.json")
client.login('ODMxMTcyMTM3MjYzNTYyODQx.YHRXXw.UtJvu8_X-WL4BQygsVtjlsJPyHE')

client.on('ready', () => {
    console.log('Je suis prêt !')
})

function Savebdd() {
    fs.writeFile("./fichier.json", JSON.stringify(bdd, null, 4), (err) => {
      if(err) message.channel.send("Une erreur est survenue veuillez réessayer.")
    })}

client.on('voiceStateUpdate', (old, next) => {
    if(!old.channel){
        if(!bdd[old.member.id]){
            bdd[old.member.id] = {
                date: Date.now(),
                temps: 0
            }
            Savebdd()
        }else{
            bdd[old.member.id].date = Date.now()
            Savebdd()
        }
        
    }else {
        if(!bdd[old.member.id]){
            return console.log(error)
        }else{
            if(bdd[old.member.id].temps === 0){
                bdd[old.member.id] = {
                    date: 0,
                    temps: Date.now() - bdd[old.member.id].date
                }
                Savebdd()
            }else {
                bdd[old.member.id] = {
                    date: 0,
                    temps: Date.now() - bdd[old.member.id].date + bdd[old.member.id].temps
                }
                Savebdd()
            }
            if(bdd[old.member.id].temps > 3600000){
                if(!old.member.roles.cache.find(role => role.id === '830971582633082960')){
                    old.member.roles.add(old.guild.roles.cache.find(role => role.id === '830971582633082960'))
                }
            }
            if(bdd[old.member.id].temps > 18000000){
                if(!old.member.roles.cache.find(role => role.id === '830971627143168040')){
                    old.member.roles.add(old.guild.roles.cache.find(role => role.id === '830971627143168040'))
                }
            }
            if(bdd[old.member.id].temps > 36000000){
                if(!old.member.roles.cache.find(role => role.id === '830971397701763134')){
                    old.member.roles.add(old.guild.roles.cache.find(role => role.id === '830971397701763134'))
                }
            }
            if(bdd[old.member.id].temps > 180000000){
                if(!old.member.roles.cache.find(role => role.id === '830971397583929364')){
                    old.member.roles.add(old.guild.roles.cache.find(role => role.id === '830971397583929364'))
                }
            }
            if(bdd[old.member.id].temps > 360000000){
                if(!old.member.roles.cache.find(role => role.id === '830971400369340426')){
                    old.member.roles.add(old.guild.roles.cache.find(role => role.id === '830971400369340426'))
                }
            }
            if(bdd[old.member.id].temps > 1800000000){
                if(!old.member.roles.cache.find(role => role.id === '830971399874281482')){
                    old.member.roles.add(old.guild.roles.cache.find(role => role.id === '830971399874281482'))
                }
            }
            if(bdd[old.member.id].temps > 3600000000){
                if(!old.member.roles.cache.find(role => role.id === '830971398414794804')){
                    old.member.roles.add(old.guild.roles.cache.find(role => role.id === '830971398414794804'))
                }
            }
        }
    }
})

client.on('message', message => {
    if(message.content == '!me'){
        if(!bdd[message.member.id]){
            return  message.channale.send(`Vous n'avez pas été en vocal ! Votre temps de vocal est donc de 0s.`)
        }else{
            if(!message.member.voice.channel){ 
                ms = bdd[message.member.id].temps
                return message.channel.send(`Votre temps de vocal est éstimé à ${Math.floor(ms/(1000*60*80)%24)}h, ${Math.floor(ms/(1000*60)%60)}min et ${Math.floor(ms/(1000)%60)}s.`)
            }else {
                ms = bdd[message.member.id].temps + (Date.now() - bdd[message.member.id].date)
           return message.channel.send(`Votre temps de vocal est éstimé à ${Math.floor(ms/1000/60/60)}h, ${Math.floor(ms/1000/60)}min et ${Math.floor(ms/(1000)%60)}s.`)
            }


            
        }
    }
})