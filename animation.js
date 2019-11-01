class Animation {
    constructor(square, clientWidth, clientHeight) {
        this.score = document.getElementById('score');
        this.canvas = canvas.link;
        this.clientWidth = clientWidth;
        this.clientHeight = clientHeight;
        this.square = square;
        this.timerID;
        this.currentCounter = 0;
        this.minSecondsUntilSquare = 200;
        this.maxSecondsUntilSquare = 2000;
        this.arrWithSquare = [];
    }

    removeSquare({ offsetX, offsetY }) {
        this.arrWithSquare = this.arrWithSquare.filter(square => {
            const { xPos, yPos } = square;
            if ((offsetX >= xPos && offsetX <= xPos + this.square.squareWidth) && (offsetY >= yPos && offsetY <= yPos + this.square.squareHeight)) {
                this.changeScore(++this.currentCounter);
                return false
            } else return true
        })
    }

    changeScore(counter) {
        this.score.innerHTML = counter;
    }

    startSquareCreator() {
        const square = this.square.createSquare(this.clientWidth);
        this.arrWithSquare.push(square);
        this.square.drawSquare(square, this.square.squareWidth, this.square.squareHeight);
        this.timerID = setTimeout(
            this.startSquareCreator.bind(this),
            this.square.randomizer(this.minSecondsUntilSquare, this.maxSecondsUntilSquare)
        );
    }

    stopSquareCreator() {
        clearTimeout(this.timerID);
    }

    draw() {
        this.arrWithSquare = this.arrWithSquare
            .filter(({ yPos }) => yPos < this.clientHeight)
            .map(({ xPos, yPos, speed, color }) => ({ xPos, yPos: yPos + speed, speed, color }));
        this.arrWithSquare.forEach(square => this.square.drawSquare(square, this.square.squareWidth, this.square.squareHeight));

    }

}

let _animation = new Animation(_square, _canvas.link.clientWidth, _canvas.link.clientHeight);