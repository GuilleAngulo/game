function preload() {
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');
    imagemPersonagemPulando = loadImage('imagens/personagem/pular.png');
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    imagemTelaInicial = loadImage('imagens/cenario/initial-screen.png');
    imagemVida = loadImage('imagens/assets/heart.png');
    
    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
    
    fita = loadJSON('cartucho/fita.json');

    somDoJogo = loadSound('sons/trilha_jogo.mp3');
    somDoPulo = loadSound('sons/somPulo.mp3');
    somDoGameOver = loadSound('sons/game-over.flac');
    somPerdeVida = loadSound('sons/loseLife.mp3');
  }