// ======================================
// BANCO DE DADOS ATUALIZADO FURIA (JUNHO 2025)
// ======================================
const furiaDatabase = {
    jogadores: [
        { 
            nome: "FalleN", 
            funcao: "AWPer/IGL", 
            rating: 1.15,
            kills: 1350,
            headshots: "40%",
            estilo: "Líder experiente, sniper preciso"
        },
        { 
            nome: "KSCERATO", 
            funcao: "Rifler", 
            rating: 1.24,
            kills: 1520,
            headshots: "61%",
            estilo: "Consistente, clutcher"
        },
        { 
            nome: "yuurih", 
            funcao: "Rifler", 
            rating: 1.18,
            kills: 1420,
            headshots: "58%",
            estilo: "Lurker"
        },
        { 
            nome: "chelo", 
            funcao: "Rifler", 
            rating: 1.07,
            kills: 1180,
            headshots: "49%",
            estilo: "Versátil, entry fragger"
        },
        { 
            nome: "Skulls", 
            funcao: "Riffler", 
            rating: 1.12,
            kills: 1280,
            headshots: "53%",
            estilo: "Agressivo, cria espaços"
        }
    ],
    
    resultados: [
        { 
            adversario: "Vitality", 
            placar: "2-1", 
            evento: "IEM Dallas 2025",
            destaques: ["KSCERATO 78 kills", "FalleN 1v3 clutch"]
        },
        { 
            adversario: "MOUZ", 
            placar: "1-2", 
            evento: "ESL Pro League S21",
            destaques: ["yuurih 1.45 rating"]
        },
        { 
            adversario: "G2", 
            placar: "2-0", 
            evento: "BLAST Premier Spring",
            destaques: ["Skulls 5 aces no evento"]
        }
    ],
    
    proximosJogos: [
        { 
            adversario: "Natus Vincere", 
            data: "22/04/2025", 
            evento: "IEM Cologne Qualifier",
            horario: "16:00 BRT"
        },
        { 
            adversario: "Team Spirit", 
            data: "28/04/2025", 
            evento: "BLAST Premier Fall Groups",
            horario: "14:00 BRT"
        }
    ],
    
    curiosidades: [
        "A FURIA foi fundada em 2017 e rapidamente se tornou o melhor time brasileiro",
        "KSCERATO já foi eleito 3 vezes MVP em torneios internacionais",
        "Yuurih é conhecido por seu lurker e sua mira afiada",
        "FalleN é o jogador mais veterano do time, com 32 anos"
    ]
};

// ======================================
// FUNÇÕES DE INTERFACE DO CHAT
// ======================================

function addUserMessage(message) {
    const chatMessages = document.getElementById('chat-messages');
    const msgElement = document.createElement('div');
    msgElement.className = 'message user-message';
    msgElement.textContent = message;
    chatMessages.appendChild(msgElement);
    scrollToBottom();
}

function addBotMessage(message) {
    const chatMessages = document.getElementById('chat-messages');
    const msgElement = document.createElement('div');
    msgElement.className = 'message bot-message';
    msgElement.textContent = message;
    chatMessages.appendChild(msgElement);
    scrollToBottom();
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chat-messages');
    const typingElement = document.createElement('div');
    typingElement.id = 'typing-indicator';
    typingElement.className = 'typing-indicator';
    typingElement.textContent = "Digitando...";
    chatMessages.appendChild(typingElement);
    scrollToBottom();
}

function removeTypingIndicator() {
    const typingElement = document.getElementById('typing-indicator');
    if (typingElement) {
        typingElement.remove();
    }
}

