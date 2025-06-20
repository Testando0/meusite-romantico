//Mensagem que aparece ao clicar no botão

function mostrarMensagem() {
    document.getElementById("mensagem").innerText = "Ei, Amor... Se Você Chegou Até Aqui, É Porque O Meu Coração Quis Te Lembrar De Uma Coisa: Você É Muito Importante Para Mim. Eu Fiz Esse Cantinho Com Carinho, Só Para Te Mostrar Em Cada Detalhe O Quanto Você É Especial Para Mim. 💘"
}

//Contador de dias juntos
const dataInicio = new Date("2025-06-16"); //Nossa data de Namoro
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
     "Você É Meu Amor Eterno, Minha Luz E Minha Paz! 💕",
    "Cada Momento Com Você É Um Presente Precioso. 🎁",
    "Te Amar É A Melhor Coisa Que Já Me Aconteceu! ❤️",
    "Seu Sorriso Ilumina Até Os Meus Dias Mais Nublados. ☀️",
    "Com Você, Eu Quero Construir Todos Os Meus Sonhos. 🏠💍",
    "Você É A Razão De Cada Batida Do Meu Coração. 💓",
    "Estar Contigo É Viver No Melhor Lugar Do Mundo. 🌎✨",
    "Você É Meu Lar Sempre. 🏡",
    "Te Amo Mais Que Ontem. ❤️",
    "Meu Coração É Todo Seu. 💘",
    "Com Você, Tudo Faz Sentido. ✨",
    "Seu Sorriso É Meu Refúgio. 😊",
    "Nosso Amor É Infinito, Sabia? ♾️",
    "Só Quero Você Para Sempre. 💑",
    "Amar Você É Tão Fácil. 💕",
    "Você É Minha Melhor Parte. 🧩",
    "Contigo, A Vida É Leve. 🌷",
    "Obrigado Por Me Escolher Sempre. 🌟",
    "Você Me Completa De Verdade. 🥰",
    "Juntos Somos Perfeitos Demais, Né? 😍",
    "Te Amo Sem Explicação Possível. 💖"
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
        "O Momento É A Emoção Que Nunca Vamos Esquecer!💛",
        "O Momento Em Que Sorri No Teu Olhar 😍",
        "Aquele Momento Que Ficou No Coração 💖",
        "Nosso Primeiro Momento Juntos ❤️",
        "Eu Fico Perdido Na Sua Beleza 🌹",
        "Te Amo Em Cada Detalhezinho Seu 🫶",
        "Nosso Amor É Leve 🤍🌙",
        "Meu Crush De Todos Os Dias 😍📆",
        "Casalzão Da P*rra 😎🔥"
        
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
    <p>Você Acertou ${score} De ${quizData.length} Perguntas! ❤️</p>
  `;
  voltarBtn.style.display = 'inline-block';
}
