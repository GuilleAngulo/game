class Life {
    constructor(total, initial) {
        this.total = total;
        this.initial = initial;
        this.lifes = this.initial;

        this.width = 40;
        this.height = 40;
        this.x = 20;
        this.y = 20;
    }
    
    draw() {
        for(let i = 0; i < this.lifes; i++) {
            const margin = i * 30;
            const position = this.x * (i + 1); 
            image(lifeImage, position + margin, this.y, this.width, this.height);
        }
        
    }

    gainLife() {
        if (this.lifes <= this.total) {
            this.lifes++;
        }
    }

    loseLife() {
        this.lifes--;
    }
        
    
}