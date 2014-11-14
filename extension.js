(function () {

    function extend() {
            if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        var bot = window.bot;

        bot.retrieveSettings();

        tacos = new Array();
tacos = ["cigarro","cigarro de maconha","marlboro","nargs","caximbo da paz"];
cookie = ["um biscoito de chocolate","um cupcake","um cookie de aveia e passas","um brownie 'especial'","um cracker animal","um lanche Scooby"];
drink = ["Caipirinha", "Wisk", "Tequila", "Champagne", "Martini", "Capeta"];
abraco = ["deu um abraço de urso em","deu um abraço gostosinho em","da um abraço por traz de","da um abraço de motoqueiro em"];
safado = ["morde a orelha de","aperta a bundinha de","lambe os mamilos de","morde os lábios de","faz um 69 com","lambe o umbigo de","chupa o dedo de","lambe a virilha de","Lambe os peitos de","Aperta as teta de"];
punirr = ["penetra uma caneta em","cutuca os olhos de","aperta os mamilos de","cospe em"];
punir2 = ["dá uma piruzada na cara de","passa DST para","penetra um dildo em","enfia um peixe elétrico no rabo de","da um tapa no saco de"];
////////////////////////////////////////////////////////////////////////////////
easyBotbot = {
falaoi: ["oi bot","ola bot","eae bot","olá bot"],
respondeoi: [":D Oi",":D Olá"],
boton: ["bot on?","bot tae?","bot esta ativado?","bot ta ativado?","bot ta on?","bot ligado?"],
toon: ["Estou aqui"],
olapessoas: ["oi gente","yo minna","ola pessoas","ola gente","eae galera","oi galera","eae gente","ola galera","eae","yo gente","oi pessoas","oi pessoal","oi"],
bomdia: ["bom dia gente","bom dia galera","bom dia pessoal"], bomdiabot: [":D Bom  Dia"],
boatarde: ["boa tarde gente","boa tarde galera","boa tarde pessoal"], boatardebot: [":D Boa  Tarde"],
boanoite: ["boa noite gente","boa noite galera","boa noite pessoal"], boanoitebot: [":D Boa  Noite"],
comandoslink: ["Link dos comandos: http://goo.gl/Koy0Fe"], clink: ["qual sao os comandos bot","link dos comandos bot","comandos da sala bot","qual são os comandos bot"],
regraslink: ["Clique no nome da sala para ver as regras."], rlink: ["qual sao as regras bot","link das regras bot","regras da sala bot","qual são as regras bot"],
autowootlink: ["Como usar Auto-Woot  > "+easyBot.awlink+" !"],
awlink: ["link do autowoot bot","como usar autowoot","o que é autowoot","como usa o autowoot"]
};
////////////////////////////////////////////////////////////////////////////////
API.on(API.CHAT,onChat);
function onChat(data) {
var message = data.message.toLowerCase();
var msg = data.message;
var arg1 = msg.split(" ")[1];
var ID = data.fromID;
var chat = data.chatID;
////////////////////////////////////////////////////////////////////////////////
if (message.indexOf("!") == 0) {
API.moderateDeleteChat(chat);
////////////////////////////////////////////////////////////////////////////////
                }
            }
        };
        
            bot.commands.pingCommand = {
            command: 'ping',
            rank: 'mod',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    
                }
            }
        };
        
        
        bot.loadChat();
    }

    
    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "BEH Bot",
        language: "portuguese",
        chatLink: "https://rawgit.com/Yemasthui/basicBot/master/lang/pt.json",
        maximumAfk: 60,
        afkRemoval: true,
        maximumDc: 60,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 10,
        autodisable: true,
        commandCooldown: 3,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
                ["tema", "A música não se encaixa nos padrões da sala. "],
                ["op", "Essa música está na lista OP. "],
                ["historico", "A música ainda está no histórico. "],
                ["mix", "Você tocou um mix (muito longo) - não permitido. "],
                ["som", "A música que você tocou tinha má qualidade ou estava sem som. "],
                ["nsfw", "A música que você tocou é NSFW (impróprio). "],
                ["indisponivel", "A música que você tocou está indisponível. "]
            ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: true,
        motdInterval: 8,
        motd: "!roulette",
        filterChat: true,
        etaRestriction: true,
        welcome: false,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: "https://www.facebook.com/DivasdaDepressao",
        youtubeLink: null,
        website: "https://www.facebook.com/DivasdaDepressao",
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!"
    }));

    $.getScript('https://rawgit.com/Yemasthui/basicBot/master/basicBot.js', extend);

}).call(this);
