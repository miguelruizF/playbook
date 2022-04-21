//Instanciar objeto con atributos

class Perro {
    constructor(name, color, size) {
        this.name = name,
            this.color = color,
            this.size = size
    }
}
const Dogchow = new Perro();
console.log(Dogchow);