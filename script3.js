

/**
 * Exercice 2
 */
console.log("----------------Exercice 2--------------");


// 1- Copiez le code ci-dessus dans un fichier HTML structuré.
// ok

// 2- Dans votre fichier Javascript, ajoutez la fonctionnalité qui vous permettra de faire glisser le fichier box et de le déposer dans le fichier target. Consultez les notes de cours nommées animations DOM .
function onDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    event.dataTransfer.effectAllowed = "move";
}
 
function onDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move"
}
 
function onDrop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text/plain");
    event.target.appendChild(document.getElementById(data));
}

