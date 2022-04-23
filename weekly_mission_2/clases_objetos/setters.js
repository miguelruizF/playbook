//setters

class ProgrammerJr {
    contructor(name, age) {
        this.name = name,
            this.age = age,
            this.sueldo = 5000,
            this.lenguaje = "Python"
    }
    get getSueldo() {
        return this.sueldo
    }
    get getLenguaje() {
        return this.lenguaje
    }

    set setSueldo(sueldo) {
        this.sueldo = sueldo
    }

    set setLenguaje(lenguaje) {
        this.lenguaje = lenguaje
    }
}

const newProgrammer = new ProgrammerJr("Miguel", 27);
console.log(newProgrammer);
// console.log(newProgrammer.getSueldo);
// console.log(newProgrammer.getLenguaje);

//Actualizar los metodos getters
newProgrammer.setSueldo = 10000;
newProgrammer.setLenguaje = "JavaScript";

console.log(newProgrammer.getSueldo);
console.log(newProgrammer.getLenguaje);