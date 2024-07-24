const object = {
    a : 'A',
    b : 'B',
    c : 1010 
}

const { a, c } = object
console.log('속성 이름 그대로 꺼내서 출력')
console.log(a, c)
console.log("")

const { d = a , e = c} = object
console.log('다른 이름으로 속성 꺼내서 출력')
console.log(d, e)
