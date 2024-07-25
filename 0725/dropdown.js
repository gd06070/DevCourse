document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('select')
    const p = document.querySelector('p')

    select.addEventListener('change', (event) => {
        const options = event.currentTarget.options;
        const index = event.currentTarget.options.selectedIndex;
        
        p.textContent = `선택 : ${options[index].textContent}`
    })
})