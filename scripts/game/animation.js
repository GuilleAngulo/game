class Animation {
    constructor(sprite, positionX, positionY, widthCharacter, heightCharacter) {
        this.matrix = sprite.matrix;
        this.image = sprite.image;
        this.width = widthCharacter;
        this.height = heightCharacter;
        this.x = positionX;
        this.positionY = positionY;
        this.y = height - this.height - this.positionY;
        this.widthSprite = sprite.width;
        this.heightSprite = sprite.height;

        this.actualFrame = 0;
    }

    show() {
        image(this.image, 
            this.x, this.y, 
            this.width, this.height, 
            this.matrix[this.actualFrame][0], 
            this.matrix[this.actualFrame][1], 
            this.widthSprite, this.heightSprite);
        
        this.animate();
    }

    animate() {
        this.actualFrame >= this.matrix.length - 1 ? this.actualFrame = 0 : this.actualFrame++;
    }

    setAnimation(matrix, image) {
        this.matrix = matrix;
        this.image = image;
    }
}