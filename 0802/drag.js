// function fun(event) {
//     let text = event.target.tagName;
//     document.getElementById('show').innerHTML = text;
// }

// const item = document.querySelector('.item');
// item.addEventListener('dragstart', (e) => {
//     console.log('드래그 시작!')
// })

// item.addEventListener('drag',(e) => {
//     console.log('드래그 화면 나와라')
// })

// const container = document.querySelector('.container');
// container.addEventListener('dragenter', (e) => {
//     console.log("1박스 영역에 최초 진입")
// })

// container.addEventListener('dragleave', (e) => {
//     console.log('1박스 영역 떠나면 발생!')
// })

// container.addEventListener('dragover', (e) => {
//     console.log('1박스 여기 있어!');
//     e.preventDefault();
// })

// container2.addEventListener('drop', (e) => {
//     console.log("1번 박스 영역에 드롭!");
// })

// const container2 = document.querySelector('.container2');
// container2.addEventListener('dragenter', (e) => {
//     console.log("2박스 영역에 최초 진입")
// })

// container2.addEventListener('dragleave', (e) => {
//     console.log('2박스 영역 떠나면 발생!')
// })

// container2.addEventListener('dragover', (e) => {
//     console.log('2박스 여기 있어!');
//     e.preventDefault();
// })

// container2.addEventListener('drop', (e) => {
//     console.log("2번 박스 영역에 드롭!");
// })

// document.getElementById('appendChildBtn').onclick = function() {
//     const parent = document.getElementById('parent');
//     const newElement = document.createElement('div');
//     newElement.textContent = 'New Child';
//     parent.appendChild(newElement);
// }

// document.getElementById('insertBeforeBtn').onclick = function() {
//     const parentE1 = document.getElementById('parent');
//     const newE1 = document.createElement('div');
//     newE1.textContent = 'New Child';

//     const reference = document.getElementById('reference');
//     parentE1.insertBefore(newE1, reference);
// }

const draggables = document.querySelector('.draggable');
const containers = document.querySelectorAll('.container')

draggables.forEach((dragable) => {
    dragable.addEventListener('dragstart', () => {
        dragable.classList.add('dragging');
    });

    dragable.addEventListener('dragend', () => {
        dragable.classList.remove('dragging');
    })
})

containers.forEach((container) => {
    container.addEventListener('dragover', () => {
        const afterElement = getDragAfterElement(container, e.clientX)
        const draggable = document.querySelector('.dragging');
        if (afterElement === undefined) {
            container.appendChild(draggable)
        } else {
            container.insertBefore(draggable, afterElement);
        }
    })
})

function getDragAfterElement(container, x) {
    const draggableElements = [
        ...container.querySelectorAll('.dragable:not(.dragging)')
    ];

    return draggableElements.reduce((child) => {
        const box = child.getBoundingClientRect()
    })
}