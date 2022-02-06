/*
    Packages and Imports.
*/
const DiscordJS = require('discord.js');                            //Requires discord.js package.

const DiscordClient = require('../../index.js');                    //Requires the Discord Client.

const Chalk = require('chalk');                                     //Requires chalk package.

const Configuration = require('../../Configuration/config.json');   //Requires Configuration Settings.


/*
    Actual Code when the event is triggered.
*/
DiscordClient.on('guildMemberRemove', async (member) => {

    if(member.guild.id != Configuration.Settings.GuildId) return;   //Checks if the guild is the correct guild.

    const LeaveChannel = await DiscordClient.channels.cache.get(Configuration.Settings.WelcomeChannelId); //Finding the Correct Welcome Channel.

    //Actual Leave Message.
    LeaveChannel.send(`**${member.user.tag}** has departed from **${member.guild.name}**. We hope they enjoyed the stay at **${member.guild.name}**, sad to see you go.`);

    console.log(`${Chalk.yellowBright(member.user.tag)} just left ${Chalk.blueBright(member.guild.name)}`);   //Console logging the event.
    
});
