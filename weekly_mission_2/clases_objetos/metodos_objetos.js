//Metodos en los objetos
class Perro {
    constructor(name, color) {
        this.name = name,
            this.color = color
    }
    info() {
        console.log(`Soy un perro, mi nombre es ${this.name}. Soy de color ${this.color}`)
    }
}

const Dogchow = new Perro("Firulais", "Negro");
console.log(Dogchow);
Dogchow.info();