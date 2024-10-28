const ver = "V3.0.2 - GOD-LIKE EDITION";

// Detecção de dispositivo com mensagem personalizada
let device = {
    mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|Mobile|Tablet|Kindle|Silk|PlayBook|BB10/i.test(navigator.userAgent),
    apple: /iPhone|iPad|iPod|Macintosh|Mac OS X/i.test(navigator.userAgent)
};

let user = {
    username: "@Dev.godoy",
    nickname: "Dev_Godoy",
    UID: 123456
};

let loadedPlugins = [];

// Elementos
const dropdownMenu = document.createElement('dropDownMenu');
const splashScreen = document.createElement('splashScreen');

// Funções Globais (spoofs e hacks)
window.features = {
    questionSpoof: true,
    videoSpoof: true,
    showAnswers: false,
    autoAnswer: false,
    customBanner: false,
    nextRecomendation: false,
    repeatQuestion: false,
    minuteFarmer: false,
    rgbLogo: false
};

// Segurança: Prevenindo devtools e botão direito
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J'))) e.preventDefault();
});

// Estilos - Visual novo e chamativo
document.head.appendChild(Object.assign(document.createElement("style"), { innerHTML: `
    body { background-color: #1a1a1d; color: #e6e6e6; font-family: 'Roboto Mono', monospace; }
    h1, h2 { color: #ff7f50; text-shadow: 1px 1px 8px #ff4500; }
    a { color: #00b09b; text-decoration: underline; }
    #splashScreen { background-color: rgba(40, 44, 52, 0.95); color: #ffffff; padding: 50px; text-align: center; }
    #splashScreen h1 { font-size: 2em; color: #f4b400; }
` }));

// Função de notificação com toque engraçado
const sendToast = (message) => {
    Toastify({ text: `🔥 ${message} 🔥`, duration: 4000, style: { background: "linear-gradient(to right, #f46b45, #eea849)" } }).showToast();
};

// Função de tela de splash personalizada
const showSplashScreen = () => {
    splashScreen.innerHTML = `<h1>Khanware ${ver}</h1><p>Desenvolvido por <a href="#">@Dev.godoy</a> - Te levei pro próximo nível! 💥</p>`;
    document.body.appendChild(splashScreen);
};

const hideSplashScreen = () => {
    splashScreen.remove();
};

// Menu de configurações com visual novo e ícones engraçados
const setupMenu = () => {
    dropdownMenu.innerHTML = `
        <h2>Khanware ${ver} - 🎮 Modo Hackativado 🎮</h2>
        <ul>
            <li><a href="#" id="spoof-question">Spoof Question 🌐</a></li>
            <li><a href="#" id="auto-answer">Auto Answer 🤖</a></li>
        </ul>
    `;
    document.body.appendChild(dropdownMenu);
};

// Função de Auto Answer com loop infinito
const autoAnswer = async () => {
    while (true) {
        if (features.autoAnswer) {
            // Lógica de resposta automática
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
};

// Injetar script apenas no site do Khan Academy
if (!/^https?:\/\/pt\.khanacademy\.org/.test(window.location.href)) {
    alert("❌ Khanware Falhou ao Injetar! Somente no site do Khan Academy, parceiro!");
    window.location.href = "https://pt.khanacademy.org/";
}

// Executa funções ao carregar
showSplashScreen();
sendToast("🌐 Khanware hackativado com sucesso! Tá na mão, @Dev.godoy!");
hideSplashScreen();
setupMenu();
autoAnswer();
