const text = {
    a:function () {
        console.log(this);
    },
    b: () => {
        console.log(this);
    }
}

text.a();
text.b();