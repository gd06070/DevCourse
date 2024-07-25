const students = []
students.push({ 이름 : '우리', 국어 : 100, 영어: 100, 수학 : 100, 과학 : 100
})
students.push({ 이름 : '구름', 국어 : 0, 영어: 80, 수학 : 90, 과학 : 100})
students.push({ 이름 : '겨울', 국어 : 60, 영어: 90, 수학 : 70, 과학 : 40})
students.push({ 이름 : '바다', 국어 : 40, 영어: 70, 수학 : 20, 과학 : 75})

let output = '이름\t총점\t평균\n'
for (const s of students) {
    const sum = s.국어 + s.영어 + s.수학 + s.과학
    const avg = sum / 4
    output += `${s.이름}\t${sum}점\t${avg}점\n`

}
console.log(output)