let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarros;
let soundBackground;
let soundScore;
let soundCollision;
let soundGood;

function preload(){
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/raccoon.png");
    imagemCarro = loadImage("imagens/carro-1.png");
    imagemCarro2 = loadImage("imagens/carro-2.png");
    imagemCarro3 = loadImage("imagens/carro-3.png");
    imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
    soundBackground = loadSound("sons/trilha.mp3");
    soundScore = loadSound("sons/pontos.wav");
    soundCollision = loadSound("sons/colidiu.mp3");
    soundGood = loadSound("sons/good.mp3");
};

 function chuva() {
    // Criando novas imagens
    soundGood.play();
    for (let i = 0; i < 50; i++) {
        let novaImagem = document.createElement("img");
        novaImagem.src = "./imagens/Walking_Raccoon.png";
        novaImagem.style.width = "50px";
        novaImagem.style.position = "absolute";
        novaImagem.style.left = Math.random() * window.innerWidth + "px";
        novaImagem.style.top = Math.random() * window.innerHeight + "px";
        document.body.appendChild(novaImagem);
    
        // Atualizando posição da imagem a cada 10ms
        var intervalo = setInterval(function() {
          // Movendo a imagem para baixo
          var topAtual = parseFloat(novaImagem.style.top);
          novaImagem.style.top = (topAtual + 5) + "px";
    
          // Verificando se a imagem saiu da tela e removendo-a
          if (topAtual > window.innerHeight) {
            clearInterval(intervalo);
            novaImagem.remove();
          }
        }, 10);
      }
    }