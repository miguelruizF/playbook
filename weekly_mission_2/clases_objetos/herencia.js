//Herencia: Nos permite relacionar clases entre sí y rehusar sus componentes
class Developer {
    constructor(name, stack, age) {
        this.name = name,
            this.stack = stack,
            this.age = age
    }
}
const miguelDev = new Developer("Miguel", ["JS", "Python", "HTML5"], 27);
console.log(miguelDev);

// Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre

class DeveloperJr extends Developer {}
const MiguelJr = new DeveloperJr("Miguel", ["CSS3", "React"], 28);
console.log(MiguelJr);