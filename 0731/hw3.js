// function asyncTask(task) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(task + '완료');
//         }, 2000);
//     });
// }

// function* taskGen() {
//     console.log(yield asyncTask('작업 1'));
//     console.log(yield asyncTask('작업 2'));
//     console.log(yield asyncTask('작업 3'));
// }

// function run(gen) {
//     const iterator = gen();

//     function handle(result) {
//         if (result.done) return;

//         result.value.then(res => {
//             handle(iterator.next(res));
//         }).catch(err => {
//             iterator.throw(err);
//         });
//     }

//     handle(iterator.next());
// }

// run(taskGen);

//강의 답안
function* taskGen() {
    yield new Promise((resolve) => setTimeout(() => resolve('완료1'),2000));
    yield new Promise((resolve) => setTimeout(() => resolve('완료2'),2000));
    yield new Promise((resolve) => setTimeout(() => resolve('완료3'),2000));
}

const taskDisplay = async() => {
    const tasks = taskGen();
    for (let task of tasks) {
        const result = await task;
        console.log(result);
    }
}

taskDisplay();