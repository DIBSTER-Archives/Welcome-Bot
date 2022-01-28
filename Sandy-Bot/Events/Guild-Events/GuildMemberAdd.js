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
DiscordClient.on('guildMemberAdd', async (member) => {

    if(member.guild.id != Configuration.Settings.GuildId) return;                                           //Checks if the guild is the correct guild.

    if(member.user.bot == true) return;                                                                     //Checks if the member is a bot, which will not send the embed.

    const WelcomeChannel = await DiscordClient.channels.cache.get(Configuration.Settings.WelcomeChannelId); //Finding the welcome channel.
    
    const BotCount = member.guild.members.cache.filter(m => m.user.bot).size;                               //Bot count within the server.

    const WelcomeImage = new DiscordJS.MessageAttachment('./Sandy-Bot/Assets/WelcomeImage.png');            //Getting Welcome Image from Assets Folder.

    //Welcome Embed.
    const WelcomeEmbed = new DiscordJS.MessageEmbed()
        .setTitle(`Welcome ${member.user.username} to ${member.guild.name}!`)
        .setColor(Configuration.Discord.CustomColor)
        .setDescription(`Welcome **${member.user.username}** to **${member.guild.name}**. We hope you have a great time here. We are now at **${member.guild.memberCount - BotCount}** members. Here are some things you can do in __${member.guild.name}__:\n\n<:sandy_thumbsup:838082076339208212> Make sure to read <#773005756873703467>\n<:sandy_thumbsup:838082076339208212> Pickup roles in <#779630309770788864>\n<:sandy_thumbsup:838082076339208212> Feel Free to Follow my Socials <#847722907761377300>\n\n**User Account Creation Date:**\n<t:${Math.floor(member.user.createdTimestamp/1000)}:F>\n**User Join Date:**\n<t:${Math.floor(member.joinedTimestamp/1000)}:F>`)
        .setThumbnail(Configuration.Discord.Logo)
        .setFooter({text: Configuration.Discord.Footer, iconURL: Configuration.Discord.Logo})
        .setImage('attachment://WelcomeImage.png')
        .setTimestamp()
    
    WelcomeChannel.send({embeds: [WelcomeEmbed], content: `${member.toString()}`, files: [WelcomeImage]});      //Sending hte Welcome Embed.

    console.log(`${Chalk.yellowBright(member.user.tag)} just joined ${Chalk.blueBright(member.guild.name)}`);   //Console logging the event.
});