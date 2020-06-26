function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);

  jogo = new Game();
  telaInicial = new InitialScreen();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  };
  botaoGerenciador = new ButtonHandler('Start Game', width / 2, height / 2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}

