const Chalk = require('chalk'); 
const fs = require('fs');

const EventFolder = fs.readdirSync('./Sandy-Bot/Events');
console.log(`${Chalk.bold.black('------------------------------------------------------------------------------------------------------')}`)
console.log(Chalk.bold.gray('| Event Files \n|'));

for (const EventCatergories of EventFolder){
    console.log(`${Chalk.bold.gray('|')} ${Chalk.bold.greenBright('[DISCORD] | Events =>')} ${Chalk.bold.rgb(97, 237, 95)(`[${EventCatergories}]`)}`);
    const EventFiles = fs.readdirSync(`./Sandy-Bot/Events/${EventCatergories}`).filter(Event => Event.endsWith('.js'));
    for (const EventFile of EventFiles){
        require(`../../Events/${EventCatergories}/${EventFile}`);
        console.log(`${Chalk.bold.black('|')} ${Chalk.bold.greenBright('[DISCORD] |')} ${Chalk.greenBright('🟢 Sucessfully')}${Chalk.yellowBright('loaded into')} ${Chalk.blueBright(EventFile.replace('.js', ''))}${Chalk.red('.js')} ${Chalk.bold.cyanBright('(Events)')}`);
    }
};
console.log(`${Chalk.bold.black('------------------------------------------------------------------------------------------------------')}`);
