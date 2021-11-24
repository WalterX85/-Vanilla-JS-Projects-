const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "&é#'{([-|`è_\^)]=}$£¤*µ%§";
// Récupérer la valeur de l'input range:
const rangeValue = document.getElementById('password-length');
// Afficher password à la place de générateur de mdp
const passwordOutput = document.getElementById('password-output')


// Accéder à la value d'un objet:
// console.log(rangeValue.value);

function generatePassword() {
  let data = [];
  let password = '';

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);
  // Si l'id est check, alors on injecte dans data les caractères correspondants.
  // Le spread operator permet de diviser chaque caractère.
  if (data.length === 0) {
    alert("Please select a button")
  // alert si aucun button n'a été selectionné.
  }



// Expliquer avec une boucle qu'il faut randomiser autant de caractère que la value de rangeValue. boucle for:
  for ( i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
    console.log(password);
  }

// Dans un input, nous ne pouvons pas injecter avec innerHTML ou textContent. Nous remplaçons sa value initial par celle du password.
  passwordOutput.value = password;

  passwordOutput.select(); // Sélectionne le mdp
  navigator.clipboard.writeText(passwordOutput.value); // Copie le mdp lorsqu'il est généré.
}
// Math.floor arrondi a l'inférieur puisque data enregistre 86 caractères tandis que le tableau va de 0 à 85. Nous expliquons ensuite que nous avons besoin d'un random sur la longueur de data.
// += permet de concaténer les caractères, de le mettre les uns à la suite des autres.
// lorsque l'on écrit =, cela signifie que l'élément de droite passe à sa valeur à l'élément de gauche mais en faisant cela il écrase aussi tout ce qu'il y avait avant.
// Si nous ne voulons pas écraser, nous écrivons +=

// On peut passer a addEventListener une fonction directement. (generatePassword) 
generateButton.addEventListener("click", generatePassword);