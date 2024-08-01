class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    textIntroduce() {
        return `안녕하세요. 제 이름은 ${this.name}이고, 나이는 ${this.age}살 입니다.`;
    }
}

const person1 = new Person('배우리', 26);
console.log(person1.textIntroduce());
