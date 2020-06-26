class Character extends Animation{
    constructor(matriz, image, x, positionY, widthCharacter, heightCharacter, widthSprite, heightSprite) {
        super(matriz, image, x, positionY, widthCharacter, heightCharacter, widthSprite, heightSprite);
        
        this.positionY = positionY;

        this.initialY = height - this.height - this.positionY;
        this.y = this.initialY;

        this.jumpVelocity = 0;
        this.gravity = 6;
        this.jumpHeight = -50;
        this.jumps = 0;
        this.invincible = false;
    }

    jump() {
        if (this.jumps < 2) {
            this.jumpVelocity = this.jumpHeight;
            somDoPulo.play();
            this.jumps++;
        }
    }

    applyGravity() {
        this.y = this.y + this.jumpVelocity;
        this.jumpVelocity = this.jumpVelocity + this.gravity;
        
        if (this.y > this.initialY) {
            this.y = this.initialY;
            this.jumps = 0;
        }
    
    }

    makeInvincible() {
        this.invincible = true;
        setTimeout(() => {
            this.invincible = false
        }, 1000);
    }

    isColliding(inimigo, debug = false) {
        
        if (this.invincible) return false;

        if (debug) {
         noFill();
         ellipse(this.x + this.width / 2, this.y + this.height / 2 , this.width, this.height);
	     ellipse(inimigo.x + inimigo.width / 1.5, inimigo.y + inimigo.height / 2, inimigo.width, inimigo.height);
        }

        const collision = collideCircleCircle(
            this.x + this.width / 2, 
            this.y + this.height / 2, 
            this.width -10, 
            inimigo.x + inimigo.width / 1.5,
            inimigo.y + inimigo.height / 2,
            inimigo.width,
        );

        
        /**
        rect(this.x, this.y, this.width, this.height);
        rect(inimigo.x,inimigo.y,inimigo.width,inimigo.height);
        const precisao = .7;
        const collision = collideRectRect(
            this.x, 
            this.y, 
            this.width * precisao, 
            this.height * precisao,
            inimigo.x,
            inimigo.y,
            inimigo.width * precisao,
            inimigo.height * precisao
        ); */

        return collision;
    }
}