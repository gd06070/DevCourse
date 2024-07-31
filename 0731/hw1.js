/* function promiseA() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('A');
        }, 1000);
    });
}

function promiseB() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('B');
        }, 2000);
    });
}

Promise.all([promiseA(), promiseB()]).then((results) => {
    console.log(results); // ['A', 'B']
    console.log('완료');
}); */

//강사님 답안
const promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('A 완료')
    },1000);
});

const promiseB = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('B 완료')
    },2000);
});

promiseA()
.then(findUser)
.then(getEmail)
.then(console.log)
