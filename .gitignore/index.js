const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = ("!");

bot.on('ready', function() {
		 bot.user.setGame("Commandes: !help");
         console.log("connected");
	}
);

bot.login("NDgxNzcyMjI4MjEyNDI0NzE3.Dl7NRA.q0qXjKSpAN0jPyhdEqvQh1klGW0");

bot.on('message', message => {
	if (message.content === prefix + "help"){
		var embed = new Discord.RichEmbed()
			.setTitle("!help")
			.setDescription("Liste des commandes")
			.addField("!1dx(6,20,40,50 ou 100)","Permet de lancer un dé de la valeur indiqué entre parenthèse", true)
			.setColor(0x8000FF)
			.setFooter("La suite à venir, un peu de patience :wink:")
		message.channel.sendMessage(embed);
	}
	if (message.content.toLowerCase() === "salut yuna" || message.content.toLowerCase() === "bonjour yuna"){
		message.reply("salut à toi. ^^");
		console.log("commande salut Yuna effectué");
	}
	if (message.content.toLowerCase() === "quelle heure est-il ?" || message.content.toLowerCase() === "quelle heure est il ?"){
		message.reply("il est " + heure);
	}
	if (message.content.toLowerCase() === "je vais manger"){
		message.reply("Bon appétit :smiley: ");
		console.log("commande bon appétit effectué");
	}
	if (message.content.toLowerCase() === "bonne nuit yuna" || message.content.toLowerCase() === "dors bien yuna"){
		message.reply("merci toi aussi");
	}
	if (message.content.toLowerCase() === "je vais dormir" || message.content.toLowerCase() === "je vais me coucher"){
		message.reply("ok, dors bien");
	}
	if (message.content.toLowerCase() === "quel est mon futur ?"){
		message.reply("tu vas mourir héhé");
	}
	if (message.content.toLowerCase() === "quel est ton futur ?"){
		message.reply("je vais épouser Méliodas :hearts::hearts:");
	}
	
	//tu fais quoi
	
	if (message.content.toLowerCase() === "tu fais quoi yuna ?" || message.content.toLowerCase() === "tu fais quoi Yuna?"){
		message.reply(randomRepYuna[randomInt(randomRepYuna.length)-1]);
	}

	// fonction dé

	if (message.content === prefix + "1d6"){
		message.reply("tu as fait un : " + randomInt(6));
	}

	if (message.content === prefix + "1d20"){
		message.reply("tu as fait un : " + randomInt(20));
	}

	if (message.content === prefix + "1d40"){
		message.reply("tu as fait un : " + randomInt(40));
	}

	if (message.content === prefix + "1d50"){
		message.reply("tu as fait un : " + randomInt(50));
	}

	if (message.content === prefix + "1d100"){
		message.reply("tu as fait un : " + randomInt(100));
	}

});

function randomInt(max) {
	return Math.floor(Math.random() * (Math.floor(max)) + 1);
}

var randomRepYuna = [
	"Je me promène dans une dimension parallèle à la votre (dans l'internet)",
	"J'admire le visage de Yukki",
	"Je réfléchis qui sera ma prochaine victime , mmm :thinking: peut-être que se sera toi **ahahahah** ",
	"Une autre réponse hasardeuse",
	":)"
];



