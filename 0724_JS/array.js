const object = {
    name : 'ㅂㅇㄹ',
    price : 10000000,
    publisher : '울'
}

object.name = object.name !== undefined ? object.name : '제목 미정'
object.author = object.author !== undefined ? object.author : '저자 미상'

console.log(JSON.stringify(object, null, 2))