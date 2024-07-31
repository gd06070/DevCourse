// function callback() {
//     console.log('콜백함수 호출')
// }
// setTimeout(callback, 1000);
// console.log('작업수행')

// function getUsers(callback) {

//     setTimeout(() => {
//         callback(() => [
//             {name : 'Kim', email : 'kim@gmail.com'},
//             {name : 'Lee', email : 'lee@gmail.com'},
//             {name : 'Park', email : 'park@gmail.com'},
//         ])
//         // callback(users)
//     },1000)

//     // return users;
// }

// function findUser(name, callback) {
//     getUsers(users => {
//         const user = users.find(user => user.name === name);
//         callback(user, email);
//     })
//     // const users = getUsers();
//     // const user = users.find(user => user.name === name);

//     // return user;
// }

// let user = findUser("Kim", user => {
//     console.log(user);
// })

// let greeting = document.querySelector('#greeting')
// greeting.addEventListener('click', sayHello);
// function sayHello() {
//     alert('hi')
// }
// let success= true;
//  function getUser() {
//     return new Promise((resolve, react) = {
//         if(success){
//             setTimeout(() => {
//             resolve(
//                 [{name : 'Kim', email : 'kim@gmail.com'},
//             {name : 'Lee', email : 'lee@gmail.com'},
//             {name : 'Park', email : 'park@gmail.com'},
//             ]
//         )
//     },1000);
// }

// const p1 = new Promise((resolve, reject) => setTimeout(() => resolve(10), 2000));
// const p2 = new Promise((resolve, reject) => setTimeout(() => resolve(20), 1000));
// const p3 = new Promise((resolve, reject) => setTimeout(() => reject(30), 3000));
// let promises = [p1, p2, p3]
// Promise.allSettled(promises) //비동기 연산들을 하나로 모으느 작업
// //all을 쓸때에는 하나라도 실패하면 결과 반환 X
// .then(result => {
//     const fulfilledResults = fulfilledResults.filter(result => result.status === 'fulfilled')
//     .map(result => result.value);
//     const total = fulfilledResults.reduce((sum, value) => sum + value);
//     console.log(`결과 : ${fulfilledResults}`); //결과 : 10,20,30
//     console.log(`합계 : ${total}`) //합계 : 60
// })

// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(
//         [
//             { name: "Kim", email: "kim@gmail.com" },
//             { name: "Lee", email: "lee@gmail.com" },
//             { name: "Park", email: "park@gmail.com" }
//         ]
//       )
//     },1000);
//   });
// }

// function findUser(users) {
//     return new Promise((resolve, reject) => {
//         // console.log(users);
//         setTimeout(() => {
//             resolve(users.find(user => user.name === 'Kim'))
//         }, 1000);
//     })
// }

// function getEmail(user) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(user.email)
//         }, 3000);
//     })
// }

// getUser()
// .then(findUser)
// .then(getEmail)
// .then(console.log)

// async function sayHello() {
//     return '안녕'
// }
// // const greeter = new greeter();
// // greeter.sayHello()
// sayHello()
// .then(console.log)
// async function sayHello() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve('안녕'))
//     })
// }
// sayHello()
// .then(console.log)

// async function sayHello() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => resolve('거부'), 1000);
//     })
// }

// async function display() {
//     try {
//         let result = await sayHello();
//         console.log(result);
//     } catch (e) {
//         console.log(e)
//     }
// }

// display();

//제너레이터 바로 전에 user써서 하는 실습 못함

const myPromise = () => new Promise((resolve,reject) => {
    resolve('value is');
});

function* gen() {
    let result = "";
    yield myPromise().then(data => {result = data});
    yield result + '1';
}

const asyncFunc = gen();
const val1 = asyncFunc.next();
console.log(val1);

val1.value.then(() => {
    console.log(asyncFunc.next());
})