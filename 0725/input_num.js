/* document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input')
    const button = document.querySelector('button')
    const p = document.querySelector('p')

    button.addEventListener('click', () => {
        const inch = Number(input.value)
        if(isNaN(inch)) {
            p.textContent = '숫자입력'
            return
        }
        const cm = inch * 2.54
        p.textContent = `${cm}cm`
    })
}) */

//섭 -> 화 [°C] × 1.8 + 32
//화 -> 섭 ([°F] − 32) / 1.8

document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input')
    const button = document.querySelector('button')
    const p = document.querySelector('p')

    button.addEventListener('click', () => {
        const c = Number(input.value)
        if(isNaN(c)) {
            p.textContent = '숫자입력'
            return
        }
        const h = c * 1.8 + 32
        p.textContent = `${h}도`
    })
}) 
