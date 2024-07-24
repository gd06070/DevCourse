let star = "";

for (let i = 0; i < 5; i++) {
    // 첫 번째 삼각형
    for (let j = 1; j <= 9 - i; j++) { // 공백 먼저 실행
        star += " ";
    }
    for (let k = 1; k <= 2 * i + 1; k++) {
        star += "*";
    }

    // 두 번째 삼각형
    for (let j = 1; j <= 5 - i; j++) { // 공백 먼저 실행
        star += " ";
    }
    for (let k = 1; k <= 2 * i + 1; k++) {
        star += "*";
    }

    // 세 번째 삼각형
    for (let j = 1; j <= 5 - i; j++) { // 공백 먼저 실행
        star += " ";
    }
    for (let k = 1; k <= 2 * i + 1; k++) {
        star += "*";
    }

    // 줄 바꿈
    star += "\n";
}

console.log(star);
