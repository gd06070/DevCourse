// const me = [1, 2, 3, 4, 5]
// console.log(me);

// let carSales = [300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620, 500, 450]
// console.log(carSales);

// // let carSales2 = new Array(300, 350, 400, 450, 500, 600, 650, 580, 620, 580, 620, 500, 620, 450);

// // let copy = Array.from(carSales);
// // console.log(copy);

// let concat = [0, carSales, 300, 500];
// console.log(concat);

// let numbers = [..."0123456789"];
// console.log(numbers)

// let may = carSales[4];
// console.log(may);
// let june = carSales["5"];
// console.log(june);

// carSales[12] = -50;
// console.log(carSales); //12번째 인덱스에 -50 들어가잇음

// let a = [1, 2, 3, 4, 5]
// let len = a.length
// console.log(len); //5 출력
// a.length = 0;
// console.log(a);

// let jan, fab, mar, rest;
// [jan, fab, mar, ...rest] =carSales;
// console.log(jan, fab, mar);
// console.log(rest);

// let sum = 0;
// for (let sale of carSales)
//     sum += sale;
// let avg = sum / carSales.length;
// let roundedAvg = avg.toFixed(2); //소수점 둘째 자리까지
// console.log(avg);
// console.log(roundedAvg); 

// let sum = 0;
// for (let [index, sale] of carSales.entries()) {
//     if (index % 2 === 0)
//         sum += sale;
// }
// let avg = sum / (carSales.length / 2);
// console.log(avg);

// let list = [4, 5, 6];
// for (let i in list) {
//     console.log(i); // 0 1 2 출력 : 인덱스(키) 반환
// }

// for (let i of list) {
//     console.log(i); // 4 5 6 출력 : 값 반환
// }

// const car = {
//     maker : "Perari",
//     color : "white",
//     year : "2012"
// }

// for (let prop in car) {
//     console.log(prop);
// } // for in은 이터러블로 출력가능 for of 가 안돼

// let sum = 0;
// carSales.forEach(sale => {sum += sale});
// let avg = sum/carSales.length;
// console.log(avg);

// carSales.forEach((sale, index, array) => {array[index] = sale + 50});
// console.log(carSales);

// let newCarSales = carSales.map(sale => sale + 50);
// console.log(newCarSales);
// console.log(carSales);

// let highSales = carSales.filter(sale => sale > 500);
// console.log(highSales);

// let evenSales = carSales.filter((sale, index) => index % 2 === 1);
// console.log(evenSales);

// let firstSaleSix = carSales.find(sale => sale > 600);
// console.log(firstSaleSix); // 650 출력 => 해당 값 반환
// let firstSaleSixIndex = carSales.findIndex(sale => sale > 600);
// console.log(firstSaleSixIndex); // 6 출력 => 해당 값 인덱스 반환

// let allsaleSix = carSales.every(sale => sale > 600);
// console.log(allsaleSix);
// let anysaleSix = carSales.some(sale => sale > 600);
// console.log(anysaleSix);

// let sum = carSales.reduce((t1, t2) => t1 + t2, 0); //0은 0부터 시작해준단 얘기
// console.log(sum);
// let avg = sum / carSales.length;
// console.log(avg);

// let carSales = [300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620, 500, 450]
// let highest = carSales.reduce((t1,t2) => (t1 > t2 ? t1 : t2));
// console.log(highest);

// let flat = [1, [2, 3]].flat();
// console.log(flat); //[ 1, 2, 3 ] 출력 => 이중 배열도 다 풀어서 출력됨

// let message = ["오늘은", "비가 옵니다"];
// let words = message.flatMap(msg => msg.split("")); //[ '오', '늘', '은', ,,, ] 출력 -> 문자열도 다 풀어줌
// console.log(words);

// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['d', 'e', 'f'];
// const arr3 = arr1.concat(arr2); // ['a', 'b', 'c', 'd', 'e', 'f'] 출력 -> 배열 두개 합침
// console.log(arr3);

