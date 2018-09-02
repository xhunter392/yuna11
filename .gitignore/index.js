const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = ("!");

bot.on('ready', function() {
		 bot.user.setGame("Commandes: !help");
		 console.log("connected");
	}
);

bot.login(process.env.TOKEN);

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
	if (message.content === "salut Yuna"){ 
		message.reply("salut à toi. ^^");
		console.log("commande salut Yuna effectué");
	}
	if (message.content === "je vais manger"){
		message.reply("Bon appétit :smiley: ");
		console.log("commande bon appétit effectué");
	}
	if (message.content === "bonne nuit Yuna"){
		message.reply("merci toi aussi");
	}
	if (message.content === "je vais dormir"){
		message.reply("ok,bonne nuit ^^");
	}
	if (message.content === "je vais me coucher"){
		message.reply("ok,bonne nuit ^^");
	}
	if (message.content === "quel est mon futur ?"){
		message.reply("tu vas mourir héhé");
	}
	if (message.content === "quel est ton futur ?"){
		message.reply("je vais épouser Méliodas :hearts::hearts:");
	}
	
	//tu fais quoi
	if (message.content ==="tu fais quoi Yuna ?"){
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


