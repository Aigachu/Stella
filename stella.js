/**
 * Welcome to Stella!
 *
 * Stella is a SUPER SIMPLE project aiming to explain how to develop a Discord Bot in Javascript!
 *
 * I'll try to keep this concise and not go too crazy with comments. The README.md file will go in depth.
 *
 * PLEASE NOTE THAT this tutorial assumes that you know minimum coding concepts, as well as what Javascript is. You don't
 * need to be a Javascript expert, as the code here will be basic. General coding knowledge should be enough, and
 * this can even be considered practice to become a programmer!
 *
 * Without further ado, let's go.
 */

// Load .env variables.
require('dotenv').load();

// Load the 'discord.js' library. If this library is missing, run 'npm install' in your command line.
const DiscordJS = require('discord.js');

// Instantiate the Discord Client class.
const client = new DiscordJS.Client();

// Define what to do when a 'ready' event occurs.
// Code within this block is executed when a successful connection with Discord is established.
client.on('ready', () => {

  // Send a message to the console.
  console.log(`Logged in as ${client.user.tag}!`);

});

// Define what to do when a 'message' event occurs.
// Code within this block is executed EVERY TIME a message is sent in a channel the bot is in.
client.on('message', msg => {

  // If the content of the message is EXACTLY 'ping', make the bot reply to the message with 'Pong!'.
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }

});

// Make the bot login to Discord.
// You need to enter your bot's token here. Replace 'token'. Keep the single quotes though.
// To get your bot's token, visit 'https://discordapp.com/developers/applications/' and create an application.
// Remember to NEVER commit your token. I'll explain a strategy to save the token elsewhere.
// You need to create a .env file that contains your bot's token!
// That file will be ignored by git, so don't worry about it being committed. :)
client.login(process.env.BOT_TOKEN).catch(error => {
  throw error;
});

// Dango's so cool!
// LOOK AT THAT! https://www.google.com/search?q=retarded+horse&rlz=1C1MSIM_enCA754CA754&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiRqavml4rgAhVq3IMKHRfiD54Q_AUIDigB&biw=1680&bih=939#imgrc=YPMVsm7hfDxmnM: