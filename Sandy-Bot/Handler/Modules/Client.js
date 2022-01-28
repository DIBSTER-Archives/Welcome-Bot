/*
This is the Client Settings for the Discord Bot.
*/
const Client = ({
    allowedMentions: ({
        parse: [],
        users: [],
        roles: [],
        repliedUser: true
    }),
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_PRESENCES", "GUILD_MESSAGES"],
    partials: ['USER', 'CHANNEL', 'MESSAGE', "REACTION"]
});

module.exports = Client;
