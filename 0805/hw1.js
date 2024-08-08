const car = {
    brand: 'Hyundai',
    model: 'Sedan',
    year: 2020
};

const newCar = {
    ...car,
    model: '전기차'
};

console.log(newCar);
