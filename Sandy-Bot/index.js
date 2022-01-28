//Requiring discord.js package.
const DiscordJS = require('discord.js');

//Requiring the Configuration Files.
const Configuration = require('./Configuration/config.json');

//Creating New Websocket Client.
const DiscordClient = new DiscordJS.Client(require('./Handler/Modules/Client.js'));

//Exporting the Client.
module.exports = DiscordClient;

//Starting the Command Handler.
require('./Handler/index.js');

//Logging into the Websocket Client.
DiscordClient.login(Configuration.Tokens.Discord);
