function Welcome() {
    const name = "Aryan Sahu";
    this.name = name;
    this.age = 23;
    return 'called';
}

Welcome.prototype.get = () => {
    console.log(this.name);
}

class Person {
    name = "Aryan Sahu"; 
    color = 'Brown';
    age = 23;

    constructor(name) {
        this.name = name;
    }

    get() {
        this.name = "Sahu"
        console.log(this.name);
    }
}


const welcome = new Welcome();
const person = new Person('suresh');
