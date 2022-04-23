//Atributos con valores por default

class Cita {
    constructor(name, departament, status) {
        this.name = name,
            this.departament = departament,
            this.status = "OPEN",
            this.newDate = new Date()
    }

    info() {
        console.log(`Tu cita con el doctor ${this.name} del departamento de ${this.departament} esta con un estatus de ${this.status} y sera el dia ${this.newDate}`)
    }
}

const citaGine = new Cita("Doc.Gerardo", "Ginecologia");
citaGine.info();