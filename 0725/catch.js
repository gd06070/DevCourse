function test() {
    try {
        alert('A위치입니다')
        throw '예외 강제 발생'
    } catch (exception) {
        alert('B위치입니다')
        return
    }
    alert('C 위치입니다')
}

test()