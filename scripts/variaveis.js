let imagemCenario;
let imagemPersonagem;
let imagemPersonagemPulando;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;
let imagemTelaInicial;
let imagemVida;

let vida;

let fita;

let fonteTelaInicial;

let cenario;
let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;

let pontoacao;

let somDoJogo;
let somDoPulo;
let somDoGameOver;
let somPerdeVida;

let jogo;
let cenaAtual = 'telaInicial';
let cenas;
let telaInicial;

let botaoGerenciador;

const matrizPersonagem = matriz(220, 270, 4, 4);

const matrizPersonagemPulando = matriz(480, 480, 5, 5);

const matrizInimigo = matriz(104, 104, 4, 7);

const matrizInimigoGrande = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]
const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

const inimigos = [];