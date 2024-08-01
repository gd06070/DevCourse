// const x = document.forms[0].id;
// console.log(x);
// document.getElementById('show').innerHTML = x;

function getInput() {
    const x = document.forms["form1"];
    let text = " ";
    for (let i = 0; i < x.length; i++) {
        text += x.elements[i].value + '<br>'
    }
    document.getElementById("show").innerHTML = text;
}

function myfunc() {
    let id = document.getElementById('id').value;
    let pw = document.getElementById('pw').value;

    if (id.length < 1) {
        document.getElementById('show').innerHTML = "아이디를 입력해라";
    } else if (id.length < 3) {
        document.getElementById('show').innerHTML = "아이디는 4자리까지";
    } else {
        document.getElementById('show').innerHTML = "입력  OK";
    }

    if (pw.length < 1) {
        document.getElementById('show').innerHTML = "비밀번호를 입력해라";
    } else if (pw.length > 10) {
        document.getElementById('show').innerHTML = "비밀번호는 10자리까지";
    } else {
        document.getElementById('show').innerHTML = "입력  OK";
    }
    ['id', 'pw'].forEach(field => document.getElementById(field).value="");

    setTimeout(() => {
        document.getElementById('show').innerHTML = "";
    },2000)
}


