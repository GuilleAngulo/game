function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);

  game = new Game();
  initialScreen = new InitialScreen();
  game.setup();
  scenes = {
    game,
    initialScreen
  };
  playButton = new PlayButton('Start Game', width / 2, height / 2);
}

function keyPressed() {
  game.keyPressed(key);
}

function draw() {
  scenes[actualScene].draw();
}

