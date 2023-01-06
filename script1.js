

/**
 * Exercice 1
 */
console.log("----------------Exercice 1--------------");

// Première Partie
console.log("----------------Partie I--------------");

// 1- Dans votre fichier Javascript, à l'aide de setTimeout, appelez une fonction après 2 secondes.
function arletBonjour(){
  alert('Hello World');
}

// 2- La fonction alertera "Hello World".
setTimeout(arletBonjour, 2000);

// Partie 2
console.log("----------------Partie 2--------------");

// 1- Dans votre fichier Javascript, à l'aide de setTimeout, appelez une fonction après 2 secondes.
setTimeout(addNewParagraphFunc, 2000);

// 2- La fonction ajoutera un nouveau paragraphe <p>Hello World</p>au fichier <div id="container">.
function addNewParagraphFunc(){
  let addNewParagraph = document.createElement('p');
  addNewParagraph.innerHTML = "Hello World";
  document.getElementById('container').appendChild(addNewParagraph);
}

// Partie 3
console.log("----------------Partie 3--------------");

// 1- Dans votre fichier Javascript, à l'aide de setInterval, appelez une fonction toutes les 2 secondes.
let cleareVarInter = setInterval(funcAddNewParagraph, 2000);

// 2- La fonction ajoutera un nouveau paragraphe <p>Hello World</p>au fichier <div id="container">.
let blockContainer = document.getElementById('container');
function funcAddNewParagraph(){
  let addNewParagraph = document.createElement('p');
  addNewParagraph.innerHTML = "Hello World";
  blockContainer.appendChild(addNewParagraph);
}

// 3- L'intervalle sera effacé (c'est-à-dire clearInterval), lorsque l'utilisateur cliquera sur le bouton.
document.getElementById('clear').addEventListener('click', () => {
  clearInterval(cleareVarInter)
});

// 4- Au lieu de cliquer sur le bouton, l'intervalle sera effacé (c'est-à-dire clearInterval) dès qu'il y aura 5 paragraphes à l'intérieur du <div id="container">.

function funcAddNewParagraph(){
  let addNewParagraph = document.createElement('p');
  addNewParagraph.innerHTML = "Hello World";
  blockContainer.appendChild(addNewParagraph);
  if (blockContainer.children.length == 5) {
    clearInterval(cleareVarInter)
  } 
}