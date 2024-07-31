// const users = [
//     { name: "Kim", age: "25" },
//     { name: "Lee", age: "30" },
//     { name: "Park", age: "35" }
// ];

// function fetchUser(index) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (users[index]) {
//                 resolve(users[index]);
//             } else {
//                 reject(new Error('error'));
//             }
//         }, 2000);
//     });
// }

// const fetchUserInfo = async () => {
//     try {
//         const user1 = await fetchUser(0);
//         console.log(`name: ${user1.name}, age: ${user1.age}`);

//         const user2 = await fetchUser(1);
//         console.log(`name: ${user2.name}, age: ${user2.age}`);

//         const user3 = await fetchUser(2);
//         console.log(`name: ${user3.name}, age: ${user3.age}`);
//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchUserInfo();

function userData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = {
                1: {name : 'A', age : 25},
                2: {name : 'A', age : 25},
                3: {name : 'A', age : 25}
            }
            const user = users[userId];
            if(user) {
                resolve(user);
            }else {
                reject('사용자 찾을수 없삼')
            }
        }, 1000);
    })
}

async function getUser(userId) {
    try{
        const userDataGet = await userData(userId);
        console.log(`${userDataGet.name}, ${userDataGet.age}`);
    }catch(e) {
        console.error(e)
    }
}
getUser(4);