let imgRaiko = document.querySelector(".imagem-raiko");

// Caminhos das imagens
let imagemOriginal = "imagens/raiko.png";
let imagemAlternativa = "imagens/haise.png";

// Estado de controle
let imagemAtual = imagemOriginal;

function alternarImagem() {
    imgRaiko.classList.add("troca-efeito");

    setTimeout(() => {
        // Alterna entre a imagem original e a alternativa
        if (imagemAtual === imagemOriginal) {
            imgRaiko.src = imagemAlternativa;
            imagemAtual = imagemAlternativa;
        } else {
            imgRaiko.src = imagemOriginal;
            imagemAtual = imagemOriginal;
        }

        imgRaiko.classList.remove("troca-efeito");
    }, 500);
}


let imgWilam = document.querySelector(".imagem-william");


let imagemOriginalWilam = "imagens/William.png";
let imagemAlternativaWilam = "imagens/Yhwach.png";


let imagemAtualWilam = imagemOriginalWilam;

function alternarImagem2() {
    imgWilam.classList.add("troca-efeito");

    setTimeout(() => {
        
        if (imagemAtualWilam === imagemOriginalWilam) {
            imgWilam.src = imagemAlternativaWilam;
            imagemAtualWilam = imagemAlternativaWilam;
        } else {
            imgWilam.src = imagemOriginalWilam;
            imagemAtualWilam = imagemOriginalWilam;
        }

        imgWilam.classList.remove("troca-efeito");
    }, 500);
}

