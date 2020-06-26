class Puntuation {
    constructor() {
        this.points = 0;
    }

    show() {
        textAlign(RIGHT);
        fill('#FFF');
        textSize(40);
        text(parseInt(this.points), width - 30, 50);
    }

    addPoint() {
        this.points += 0.2;
    }
}