function scrollToBottom() {
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ======================================
// SISTEMA DE RESPOSTAS AVANÇADO
// ======================================
function gerarResposta(prompt) {
    const input = prompt.toLowerCase().trim();
    
    // Reconhecimento de padrões aprimorado
    switch(true) {
        // ---- SOBRE O TIME ----
        case /(elenco|jogador|time|equipe|roster)/.test(input):
            return formatarElenco();
            
        case /(pr[oó]xim|jogo|calend[aá]rio|quando joga)/.test(input):
            return formatarProximosJogos();
            
        case /(resultado|ultim|partida|jogo passado)/.test(input):
            return formatarResultados();
            
        case /(classifica[cç][aã]o|ranking|posi[cç][aã]o)/.test(input):
            return "🏆 FURIA está atualmente em #15 no ranking mundial da HLTV!";
            
        case /(curiosidade|hist[oó]ria|sabia|fact)/.test(input):
            return formatarCuriosidade();
            
        // ---- JOGADORES ESPECÍFICOS ----
        case /(skulls|felipé)/.test(input):
            return formatarJogador("Skulls");
            
        case /(kscerato|kaike)/.test(input):
            return formatarJogador("KSCERATO");
            
        case /(yuurih|yuri)/.test(input):
            return formatarJogador("yuurih");
            
        case /(chelo|marcelo)/.test(input):
            return formatarJogador("chelo");
            
        case /(fallen|gabriel novaes)/.test(input):
            return formatarJogador("FalleN");
            
        // ---- MAPAS E ESTRATÉGIAS ----
        case /(melhor mapa|mapa forte)/.test(input):
            return "📊 FURIA domina em: Mirage (67% WR), Inferno (61% WR) e Overpass (59% WR)";
            
        case /(pior mapa|mapa fraco)/.test(input):
            return "⚠️ FURIA precisa melhorar em: Nuke (45% WR) e Vertigo (48% WR)";
            
        case /(estrat[ée]gia|tatica|jogam como|style)/.test(input):
            return "🔴 Estilo FURIA: Jogo agressivo, muita pressão mid-round e explosividade individual!";
            
        // ---- TORNEIOS ----
        case /(torneio|evento|campeonato)/.test(input):
            return "🎮 Próximos torneios:\n- IEM Cologne (Julho)\n- BLAST Premier Fall (Agosto)\n- Major Copenhagen (Setembro)";
            
        // ---- DEFAULT ----
        default:
            return getRandomResponse();
    }
}

// ======================================
// FUNÇÕES DE FORMATAÇÃO
// ======================================
function formatarElenco() {
    let resposta = "🔴 ELENCO FURIA (2025) 🔴\n\n";
    furiaDatabase.jogadores.forEach(jogador => {
        resposta += `👉 ${jogador.nome} (${jogador.funcao})\n`;
        resposta += `⭐ Rating: ${jogador.rating} | HS: ${jogador.headshots}\n`;
        resposta += `💡 Estilo: ${jogador.estilo}\n\n`;
    });
    return resposta;
}

function formatarProximosJogos() {
    let resposta = "🗓 PRÓXIMOS JOGOS 🗓\n\n";
    furiaDatabase.proximosJogos.forEach(jogo => {
        resposta += `🆚 vs ${jogo.adversario}\n`;
        resposta += `📅 ${jogo.data} @ ${jogo.horario}\n`;
        resposta += `🏆 ${jogo.evento}\n\n`;
    });
    return resposta;
}

function formatarResultados() {
    let resposta = "📊 ÚLTIMOS RESULTADOS 📊\n\n";
    furiaDatabase.resultados.forEach(jogo => {
        const emoji = jogo.placar.includes("2") ? "✅" : "❌";
        resposta += `${emoji} ${jogo.evento}\n`;
        resposta += `${jogo.adversario} ${jogo.placar}\n`;
        resposta += `⭐ Destaque: ${jogo.destaques.join(", ")}\n\n`;
    });
    return resposta;
}

function formatarJogador(nome) {
    const jogador = furiaDatabase.jogadores.find(j => j.nome === nome);
    if (!jogador) return "Jogador não encontrado!";
    
    return `🎯 ${jogador.nome} (${jogador.funcao})\n` +
           `⭐ Rating: ${jogador.rating}\n` +
           `🔫 Headshots: ${jogador.headshots}\n` +
           `💡 Estilo: ${jogador.estilo}\n` +
           `📊 Kills últimos 3 meses: ${jogador.kills}`;
}

function formatarCuriosidade() {
    const randomIndex = Math.floor(Math.random() * furiaDatabase.curiosidades.length);
    return `💡 Curiosidade FURIA:\n\n"${furiaDatabase.curiosidades[randomIndex]}"`;
}

function getRandomResponse() {
    const respostas = [
        "Fala furioso! Que tal perguntar sobre o elenco ou próximos jogos?",
        "Tô na vibe da FURIA! Quer saber dos jogadores ou resultados recentes?",
        "🔴⚔️ Posso te contar sobre:\n- Elenco\n- Próximos jogos\n- Estatísticas\n- Curiosidades!",
        "Não entendi... Pergunte sobre 'jogadores', 'torneios' ou 'estratégia'!"
    ];
    return respostas[Math.floor(Math.random() * respostas.length)];
}

// ======================================
// CONFIGURAÇÃO INICIAL DO CHAT
// ======================================
document.addEventListener('DOMContentLoaded', function() {
    // Configura o botão de enviar
    document.getElementById('send-btn').addEventListener('click', sendMessage);
    
    // Configura o Enter para enviar
    document.getElementById('user-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Mensagem de boas-vindas
    setTimeout(() => {
        addBotMessage("Fala furioso! 🔥 Sou o bot oficial da FURIA (versão 2025)! Posso te contar sobre:\n" +
                     "👉 Elenco atual\n🗓 Próximos jogos\n📊 Estatísticas\n💡 Curiosidades!\n\n" +
                     "O que você quer saber?");
    }, 800);
});

// ======================================
// FUNÇÃO PARA ENVIAR MENSAGENS
// ======================================
async function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    
    if (message) {
        addUserMessage(message);
        userInput.value = '';
        showTypingIndicator();
        
        // Pequeno delay para simular processamento
        setTimeout(() => {
            removeTypingIndicator();
            const resposta = gerarResposta(message);
            addBotMessage(resposta);
        }, 1000);
    }
}