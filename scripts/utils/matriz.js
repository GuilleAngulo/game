function matriz(width, height, x, y) {
    let matriz = [];
    for(let i = 0; i <= y - 1; i++) {
        for(let j = 0; j <= x - 1; j++) {
            matriz.push([width * j, height * i]);
        }
    }
    console.log(matriz);
    return matriz;
}

