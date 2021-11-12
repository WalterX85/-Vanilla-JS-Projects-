const buttons =  document.querySelectorAll('.btn');
const result = document.getElementById('result');

// On choisi d'etre à l'écoute de chaque bouton avec forEach, un console.log(e.target) nous montre que chaque bouton est bien récupéré --> <button id="3" class="btn">
// On peut choisir de ne récupérer que la value qui nous intérèsse avec l'id!
// console.log(e.target.id); --> 3

// Super, maintenant que nous avons récupérer notre value, nous voulons l'injecter dans notre h3 avec l'id result: -->  result.textContent = e.target.id ;
// Problème, chaque fois qu'une touche est saisie, elle efface la précédente, nous aimerions concaténer pour saisir des chaines, un opérateur éxiste pour cela: +=

buttons.forEach((button) => {
  button.addEventListener('click',(e) => {
    
    result.textContent += e.target.id ;
  });
});

// Occupons nous de notre équal, puisque c'est un id on observe que js le connait, pas besoin de le passer en querySelector.
// Nous voulons qu'au click que tu me mettes le résultat ds result: --> result.textContent
// Par contre nous ne voulons pas récupérer simplement la concaténation mais que le calcul soit effectué. Une méthode éxiste en js, eval!
// eval calculera tout ce qqui est dans cette concaténation: --> eval(result.textContent)


equal.addEventListener('click',() => {
  result.textContent = eval(result.textContent)
})

// Reste le clear, nous voulons qu'au click, il efface le result. Facile, 
// --> result.textContent = "";

clear.addEventListener('click',() => {
  result.textContent = "";
})