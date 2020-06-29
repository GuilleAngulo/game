class Game {
    constructor() {
        this.index = 0;
        this.map = JSON.parse(JSON.stringify(gameMap.map));
        this.paused = false;
    }

    setup() {
        background = new Background(forestImage, 3);
        puntuation = new Puntuation();
        life = new Life(gameMap.configurations.lifeMax, gameMap.configurations.life);
        const spriteCharacter = new Sprite(characterImage, 4, 16);
        const spriteEnemy = new Sprite(enemyImage, 4, 28);
        const spriteEnemyWings = new Sprite(enemyWingsImage, 3, 16);
        const spriteTroll = new Sprite(enemyTrollImage, 5, 28);
        
        character = new Character(spriteCharacter, 50, 30, 110, 135);
        const enemy = new Enemy(spriteEnemy, width - 52, 30, 52, 52);
        const enemyWings = new Enemy(spriteEnemyWings, width - 52, 200, 100, 75);
        const enemyTroll = new Enemy(spriteTroll, width, 0, 200, 200);

        enemies.push(enemy);
        enemies.push(enemyWings);
        enemies.push(enemyTroll);
        
        soundtrack.loop();
    }

    keyPressed(key) {
        if (key === 'ArrowUp' || key === ' ') {
            character.jump();
        }

        if (key === 'Enter') {
            if (life.lifes == 0) {
                window.location.reload();
            }
        }

        if (key === 'Escape') {
            if (life.lifes > 0) {
                this.paused = !this.paused;
                this.paused ? this.pause() : this.resume();
            }
        }
    }

    draw() {
        background.show();
        background.move();

        life.draw();

        puntuation.show();
        puntuation.addPoint();

        character.show();
        character.applyGravity();

        const stage = this.map[this.index];

        const enemy = enemies[stage.enemy];
        //Check if Enemy is entirely out of screen
        const visibleEnemy = enemy.x < - enemy.width; 
        
        enemy.speed = stage.speed;

        enemy.show();
        enemy.move();


        if (visibleEnemy) {
            this.index++;
            enemy.shows();
            if (this.index > this.map.length - 1) {
                this.index = 0;
            }
        }

        if (character.isColliding(enemy)) {
            console.log('Colidiu!');
            life.loseLife();
            character.makeInvincible();
            loseLifeSound.play();
            if (life.lifes == 0) {
                this.gameOver();
            }
        }
    }

    pause() {
        soundtrack.stop();
        noLoop();
    }

    resume() {
        soundtrack.loop();
        loop();
    }

    gameOver() {
        soundtrack.stop();
        gameOverSound.play();
        image(gameOverImage,  width / 2 - gameOverImage.width / 2, height / 2 - gameOverImage.height / 2);
        textAlign(CENTER);
        text('Play ENTER to play again.', width / 2, height / 2 + 100 );
        noLoop();
    }
    
}