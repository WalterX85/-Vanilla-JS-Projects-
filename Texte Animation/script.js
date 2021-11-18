const target = document.getElementById('target'); // 1
let array = ["papa", "développeur", "créatif"]; // 1
let wordIndex = 0; // 3
let letterIndex = 0; // 3
// Pour se balader dans l'array, je crée deux index. wordIndex pour aller de mots en mots, letterindex pour aller de lettres en lettres.


const createLetter = () => {  // 2
  const letter = document.createElement("span");
  target.appendChild(letter);
  // letter devient désormais l'enfant de target.

  letter.textContent = array [wordIndex][letterIndex]; // 3

  // 8 Les lettres se suppriment en 2800ms
  setTimeout(() => {
    letter.remove();
  }, 2800);

};

// createLetter(); // 3

// Le setInterval n'est pas conseillé mais il est intéréssant de voir comment l'utiliser. Toutes les 200ms invoque createLetter en incrémentant letterIndex. Notre premier mots est bien retourné lettre par lettre.

// setInterval(() => { // 4
//   letterIndex++
//   createLetter();
// }, 200)

// Nous aimerions maintenant dire que lorsque nous arrivons au bout de la lenght de letterIndex, il faudrait incrémenter wordIndex. J'utilise setTimeout pour cela bien plus pratique que setInterval.
// Le problème de setTimeout est qu'il ne se joue pas à l'infini, c'est juste un compte à rebour et après il arrete de se jouer... J'apprends que si je le mets dans une fonction, je peux faire de la récursivité cad qu'on peut avoir une fonction qui s'appelle elle meme. Voici comment faire une fonction récursive avec la fonction loop: // 5

// 8 Les lettres se suppriment en 2800ms
setTimeout(() => {
  letter.remove();
}, 2800);

const loop = () => { // 5
  setTimeout(() => { // 6
    if (wordIndex >= array.length) { // 10 Boucler l'animation en infinite
      wordIndex = 0;
      letterIndex = 0;
      loop();
    }
    else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop(); // loop est une fonction récursive, elle est necessaire car sinon setTimeout ne s'appelle qu'une fois.
    } else { // 7 On chande mot lorsque l'on est arrivé au bout du letterIndex. problème, les 3 mots s'affichent à la suite!
      wordIndex++; // 7
      letterIndex = 0; // 7
      setTimeout(() => { // 9 Englober loop ds un setTimeout de 2800ms pour appeler la fonction apres le remove.
        loop(); // 7
      }, 2800); // 9
    }
  }, 50);
};
loop(); // 5