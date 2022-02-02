/*
This is the Client Settings for the Discord Bot.
*/
const Client = ({
    allowedMentions: ({
        parse: [],
        users: [],
        roles: [],
        repliedUser: false
    }),
    intents: ["GUILD_MEMBERS"],
    partials: []
});

module.exports = Client;