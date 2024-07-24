const data = [{
    name : 'A',
    price : 100,
    publisher : 'B'
}, {
    name : 'C',
    price : 200,
    publisher : 'D'
}]

const json = JSON.stringify(data)
console.log(json+'\n')

console.log(JSON.parse(json))