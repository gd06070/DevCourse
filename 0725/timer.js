document.addEventListener('DOMContentLoaded', () => {
    let [timer, timerId] = [0,0]
    const h1 = document.querySelector('h1')
    const checkBox = document.querySelector('input')
    
    checkBox.addEventListener('change', (event) => {
        if(event.currentTarget.checked) {
            timerId = setInterval(() => {
                timer += 1
                h1.textContent = `${timer}초`
            }, 1000)
        } else {
            clearInterval(timerId)
        }
    })
})