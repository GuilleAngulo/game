class PlayButton {
    constructor(text, x, y) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.button = createButton(this.text);
        this.button.mousePressed(() => this._setScene());
        this.button.addClass('start-button');
    }

    draw() {
        this.button.position(this.x, this.y);
        this.button.center('horizontal');
    }

    _setScene() {
        this.button.remove();
        actualScene = 'game';
    }
}