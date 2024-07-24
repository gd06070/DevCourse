const pet = {
    name : '구름',
    eat : function (food) {
        console.log(this.name + '은/는' + food + '을/를 먹습니다.');
    } 
}

pet.eat('밥');