const array1 = [1,2,3,4,5]
const array2 = [4,5,6,7,8]
const newArr=[...array1, ...array2]

const newArr2 = [...new Set(newArr)]

console.log(newArr2)