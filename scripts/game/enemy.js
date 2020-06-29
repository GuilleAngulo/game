class Enemy extends Animation {
    constructor(sprite, x, positionY, widthCharacter, heightCharacter, speed = 10, delay = 0) {
        super(sprite, x, positionY, widthCharacter, heightCharacter);    
        
        this.speed = speed;
        this.delay = delay;
        this.x = width + this.delay;
    }

    move() {
        this.x = this.x - this.speed;
    }

    shows() {
        this.x = width;
    }
}