//Mensagem que aparece ao clicar no botão

function mostrarMensagem() {
    document.getElementById("mensagem").innerText = "Ei, amor... Se você chegou até aqui, é porque o meu coração quis te lembrar de uma coisa: Você é muito importante pra mim. Eu criei esse cantinho com carinho, só pra te mostrar em cada detalhe o quanto você é especial pra mim. Já são quase 3 anos ao seu lado… e mesmo assim, ainda me pego sorrindo do nada só de lembrar que tenho você. Obrigado por existir, por me amar, por ser exatamente quem você é. Esse site é só um pedacinho do que meu coração sente por você. 💘"
}

//Contador de dias juntos
const dataInicio = new Date("2022-12-20"); //Nossa data de Namoro
const hoje = new Date();
const diff = hoje - dataInicio;
const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
document.getElementById("dias").innerText = dias;


//Vídeo clip
const musica = document.getElementById("musica");
const video = document.getElementById("clip");
const btnTocar = document.getElementById("btnTocar");

btnTocar.addEventListener("click", () => {
  if (musica.paused && video.paused) {
    musica.play();
    video.style.display = "block";
    video.play();
    btnTocar.innerText = "Pausar Música⏸️";
  } else {
    musica.pause();
    video.pause();
    btnTocar.innerText = "Contínuar Música▶️";
  }
});

//Cartinhas
const mensagens = [
     "Você é meu amor eterno, minha luz e minha paz! 💕",
    "Cada momento ao seu lado é um presente precioso. 🎁",
    "Te amar é a melhor coisa que já me aconteceu! ❤️",
    "Seu sorriso ilumina até os meus dias mais nublados. ☀️",
    "Com você, eu quero construir todos os meus sonhos. 🏠💍",
    "Você é a razão de cada batida do meu coração. 💓",
    "Estar contigo é viver no melhor lugar do mundo. 🌎✨",
    "Você é meu lar sempre. 🏡",
    "Te amo mais que ontem. ❤️",
    "Meu coração é todo seu. 💘",
    "Com você, tudo faz sentido. ✨",
    "Seu sorriso é meu refúgio. 😊",
    "Nosso amor é infinito, sabia? ♾️",
    "Só quero você pra sempre. 💑",
    "Amar você é tão fácil. 💕",
    "Você é minha melhor parte. 🧩",
    "Contigo, a vida é leve. 🌷",
    "Seu beijo é meu vício. 😘",
    "Obrigado por me escolher sempre. 🌟",
    "Você me completa de verdade. 🥰",
    "Juntos somos perfeitos demais, né? 😍",
    "Te amo sem explicação possível. 💖"
];

document.getElementById("btnCartinha").addEventListener("click", () => {
    const cartinha = document.getElementById("cartinhas");
    //Aplica a classe fade para aplicar transição
    cartinha.classList.add("fade");

    //Espera o fade-out, troca a mensagem e faz fade-in
    setTimeout(() => {
        const aleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
        cartinha.innerText = aleatoria;

        //Remove a classe para iniciar o fade-in
        cartinha.classList.remove("fade");
    }, 500); //Mesmo tempo que o css transition

})

// Controle do Carrossel de fotos e as legendas

document.addEventListener("DOMContentLoaded", () => {
    const slide = document.querySelectorAll(".slide");
    const btnPrev = document.getElementById("prev");
    const btnNext = document.getElementById("next");
    const legenda = document.getElementById("legenda");

    const legendas = [
        "O momento e a emoção que nunca vamos esquecer!💛",
        "O momento em que sorri no teu olhar 😍",
        "Aquele passeio que ficou no coração 💖",
        "Nosso primeiro casamento juntos ❤️",
        "Eu fico perdido na sua beleza 🌹",
        "Te amo em cada cachinho seu 🫶",
        "Nosso amor é leve 🤍🌙",
        "Meu crush de todos os dias 😍📆",
        "Casalzão da p*rra 😎🔥"
        
    ];

    let current = 0;

    function showSlide(index) {
        slide.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });

   // Remove a animação antiga
        legenda.classList.remove("mostrar");

        // Aguarda a animação sair e mostra a nova legenda
        setTimeout(() => {
            legenda.innerText = legendas[index];
            legenda.classList.add("mostrar");
        }, 200); // tempo da transição (ajustável)
    }

    btnPrev.addEventListener("click", () => {
        current = (current === 0) ? slide.length - 1 : current - 1;
        showSlide(current);
    });

    btnNext.addEventListener("click", () => {
        current = (current === slide.length - 1) ? 0 : current + 1;
        showSlide(current);
    });

    showSlide(current);
});

// botão voltar
const voltarBtn = document.getElementById('btn-voltar');

function showResult() {
  quizEl.style.display = 'none';
  resultEl.innerHTML = `
    <p>Você acertou ${score} de ${quizData.length} perguntas! ❤️</p>
  `;
  voltarBtn.style.display = 'inline-block';
}