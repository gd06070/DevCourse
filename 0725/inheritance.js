class Rectangle {
    constructor (w,h) {
        this.w = w
        this.h = h
    }

    getParameter () {
        return 2 * (this.w + this.h)
    }

    getArea() {
        return this.w * this.h
    }
}

const rectangle = new Rectangle(10,20)
console.log(`사각형의 둘레 : ${rectangle.getParameter()}`)
console.log(`사각형의 넓이 : ${rectangle.getArea()}`)