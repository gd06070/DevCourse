// person 객체 생성
const person = {
    name: '배우리',
    age: 26
};

// 구조 분해 할당을 통해 person 객체의 속성을 변수에 저장
const { name: userName, age: userAge } = person;

// 변수 값을 활용하여 문자열 출력
console.log(`이름: ${userName}, 나이: ${userAge}`);
