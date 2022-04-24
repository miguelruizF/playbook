//Overrinding methods
class Developer {
    constructor(name, stack) {
        this.name = name,
            this.stack = stack
    }

    // getNameAndUsername(){
    //     return `Explorer ${this. name}, username: ${this.username}`
    //    } METODO PADRE
}

class Frontend extends Developer {
    constructor(name, stack, proyect) {
            super(name, stack), // SUPER nos ayudará a llamar el constructor padre
                this.proyect = proyect // Agregamos este atributo, es exclusiva de esta clase y no de la clase padre
        }
        // getGeneralInfo(){
        //     let nameAndUsername = this.getNameAndUsername() // llamamos el método de la clase padre
        //     // nameAndUsername  es una variable de esta función, no necesitas usar this para referenciarla.
        //     return `${nameAndUsername}, Ciclo ${this.cycle}`
        //   }
}

const frontendMiguel = new Frontend("Miguel", ["JS", "HTML5", "CSS3"], "Pagina para Hotel");
console.log(frontendMiguel);

// console.log(viajero1.getNameAndUsername()) // Método de la clase padre
// console.log(viajero1.getGeneralInfo()) // Método de la clase hija