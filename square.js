class Square {
    constructor(canvas) {
        this.ctx = canvas.ctx;
        this.squareWidth = 25;
        this.squareHeight = 25;
        this.minSpeed = 1;
        this.maxSpeed = 4;
        this.arrayWithColor = ['yellow', 'green', 'red', 'blue', 'orange', 'violet', 'skyblue'];
    }

    randomizer(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    createSquare(clientWidth) {
        const square = {
            xPos: this.randomizer(0, clientWidth - this.squareWidth),
            yPos: 0,
            speed: this.randomizer(this.minSpeed, this.maxSpeed),
            color: this.arrayWithColor[this.randomizer(0, (this.arrayWithColor.length - 1))]
        }
        return square;
    }

    drawSquare(square, squareWidth, squareHeight) {
        this.ctx.beginPath();
        this.ctx.fillStyle = square.color;
        this.ctx.fillRect(square.xPos, square.yPos, squareWidth, squareHeight);
        this.ctx.closePath();
    }
}

const _square = new Square(_canvas);