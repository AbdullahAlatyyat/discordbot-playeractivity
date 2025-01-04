const Discord = require('discord.js')
const fetch = require('node-fetch');
const client  = new Discord.Client();
const serverId = '';
const token = '';

client.once('ready', () => {
    console.log('Stats bot is online');
    setInterval(() => {
        try {
            fetch('https://api.battlemetrics.com/servers/' + serverId)
            .then(response => response.json())
            .then(jsonResponse => {
                var players = jsonResponse.data.attributes.players;
                var maxPlayers = jsonResponse.data.attributes.maxPlayers;
                client.user.setActivity(players + "/" + maxPlayers);
            });
        } catch (error) {
                console.log(error)
        }
    }, 10000);
});

client.login(token);