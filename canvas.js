class Canvas {
  constructor () {
    this.link = document.getElementById('canvas');
    this.ctx = this.link.getContext('2d');
  }
}

let _canvas = new Canvas();