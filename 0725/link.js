document.addEventListener('DOMContentLoaded', () => {
    let status = false

    const checkbox = document.querySelector('input')
    checkbox.addEventListener('change', (event) => {
        status = event.currentTarget.checked
    })

    const link = document.querySelector('a')
    link.addEventListener('click', (event) => {
        if (!status) {
            event.preventDefault()
        }
    })
})