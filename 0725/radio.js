document.addEventListener('DOMContentLoaded', () => {
    const output = document.querySelector('#output')
    const radios = document.querySelectorAll('[name=pet]')

    radios.forEach((radio) => {
        radio.addEventListener('change', (event) => {
            const current = event.currentTarget
            if (current.checked) {
                output.textContent = `좋아하는 애완동물은 ${current.value} 이군`
            }
        })
    })
})