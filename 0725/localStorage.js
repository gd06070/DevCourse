const p = document.querySelector('p')
const input = document.querySelector('input')
const btn = document.querySelector('button')

const savedValue = localStorage.getItem('input')
if (savedValue) {
    input.value = savedValue
    p.textContent = `이전 실행 때 마지막 값 : ${savedValue}`
}

input.addEventListener('keyup', (event) => {
    const value = event.currentTarget.value
    localStorage.setItem('input', value)
})

btn.addEventListener('click', (event) => {
    localStorage.clear()
    input.value = ''
})