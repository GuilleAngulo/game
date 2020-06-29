function preload() {
    /** ENEMIES MAP */
    gameMap = loadJSON('map/game.json');

    /** IMAGES */
    forestImage = loadImage('images/scenario/forest.png');
    homeImage = loadImage('images/scenario/initial-screen.png');
    characterImage = loadImage('images/character/running.png');
    enemyImage = loadImage('images/enemies/enemy.png');
    enemyTrollImage = loadImage('images/enemies/troll.png');
    enemyWingsImage = loadImage('images/enemies/enemy-wings.png');
    gameOverImage = loadImage('images/assets/game-over.png');
    lifeImage = loadImage('images/assets/heart.png');
    
    /** FONTS */
    font = loadFont('images/assets/font.otf');

    /** SOUNDS */
    soundtrack = loadSound('sounds/soundtrack.mp3');
    jumpSound = loadSound('sounds/jump.mp3');
    gameOverSound = loadSound('sounds/game-over.flac');
    loseLifeSound = loadSound('sounds/lose-life.mp3');
  }