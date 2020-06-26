class Enemy extends Animation {
    constructor(matriz, image, x, positionY, widthCharacter, heightCharacter, widthSprite, heightSprite, speed) {
        super(matriz, image, x, positionY, widthCharacter, heightCharacter, widthSprite, heightSprite)
        
        this.speed = speed;
        this.x = width;
    }

    move() {
        this.x = this.x - this.speed;
    }

    shows() {
        this.x = width;
    }
}