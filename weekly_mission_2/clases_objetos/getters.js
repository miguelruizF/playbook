// Getters
class Programmer {
    constructor(name, age, stack) {
        this.name = name,
            this.age = age,
            this.stack = stack,
            this.experience = 4
    }
    get getExperience() {
        return this.experience
    }
}

const programmerJr = new Programmer("Miguel", 27, ["Python", "JavaScript", "HTML5", "CSS3"]);
console.log(programmerJr);
console.log(programmerJr.getExperience);