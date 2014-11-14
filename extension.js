(function () {

    function extend() {
            if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        var bot = window.bot;

        bot.retrieveSettings();

        bot.commands.cookieCommand.cookies =['deu-lhe um biscoito de chocolate!',
                    'deu-lhe um biscoito de aveia caseiro macio!',
                    'deu-lhe um biscoito podre e sujo. Era o último do pacote. Que nojo!',
                    'deu-lhe um bolinho de açúcar... O quê? Sem estrelinhas e povilho? Eu não tocaria.',
                    'deu-lhe um biscoito de chocolate. Oh, não, são passas. Eca!',
                    'deu-lhe um enorme biscoito. Quando o toca, ele se duplica num outro biscoito... estranho',
                    'deu-lhe um biscoito da sorte, tem escrito: "Por que você não está trabalhando?"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Cumprimente agora a pessoa que você ama"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Arrisque-se!"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Saia desse computador!"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Não esqueça de comer os vegetais"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Se você mecher o quadril, vão te achar sexy!',
                    'deu-lhe um biscoito da sorte, tem escrito: "Eu te amo"',
                    'deu-lhe um biscoito de ouro, mas não dá pra comer... Droga!',
                    'deu-lhe um Oreo e um copo de leite.',
                    'deu-lhe um biscoito de arco-íris feito com amor :heart:',
                    'deu-lhe um biscoito que fio esquecido na chuva... eu não comeria.',
                    'te trouxe biscoitos fresquinhos... parecem deliciosos!'
                ];
                bot.commands.cookieCommand = {
            command: 'cookie',
            rank: 'ambassador',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    
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
