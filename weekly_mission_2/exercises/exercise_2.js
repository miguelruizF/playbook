//Ejercicio 2

const explorers = [{
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]

//METODO FOREACH
// explorers.forEach(ele => {
//     console.log(ele.name);
// });

// explorers.forEach(ele => {
//     console.log(ele.stack);
// });

//METODO MAP
// const newArr = explorers.map(el => {
//     return el.stack;
// })
// console.log(newArr);

//METODO FILTER
// const stackFilter = explorers.filter(el => {
//     return el.stack.includes('js');
// })
// console.log(stackFilter);

//METODO FIND
// const explorerCdmx = explorers.find(el => {
//     return el.city == "CDMX";
// })
// console.log(explorerCdmx);

//METODO REDUCE
// const explorerReduce = explorers.reduce((ac, el) => ac + el.exercises_completed, 0)
// console.log(explorerReduce);

//METODO SOME
// const validation = explorers.some(el => {
//     return el.missions.frontend.exercisesFinished === true;
// });
// console.log(validation);

//METODO EVERY
const validationEvery = explorers.every(el => {
    return el.missions.onboarding.isFinished == true;
})
console.log(validationEvery);