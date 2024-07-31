// const pro_five = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('5')
//     },1000);
// });

// const pro_10 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(pro_five * 10)
//     },1500);
// });

// let promises = [promiseA, promiseB];
// if (!pro_five) {
//     console.log('에러')
// } else {
//     Promise.all(promises).then((results) => {
//         console.log("완료", results)
//     })
// }

//강사님 답안
let success = false;
const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(success) {
            resolve(5);
        }else{
            reject('에러!')
        }
    },1000);
});

pro.then(
    num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num * 10);
            }, 1500)
        })
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
    }
)