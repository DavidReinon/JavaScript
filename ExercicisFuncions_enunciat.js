//Executeu este codi i mireu el que mostra per consola

let dies = [
    "Dilluns",
    "Dimarts",
    "Dimecres",
    "Dijous",
    "Divendres",
    "Dissabte",
    "Diumenge",
];
function paraCada(array, accio) {
    for (let i = 0; i < array.length; i++) {
        accio(array[i]);
    }
}
paraCada(dies, console.log);

//Modifiqueu-lo per a que faça el mateix utilitzant una funció fletxa (=>)
console.log("----------------------------------");
const paraCada2 = (array, accio) => {
    for (let i = 0; i < array.length; i++) {
        accio(array[i]);
    }
};
paraCada2(dies, console.log);

//Modifiqueu el codi per a que faça el mateix utilitzant el mètode forEach()
console.log("----------------------------------");

dies.forEach((element) => {
    console.log(element);
});

// Que cree un altre array on calcule el numero de caracters de cada dia de la setmana
// ex: numCar=[7,7,8,6,9,8,8]
// i després que mostre el contingut dels dos arrays de la següent manera:
// Dilluns: 7
// Dimarts: 7
// Dimecres: 8
// ...

console.log("----------------------------------");
let numCaracters = [];

const calcularCaracters = (array) => {
    array.forEach((element) => {
        numCaracters.push(element.length);
    });
};

calcularCaracters(dies);
for (let i = 0; i < dies.length; i++) {
    console.log(`${dies[i]} : ${numCaracters[i]}`);
}

//Mostra els dies que ténen més de 7 caracters (filter)
console.log("----------------------------------");
let diesMayorQue7Filter = dies.filter((x) => x.length > 7);
console.log(diesMayorQue7Filter);

console.log("----------------------------------");
/* Ara volem fer el mateix, però que ens torne un String amb els dies que ténen més de 7 caracters */
/* reduce */
let diesMayorQue7Reduce = dies.reduce((acc, dia) => {
    if (dia.length > 7) acc += 1;
    return acc;
});
console.log(diesMayorQue7Reduce);
