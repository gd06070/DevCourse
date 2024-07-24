String.prototype.contain = function(data) {
    return this.indexOf(data) >= 0;
}

Array.prototype.contain = function(data) {
    return this.indexOf(data) >=0;
}

const a = '안녕하세요'
console.log('안녕 in 안녕하세요:', a.contain('안녕'));
console.log('없는데 in 안녕하세요:',a.contain('없는데'));

const b = [273, 31, 141, 42,13];
console.log('273 in [273, 31, 141, 42,13]:', b.contain(273));
console.log('2 in [273, 31, 141, 42,13]:', b.contain(2));