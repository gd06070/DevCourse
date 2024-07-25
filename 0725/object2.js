const students = []
students.push({ 이름 : '우리', 국어 : 100, 영어: 100, 수학 : 100, 과학 : 100
})
students.push({ 이름 : '구름', 국어 : 0, 영어: 80, 수학 : 90, 과학 : 100})
students.push({ 이름 : '겨울', 국어 : 60, 영어: 90, 수학 : 70, 과학 : 40})
students.push({ 이름 : '바다', 국어 : 40, 영어: 70, 수학 : 20, 과학 : 75})

let output = '이름\t총점\t평균\n'

function getSumOf(students) {
    return students.국어 + students.영어 + students.수학 + students.과학
}

function getAverageOf(students) {
    return getSumOf(students)/4
}

for (const s of students) {
    output += `${s.이름}\t${getSumOf(s)}점\t${getAverageOf(s)}점\n`

}
console.log(output)