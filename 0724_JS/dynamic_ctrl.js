document.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement('h1')

    header.textContent = '문서 객체 동적으로 생성'
    header.setAttribute('data-custom', '사용자 정의 속성')
    header.style.color = 'IndianRed'
    header.style.backgroundColor = 'linear-gradient(red, blue)'

    document.body.appendChild(header)
})