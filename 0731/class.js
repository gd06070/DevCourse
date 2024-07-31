const Person = {
    firstName : 'Woori',
    lastName : 'Bae',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    set fullName(name) {
        [this.firstName, this.lastName] = name.split('');
    }
}

console.log(Person.fullName);