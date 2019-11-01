class Controller {
  constructor (canvas, animation) {
    this.buttonStart = document.getElementById('buttonStart');
    this.buttonStop = document.getElementById('buttonStop');
    this.canvas = canvas;
    this.animation = animation;
    this.status;
  }

  _btnDisable(btnStartState, btnStopState) {
    this.buttonStart.disabled = btnStartState;
    this.buttonStop.disabled = btnStopState;
  }

  start() {
    this._reset();
    this.animation.startSquareCreator();
    this.status = true;
    this.canvas.link.addEventListener('mousedown', this.animation.removeSquare.bind(this.animation));
    this._btnDisable(true, false);
    this._animate.call(this);
  }

  stop() {
    this.status = false;
    this.canvas.link.removeEventListener('mousedown', this.animation.removeSquare);
    this._btnDisable(false, true);
    this.animation.stopSquareCreator();
  }

  _reset() {
    this.animation.score.innerHTML = 0;
    this.animation.currentCounter = 0;
    this.animation.arrWithSquare = [];
  }

  _clear() {
    this.canvas.ctx.clearRect(0, 0, this.animation.clientWidth, this.animation.clientHeight);
  }

  _animate() {
    this._clear();
    this.animation.draw();
    this.status ? requestAnimationFrame(this._animate.bind(this)) : this._clear();
  }

}

let controller = new Controller(_canvas, _animation);