/**
 * Welcome to Stella!
 *
 * Stella is a SUPER SIMPLE project aiming to explain how to develop a Discord Bot in Javascript!
 *
 * I'll try to keep this concise and not go too crazy with comments. The README.md file will go in depth.
 *
 * PLEASE NOTE that this tutorial assumes that you know minimum coding concepts, as well as what Javascript is. You don't
 * need to be a Javascript expert, as the code here will be basic. General coding knowledge should be enough, and
 * this can even be considered practice to become a programmer!
 *
 * Without further ado, let's go.
 */

// Load .env variables.
// Refer to 'Understanding .env & Environment Variables'. in the README for more info.
require('dotenv').load();

// We do a quick check to see if a token is set before we do anything else.
// This avoids us doing all of the code below and just failing at the end when no token is set!
if (process.env.BOT_TOKEN === undefined) {
  console.log(`Seems like the token is missing. Can't do anything without a .env file containing a BOT_TOKEN variable! Set that up. :) See .example.env for more details.`);
  process.exit(1);
}

// Load the 'discord.js' library. If this library is missing, run 'npm install' in your command line.
// Refer to 'Understanding Packages' in the README to understand how packages work. :)
const DiscordJS = require('discord.js');

// Instantiate the Discord Client class.
// If you don't understand this line, don't worry. Simply know that this line prepares the Discord Client functionality.
const client = new DiscordJS.Client();

// Define what to do when a 'ready' event occurs.
// Refer to the 'Understanding Events' part of the README for more information on this. :)
// Code within this block is executed when a successful connection with Discord is established.
client.on('ready', () => {

	// Set game text
	client.user.setActivity('Bein cute!').catch(console.error); 

  // Send a message to the console.
  // You should see this message in the console when you run the bot. You can change this if you want!
  console.log(`Logged in as ${client.user.tag}!`);

});

// Define what to do when a 'message' event occurs.
// Refer to the 'Understanding Events' part of the README for more information on this. :)
// Code within this block is executed EVERY TIME a message is sent in a channel the bot is in.
// Think of this line as 'When a message is sent, then...'
client.on('message', msg => {

  // The magic happens here. You can decide what your bot does every time it "hears" a message.

  // If the content of the message is EXACTLY 'ping', make the bot reply to the message with 'Pong!'.
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }

  // If the content of the message is EXACTLY 'buzzfeed', make the bot reply to the message with 'Shut your ass up.'.
  if (msg.content.includes('buzzfeed')) {
    msg.reply('Buzzfeed fucking sucks.');
  }
});

// Make the bot login to Discord.
// To get your bot's token, visit 'https://discordapp.com/developers/applications/' and create an application.
// You need to create a .env file that contains your bot's token!
client.login(process.env.BOT_TOKEN).catch(error => {
  throw error;
});

// Dango's so cool!

// adding Zelda to servers/channels 
// https://discordapp.com/oauth2/authorize?&client_id=535309423359295489&scope=bot&permissions=1546959939