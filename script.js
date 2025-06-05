//Mensagem que aparece ao clicar no botão

function mostrarMensagem() {
    document.getElementById("mensagem").innerText = "Você é a melhor parte da minha vida. Te Amo Muito! 💘"
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
    "Estar contigo é viver no melhor lugar do mundo. 🌎✨"
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
        "Nosso primeiro casamento juntos ❤️",
        "O momento em que sorri no teu olhar 😍",
        "Aquele passeio que ficou no coração 💖",
        "Eu fico perdido na sua beleza 🌹"
        
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