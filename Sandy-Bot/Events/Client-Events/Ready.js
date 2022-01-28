/*
    Packages and Imports.
*/
const DiscordClient = require('../../index.js');            //Requires Discord Client.

const Chalk = require('chalk');                             //Requires chalk package.

const Configuration = require('../../Configuration/config.json');   //Requires Configuration Settings.

/*
    Actual Code when the event is triggered.
*/
DiscordClient.once('ready', async (DiscordClient) => {
    
    const Guild = await DiscordClient.guilds.cache.get(Configuration.Settings.GuildId);     //Finds the Server Designated Guild.

    const BotCount = Guild.members.cache.filter(m => m.user.bot).size;                      //Bot count within the Guild.

    //Activities:
    const Activities = [
        {text: "over Mista Man", type: "WATCHING"}, 
        {text: `over ${Guild.members.cache.size - BotCount}`, type: "WATCHING"}
    ];

    setInterval(() => {
        const Activity = Activities[Math.floor(Math.random() * Activities.length)];
        DiscordClient.user.setActivity(Activity.text, {
            type: Activity.type
        });
    }, 30000);

    /*
        Logging the Events in the Console.
    */
    console.log(`${Chalk.bold.black('| ')}${Chalk.bold.greenBright('[DISCORD] | 🟢')}${Chalk.bold.greenBright('Connected to ' + DiscordClient.user.tag)}`);
    console.log(`${Chalk.bold.black('------------------------------------------------------------------------------------------------------')}`);
});