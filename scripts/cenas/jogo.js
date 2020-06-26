class Game {
    constructor() {
        this.index = 0;
        this.map = JSON.parse(JSON.stringify(fita.map));
    }

    setup() {
        cenario = new Background(imagemCenario, 3);
        pontoacao = new Puntuation();
        vida = new Life(fita.configurations.lifeMax, fita.configurations.life);

        personagem = new Character(matrizPersonagem, imagemPersonagem, 50, 30, 110, 135, 220, 270);
        const inimigo = new Enemy(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
        const inimigoVoador = new Enemy(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);
        const inimigoGrande = new Enemy(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 15);
        
        inimigos.push(inimigo);
        inimigos.push(inimigoVoador);
        inimigos.push(inimigoGrande);
        
        somDoJogo.loop();
    }

    keyPressed(key) {
        if (key === 'ArrowUp' || key === ' ') {
            personagem.jump();
        }

        if (key === 'Enter') {
            if (vida.lifes == 0) {
                window.location.reload();
            }
        }
    }

    draw() {
        cenario.show();
        cenario.move();

        vida.draw();

        pontoacao.show();
        pontoacao.addPoint();

        personagem.show();
        personagem.applyGravity();

        const stage = this.map[this.index];

        const inimigo = inimigos[stage.enemy];
        //Check if Enemy is entirely out of screen
        const inimigoVisivel = inimigo.x < - inimigo.width; 
        
        inimigo.speed = stage.speed;

        inimigo.show();
        inimigo.move();


        if (inimigoVisivel) {
            this.index++;
            inimigo.shows();
            if (this.index > this.map.length - 1) {
                this.index = 0;
            }
        }

        if (personagem.isColliding(inimigo)) {
            console.log('Colidiu!');
            vida.loseLife();
            personagem.makeInvincible();
            somPerdeVida.play();
            if (vida.lifes == 0) {
                somDoJogo.stop();
                somDoGameOver.play();
                image(imagemGameOver,  width / 2 - imagemGameOver.width / 2, height / 2 - imagemGameOver.height / 2);
                textAlign(CENTER);
                text('Play ENTER to play again.', width / 2, height / 2 + 100 );
                noLoop();
            }
        }
    }
    
}