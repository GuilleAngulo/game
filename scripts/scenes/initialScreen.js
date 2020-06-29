class InitialScreen {
    constructor() {}

    draw() {
        this._backgroundImage();
        this._text();
        this._button();
    }

    _backgroundImage() {
        image(homeImage, 0, 0, width, height);
    }

    _text() {
        textFont(font);
        textAlign(CENTER);
        textSize(50);
        text('The adventures of', width / 2, height / 6 );
        textSize(150);
        text('Witch', width / 2, height / 5 * 1.5);
        textSize(40);
        text('Press SPACE or UP to Jump', width / 2, height / 5 * 2 );
    }

    _button() {
        playButton.y = height / 7 * 5;
        playButton.draw();
    }
}