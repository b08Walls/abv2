const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5001

const app = require('express')();
const http = require('http').Server(app);
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

app.use(express.json())
app.use(express.urlencoded())

app.get('/',function(req,res)
{
	res.send('<h1>Here lays ANDON-BOT, we hope his spirit answer for all the shutdowns 4E&E</h1>');
});

//Declaracion de carpeta publica
app.use(express.static(__dirname+'/public'))

//INICIALIZACION DE SERVIDOR.
http.listen(PORT,function(){console.log("INIT OK!",PORT)})


const TelegramBot = require('node-telegram-bot-api');

const token = '484687148:AAGS6ZDypI-ZkZOhedZriHc36UOuvrtJ8tA';

const bot = new TelegramBot(token, {polling:true});

bot.onText(/\/echo (.+)/, (msg,match)=> {
    
    const chatId = msg.chat.id;
    const resp = match[1];
    console.log("[onText] msg:",msg);
    bot.sendMessage(chatId, resp);
});


bot.on('message',(msg) => {
    const chatId = msg.chat.id;
    console.log("[on] msg",msg);
    bot.sendMessage(chatId, 'Ya me llego el mensaje !!');
})