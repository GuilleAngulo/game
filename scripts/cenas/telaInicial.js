class InitialScreen {
    constructor() {

    }

    draw() {
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }

    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto() {
        textFont(fonteTelaInicial);
        textAlign(CENTER);
        textSize(50);
        text('The adventures of', width / 2, height / 5 );
        textSize(150);
        text('Hipsta', width / 2, height / 5 * 1.5);
        textSize(40);
        text('Press SPACE or UP to Jump', width / 2, height / 5 * 2 );
    }

    _botao() {
        botaoGerenciador.y = height / 7 * 5;
        botaoGerenciador.draw();
    }
}