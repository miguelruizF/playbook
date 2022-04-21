//Crear un objeto que reciba parametros

const persona = {
    "name": "Mick",
    saludo: function(saludar) {
        console.log(`Hola, me llamo ${this.name} y te digo ${saludar}`)
    }
}
persona.saludo("Como te va");