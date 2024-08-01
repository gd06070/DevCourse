let div = document.querySelector('div');
function changeContent() {
    div.outerHTML = '<h1>DOM API</h1><p>선수 조건: 없음</p>' //변경 버튼 누르면 이 양식대로 바뀜
}

// const ele = document.getElementsByTagName('li');
// [...ele].forEach(ele => {ele.style.color = 'red';}) 

// const elems = document.getElementsByClassName('fruit');
// [...elems].forEach(elem => (elem.style.color = 'pink'));

// const apple = document.getElementsByClassName('fruit apple');
// [...apple].forEach(elem => {elem.style.color = 'blue'});

// const boxEl = document.querySelector('.box');
// boxEl.addEventListener('click', function() {
//     console.log('Click');
//     boxEl.classList.toggle('active');
//     // if (boxE1.classList.contains('active')) {
//     //     boxE1.classList.remove('active');
//     // } else {
//     //     boxE1.classList.add('active');
//     // }
// })

// const boxEls = document.querySelectorAll('.box');
// boxEls.forEach(function(boxE1, index) {
//     boxE1.classList.add(`order-${index + 1}`);
// })