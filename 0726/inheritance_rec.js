class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }

  getParameter() {
    return 2 * (this.w + this.h);
  }

  getArea() {
    return this.w * this.h;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

const square = new Square(10, 20);
console.log(`정사각형의 둘레 : ${square.getParameter()}`);
console.log(`정사각형의 넓이 : ${square.getArea()}`);
