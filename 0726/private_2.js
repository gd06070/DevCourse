class Square {
    #length

    constructor (length) {
        if(length <= 0) {
            throw `길이는 0보다 커야 합니다`
        }
        this.#length = length
    }
   getParameter() { return 4*this.#length}
   getArea() { return this.#length * this.#length }
}

const sq = new Square(10)
sq.length = -10
console.log(`둘레: ${sq.getParameter()}`)
console.log(`넓이 : ${sq.getArea()}`)