class Animation {
    constructor(matriz, image, x, positionY, widthCharacter, heightCharacter, widthSprite, heightSprite) {
        this.matriz = matriz;
        this.image = image;
        this.width = widthCharacter;
        this.height = heightCharacter;
        this.x = x;
        this.positionY = positionY;
        this.y = height - this.height - this.positionY;
        this.widthSprite = widthSprite;
        this.heightSprite = heightSprite;

        this.actualFrame = 0;
    }

    show() {
        image(this.image, 
            this.x, this.y, 
            this.width, this.height, 
            this.matriz[this.actualFrame][0], 
            this.matriz[this.actualFrame][1], 
            this.widthSprite, this.heightSprite);
        
        this.animate();
    }

    animate() {
        this.actualFrame >= this.matriz.length - 1 ? this.actualFrame = 0 : this.actualFrame++;
    }

    setAnimation(matriz, image) {
        this.matriz = matriz;
        this.image = image;
    }
}