// let original = [1, 2, 3]
// let newArray;
// newArray = original.concat(4, 5);
// newArray = original.concat([4, 5], [6, 7]);
// console.log(newArray);

let stack = [];
// stack.push(1);
// // stack.push(2, 3);
// // stack.pop();

// // stack.push(4);
// // console.log(stack);

// stack.unshift(1);
// stack.unshift(2,3);
// console.log(stack);
// stack.shift();

// numbers = [20, 37, -21, 32, -2]
// numbers = numbers.filter(numbers => numbers>30) //예제1 

// let a= [1,2,3,4,5];
// a.splice(0,2)
// a.splice(2)
// a.splice(0, 2, 10, 20);
// console.log(a)
// let b = a.slice(0,2);
// let c = a.slice(1, -1);
// console.log(b);
// console.log(a);
// console.log(c);

// let a = new Array(5);
// a.fill(0); // 0으로 다 채워짐
// a.fill(1,1); // [1] 부터 1로 채워짐 
// a.fill(1, 1, -1); // 01110 -> [1]부터 [3]까지 1 채워짐 
// console.log(a);

// let a = [0,1,2,3,2,1,0]
// let b = a.indexOf(2);
// let c = a.lastIndexOf(2); 
// let d = a.indexOf(5);
// console.log(d);

// let a = [0, true, 2, false, NaN];
// let b = a.includes(NaN);
// console.log(b);

// let a = ["apple", "cherry", "banana"];
// let b = a.sort();
// console.log(b);

// let c = [22, 333, 121];
// let d = c.sort();
// console.log(d);
// let e = c.sort((a, b) => a - b);
// console.log(e)

// let a = [1, 2, 3]
// let b = a.join(); //문자열로 변환되니까 [] 사라지는겨
// let c = a.join("");
// console.log(c)

// score = [67, 82, 97, 100, 92]
// for (let i = 0; i < score.length; i++) {
//     console.log(i); //html에 출력하려면 document.write(score[i] + '<br>')
// }
// for (let i of score) {
//     console.log(i)
// }

// const tel = ["010", "1234", "5678"];
// console.log(tel.join('-'))

// const colors = ['빨', '노', '파', '주']
// let arr = colors.shift();
// console.log(colors);

// let arr = new Array[2];
// for (let i = 0; i < arr.length; ++i){
//     arr[i] = new Array(3);
// }

// let arr = Array.from(new Array(2), () => new Array(3));
// console.log(arr);

// arr[0][0] = 1;
// arr[0][1] = 2;
// arr[0][2] = 3;
// arr[1][0] = 4;
// arr[1][1] = 5;
// arr[1][2] = 6;
// console.table(arr);

// for(let i = 0; i < arr.length; ++i){
//     for(let j = 0; j < arr[i].length; ++j){
//         console.log(arr[i][j]);
//     }
// }

// const arr1 = [83, 90, 70, 87]
// const arr2 = [87, 93, 62, 83]
// const arr3 = [98, 90, 77, 97]

// sum = 0
// for (let i = 0 ; i < arr1.length; i++){
//     sum += arr1[i]
//     sum += arr2[i]
//     sum += arr3[i]
// }
// console.log(sum)
// console.log(sum/12)

// const mathScores = [90,85,70,86,97];
// let sum = 0;

// for (let i = 0; i < mathScores.length; i++){
//     sum += mathScores[i]; 
// }
// console.log(sum + '\n' + avg)

// for(let mathScore of mathScores){ //다른 방법
//     sum += mathScores;
// }
// avg = sum / 5;
// let text = "";
// text += "합계: " + sum + "<br>";
// text += "평균: " + avg + "<br>";
// document.write(text);

//예제 7 -> find 쓰면 바로 나옴
// tempNumbers = [7, -24, -8, 10, 17, -18]
// tempFind = tempNumbers.find(number => number < 0);
// console.log(tempFind);
// for (let i = 0; i < tempNumbers.length; i++) {
//     if (tempNumbers [i] < 0) {
//         let num = tempNumbers[i]
//         console.log(num);
//         break;
//     } 
// }

