
// Récupérer les données.

//On sélectionne le formulaire avec le DOM.
const form = document.querySelector('.form-quizz');
//On crée un tableau vide pour accueillir les résultats.
let tableauResultats = [];
const reponses = ['c', 'a', 'b', 'a', 'c'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

//On utilise e car la méthode addEventListener permets d'avoir accès à un objet qui a toute les propriétés de l'évènement.
//preventDefault est l'une de ces propriété et empeche la page de s'actualiser lors du submit.
form.addEventListener('submit', (e) => {
  e.preventDefault();

  //console.log(document.querySelector('input[name="q2"]:checked').value);


//Créer une boucle pour récupérer les 5 résultats. Les pusher dans notre tableau vide tableauResultat.
//Lorsque l'on va soumettre le formulaire on va récupérer les données de nos 5 inputs avec l'attribut q1, q2, q3, q4, q5 s'ils sont checked et récupérer ainsi leurs valeurs.
  for(i = 1; i < 6; i++){
    tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
  }
  //console.log(tableauResultats);
  verifFunc(tableauResultats);
  tableauResultats = [];
})

// Le tab vide permet de réinitialiser les résultats pour le prochain submit.

function verifFunc(tableauResultats) {

  for(let i = 0; i < 5; i++){
    if(tableauResultats[i] === reponses[i]){
      verifTableau.push(true);
    } else {
      verifTableau.push(false);
    }
  }

  //console.log(verifTableau);
  afficherResultats(verifTableau);
  verifTableau = [];
}

function afficherResultats(tabCheck) {

  const nbDeFautes = tabCheck.filter(el => el !== true).length;
  //console.log(nbDeFautes);

  switch(nbDeFautes) {

    case 0:
        titreResultat.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`
        aideResultat.innerText = ''
        noteResultat.innerText = '5/5'
        break;
    case 1:
        titreResultat.innerText = `✨ Vous y êtes presque ! ✨`
        aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
        noteResultat.innerText = '4/5'
        break;
    case 2:
        titreResultat.innerText = `✨ Encore un effort ... 👀`
        aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
        noteResultat.innerText = '3/5'
        break;
    case 3:
        titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`
        aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
        noteResultat.innerText = '2/5'
        break;
    case 4:
        titreResultat.innerText = `😭 Peux mieux faire ! 😭`
        aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
        noteResultat.innerText = '1/5'
        break;
    case 5:
        titreResultat.innerText = `👎 Peux mieux faire ! 👎`
        aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
        noteResultat.innerText = '0/5'
    break;

    default:
        'Wops, cas innatendu.';
  }
}
