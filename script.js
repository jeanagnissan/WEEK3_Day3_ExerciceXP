

/**
 * Exercice 1
 */
console.log("----------------Exercice 1--------------");

// Partie I - Examen Des Tableaux
console.log("----------------Partie I--------------");
const people = ["Greg", "Mary", "Devon", "James"];

// 1- Écrivez du code pour supprimer "Greg" du peopletableau.
console.log(people.shift());

// 2- Écrivez le code pour remplacer "James" par "Jason".
console.log(people[3] = "Jason");

// 3- Écrivez du code pour ajouter votre nom à la fin du peoplet ableau.
console.log(people.push("Agnissan"));

// 4- Écrivez le code qui console.logs l'index de Mary
console.log(people.indexOf("Mary"));

// 5- Écrivez du code pour faire une copie du people tableau
console.log(people.slice(1,4));

// 6- Écrivez le code qui donne l'index de "Foo
console.log(people.indexOf("Foo"));
// il renvoie -1 car la chaine Foo ne se trouve pas dans le tableau people

// 7- Créez une variable appelée last dont la valeur est le dernier élément du tableau
let last =  people[people.length - 1];
console.log(last);


// Partie II - Boucles
console.log("----------------Partie 2--------------");

// 1- À l'aide d'une boucle, parcourez le people tableau et console.log chaque personne.
console.log("----------Avec boucle for of-------");
for (const item of people) {
  console.log(item);
}

// 2- À l'aide d'une boucle, parcourez le people tableau et quittez la boucle après avoir console.log "Jason"
console.log("----------Avec boucle while-------");
let i = 0;
while (i < people.length) {
if (people[i] == "Jason") {
  console.log(people[i]);
  break;
} 
if (people[i]) {
  console.log(people[i]);
} 
  i++;
}


/**
 * Exercice 2
 */
console.log("----------------Exercice 2--------------");

// 1- Créez un tableau appelé colorsoù la valeur est une liste de vos cinq couleurs préférées.
let color = ["jaune", "blanc", "noir", "rouge", "orange"];
console.log(color);

// 2- Bouclez à travers le tableau et pendant que vous bouclez console.log une chaîne
for (let index = 0; index < color.length; index++) {
  console.log(`Mon choix n° ${index}  est ${color[index]}`);
}

// 3- changez-le en console.log "Mon 1er choix", "Mon 2ème choix", "Mon 3ème choix", en choisissant le suffixe correct pour chaque numéro.
let sufixe = ["st", "nd", "rd", "th", "th"];
for (let index = 0; index < color.length; index++) {
  console.log(`Mon choix ${index}${sufixe[index]}  est ${color[index]}`);
}


/**
 * Exercice 3
 */
 console.log("----------------Exercice 3--------------");

// 1- Demander à l'utilisateur un numéro.

// 2- Tant que le nombre est inférieur à 10, continuez à demander à l'utilisateur un nouveau numéro.
while (true) {
  let number = prompt("Please enter a number:");
  if (typeof number == "number" && number > 10) {
    break;
  }
  if (typeof number == "number" && number < 10) {
    continue;
  }
  if (typeof number !== "number") {
    continue;
  }
}



/**
 * Exercice 4
 */
console.log("----------------Exercice 4--------------");

// 1-Copiez et collez l'objet ci-dessus dans votre fichier Javascript.
const building = {
numberOfFloors: 4,
numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
},
nameOfTenants: ["Sarah", "Dan", "David"],
numberOfRoomsAndRent:  {
    sarah: [3, 990],
    dan:  [4, 1000],
    david: [1, 500],
},
}

// 2-Console.log le nombre d'étages du bâtiment.
console.log("nombre d'étages du bâtiment : " + building.numberOfFloors);

// 3-Console.log combien d'appartements sont aux étages 1 et 3.
console.log(`nombre d'appartements à l'étages 1 : ${building.numberOfAptByFloor.firstFloor}
nombre d'appartements l'étages 3 : ${building.numberOfAptByFloor.firstFloor}`);

// 4- Console.log le nom du deuxième locataire et le nombre de pièces qu'il possède dans son appartement
console.log(`nom du deuxième locataire : ${building.nameOfTenants[1]}
nombre d'appartements l'étages 3 : ${building.numberOfRoomsAndRent.dan[0]}`);

// 5- Vérifiez si la somme du loyer de Sarah et de David est supérieure au loyer de Dan. Si c'est le cas, augmentez le loyer de Dan à 1200.
let andRentSarah = building.numberOfRoomsAndRent.sarah[1];
let andRentDavid = building.numberOfRoomsAndRent.david[1];
let andRentDan = building.numberOfRoomsAndRent.dan[1];

if(andRentSarah + andRentDavid  > andRentDan){
building.numberOfRoomsAndRent.dan[1] =  1200;
}
console.log(building);



/**
 * Exercice 5
 */
console.log("----------------Exercice 5--------------");

// 1-Créez un objet appelé famille avec quelques paires clé-valeur.
let famille =  {
papa : "ALex",
maman: "Jeanne",
nbrEnfant: 4,
anneMariage: 14
}

// 2- A l' aide d'une for in boucle, console.log les clés de l'objet.
for (const key in famille) {
console.log(key);
}

// 3- À l' aide d'une for in boucle, console.log les valeurs de l'objet.
for (const key in famille) {
console.log(famille[key]);
}


/**
 * Exercice 6
 */
console.log("----------------Exercice 6--------------");
const details = {
my: 'name',
is: 'Rudolf',
the: 'raindeer'
}
console.log(details);

// 1- Étant donné l'objet ci-dessus et en utilisant un for loop, console.log "mon nom est Rudolf le raindeer"
for (const key in details) {
console.log(`My ${details.my} ${details.is} ${details.the}`);
}


/**
 * Exercice 7
 */
console.log("----------------Exercice 7--------------");

// 1- 
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
console.log(names);

// 2-Console.log le nom de leur société secrète. La sortie doit être "ABJKPS"
let stockFirst = "";
for (const name of names.sort()) {
  console.log(name);
  stockFirst  =  stockFirst + name[0];
}
console.log(stockFirst);

















