//Metodos estaticos: Sirven para declarar metodos que se pueden mandar a llamar sin necesidad de instanciarlos

class Skills {
    static getSkills() {
        return ["HTML5", "CSS3", "JavaScript", "Git"]
    }
}

//Instanciar una clase con un metodo estatico devolvera un error
// const newSkill = new Skills()
// console.log(newSkill.getSkills);

//Asi se manda a llamar al metodo estatico
console.log(Skills.getSkills());