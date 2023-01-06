

/**
 * Exercice 2
 */
console.log("----------------Exercice 2--------------");


// 1- Copiez le code ci-dessus dans un fichier HTML structuré.
// ok 

// 2- Dans votre fichier Javascript, utilisez setInterval pour déplacer le <div id="animate"> vers la droite du <div id="container">, lorsque le bouton est cliqué.
function myMove() {
  let elem = document.getElementById("animate");
  let pos = 0;
  let id = setInterval(function() {
          if (pos == 350) {
          clearInterval(id);
      }
      else {
          pos++;
          elem.style.left = pos + "px";
      }
  }, 1);
}

