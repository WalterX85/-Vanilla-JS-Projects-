let nom = prompt("Entrez votre nom.");
let aleatoire = Math.floor(Math.random()*100)+1;
let nombre;
let i; // undefined (compteur)

for(i = 1; i <= 100; i++){
    nombre = parseInt(prompt("Entre un nombre"), 10);
    // parseInt(chainedecaractère, base)
    if(nombre === aleatoire){
        alert("Tu as gagné !");
        break;
    }
    if(nombre > aleatoire){
        alert("C'est moins");
    }
    if(nombre < aleatoire){
        alert("C'est plus");
    }
}


// let btnColor = document.querySelector("#boutonChangerCouleur")  pour un id
// let btnColor = document.querySelector(".boutonChangerCouleur")  pour une classe
// const btnColor = document.getElementById("boutonChangerCouleur")

// btnColor.onclick = function(){
//     const newText = document.createElement("h1");
//     document.body.appendChild(newText);
//     newText.innerHTML = "Cédric";
// }

// const apple = {
//     isEaten : false
//     eat : function (){
//         if (this.isEaten){
//             console.log("La pomme est mangée")
//         }
//         else{
//             console.log("La pomme n'a pas été mangée")
//         }
//     }
// }
