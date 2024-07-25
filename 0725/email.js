document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input')
    const p = document.querySelector('p')
    const isEmail = (value) => {
        return (value.indexOf('@') > 1) && (value.split('@')[1].indexOf('.')>1)

    } 

    input.addEventListener('keyup', (event) => {
        const value = event.currentTarget.value
        if(isEmail(value)) {
            p.style.color = 'green'
            p.textContent = `이메일 형식입니다 : ${value}`
        } else {
            p.style.color = 'pink'
            p.textContent = `이메일 형식 아님 : ${value}`
        }
    })
})