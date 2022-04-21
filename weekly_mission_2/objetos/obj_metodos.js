//Crear un objeto con metodos

const cat = {
    "name": "Michi",
    "color": "gray",
    sonido: function() {
        console.log(`Soy el gato ${this.name} miau... miau`)
    },
}

console.log(cat);