//예제 9
// a = [12,0,2,5,4]
// b = [0,2,3,12,8]

// c = []

// b.forEach(element => {
//     if(a.includes(element)) {
//         c.push(element);
//     }
// });
// document.write(c);

// nums = [1,3,5];
// let numsArr = nums.map(num => num*10);
// document.write(numsArr);

// const set = new Set();
// console.log(set);

// const set1 = new Set([1,2,3,3]);
// console.log(set1);

// const uniq = array => [...new Set(array)];
// console.log(uniq([2,1,2,3,4,5,4])); //[2,1,3,4,5] => 중복된 값 제거 후 출력

// const {size} = new Set([1,2,3,3]); //3 => 중복된 값 제거 후 사이즈 출력
// console.log(size);

// const set = new Set();
// set.add(1).add(2);
// console.log(set);

// const set = new Set([1,2,3]);
// // console.log(set.has(2));
// // set.delete(2).delete(1); // 에러남 : delete연속호출 불가능
// set.clear();
// console.log(set); 

// let odds = new Set([1,3,5,7,9]);
// let sum = 0;
// for (let o of odds) {
//     sum+= o;
// }
// console.log(sum);

// let product = 1;
// odds.forEach(o => product *= o);
// console.log(product);

// const userIDs = [101,102,101,103, 102];
// const uniqueUserIDs = new Set(userIDs);
// uniqueUserIDs.forEach(userIDs => {
//     console.log(`ID: ${userIDs}`);
// });

// const tags = ['JavaScript', 'CSS', 'HTML', 'HTML'];
// const uniqueTags = new Set(tags);
// uniqueTags.forEach(tag => {
//     console.log(`tag: ${tag}`);
// });

// const set = new Set([1,2,3]);
// console.log([...set]);
// const [a, ...rest] = set;
// console.log(a, rest);

// let set1 = new Set([1,2,3]);
// let set2 = new Set([4,2,3]);
// let union = new Set([...set1, ...set2]);
// let intersection = new Set([...set1].filter(x => set2.has(x)));
// console.log(intersection);
// let difference = new Set([...set1].filter(x => !set2.has(x)));
// console.log(difference); 

// const set  = "I am a Student";
// const newSet = new Set([...set]);
// console.log(newSet)

// const map1 = new Map([['key1', 'value1'], ['key2', 'value2']]);
// console.log(map1)

// const map2 = new Map([[1, 2]]); // => 대괄호 하나있으면 TypeError: Iterator value 1 is not an entry object 발생
// console.log(map2);

// const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
// console.log(map);

// const {size} = new Map([['key1', 'value1'], ['key2', 'value2']])
// console.log(size)
// const map = new Map();
// map.set('key1', 'value1').set('key2', 'value2'); //연속적으로 호출 가능
// console.log(map)

// const map = new Map();
// const lee = {name: 'Lee'};
// const kim = {name: 'kim'};
// map.set(lee, 'developer').set(kim, 'designer');
// console.log(map.delete(kim));
// console.log(map);

// map.set(lee, 'developer').set(kim, 'designer');
// console.log(map.clear());

// let map = new Map();
// map.set(0, "zero");
// map.set(1, "one");
// map.forEach((value, key) => console.log(key,value));

//예제1
// let scores = new Map([['국어', 85], ['영어', 90], ['수학', 95]]);
// let sum = 0;
// let avg;
// scores.forEach(function(value){
//     sum += value;
// });
// avg = sum/scores.size;

// console.log('합계 : ', sum)
// console.log('평균 : ', avg )

//예제2
let obj = new Map([['title', '유럽 책방 문화 탐구'], ['author', '한미화'], ['price', 23000]])
let text = "";
obj.forEach(function(value, key){
    text += key + ":" + value + "<br>";
})
console.log(text)

//예제4
const arr = [3,7,12,3,12,3];
const numbers = new Set(numbers);
console.log(numbers)

