const x = document.getElementById('name');

x.onfocus = function() { changeBgcolorFo(); }

x.onblur = function() { changeBgcolorBl(); } 

function changeBgcolorFo() {
    x.style.backgroundColor = "pink";
}

function changeBgcolorBl() {
    x.style.backgroundColor = "gray";
}

const keyInput = document.getElementById('keyInput');

// keyInput.addEventListener('keydown', showKey);
// function showKey(e) {
//     text += e.key;
//     document.getElementById("show").innerHTML = text;
// }

keyInput.addEventListener("keyup", changeUpper);
function changeUpper() {
    keyInput.value = keyInput.value.toUpperCase();
}

const selectFruit = document.getElementById('selectFruit');
selectFruit.addEventListener('change', (e) => {
    document.getElementById("show").innerHTML = "내가 좋아하는 과일은" + e.target.value + "입니다.";
})