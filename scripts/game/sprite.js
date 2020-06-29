class Sprite {
    constructor(image, lineImages, totalImages) {
        this.image = image;
        this.lineImages = lineImages;
        this.totalImages = totalImages;
        this.width = this.image.width / this.lineImages;
        this.height = this.image.height / Math.ceil(this.totalImages / this.lineImages);
        this.matrix = this.matrix();
    }

    matrix() {
        const linesCompleted = Math.trunc(this.totalImages / this.lineImages);
        const columns = this.lineImages;
        let matrix = [];
        for(let i = 0; i < linesCompleted; i++) {
            for(let j = 0; j < columns; j++) {
                matrix.push([this.width * j, this.height * i]);
            }
        }

        if (this.totalImages % this.lineImages !== 0) {
            const remainder = this.totalImages - (this.lineImages * linesCompleted);
            for (let i = 0; i < remainder; i++) {
                matrix.push([this.width * i, this.height * linesCompleted]);
            }
        }
        return matrix;
    }

}