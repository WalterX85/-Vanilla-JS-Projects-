const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// Permet d'animer notre canvas avec de la 2D
const img = new Image();
img.src = './media/flappy-bird-set.png';

//general settings
let gamePlaying = false; //Sommes nous en train de jouer?
const gravity = .4;
const speed = 6.2; //Vitesse des poteaux
const size = [51, 36]; //Taille de l'oiseau
const jump = -11.5;
const cTenth = (canvas.width / 10); // Const d'1/10e du canevas

//pipe settings
const pipeWidth = 78; //largeur poteaux
const pipeGap = 300; //écart entre poteaux
const pipeLoc = () => (Math.random() * ((canvas.height - (pipeGap + pipeWidth)) -pipeWidth)) + pipeWidth; // génère des poteaux aléatoires

let index = 0,   // Pour créer l'effet parralax
    bestScore = 0,
    currentScore = 0,
    pipes = [], // Array poteaux
    flight, //vol
    flyHeight; //hauteur de vol

const setup = () => {
    currentScore = 0;
    flight = jump;
    flyHeight = (canvas.height /2) - (size[1] / 2);

    pipes = Array(3).fill().map((a, i) => [canvas.width + (i * (pipeGap + pipeWidth)), pipeLoc()]);

}    

const render = () => {
    index++; // ++ chaque fois que l'on rappelle le rendu

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height, -(
    (index * (speed / 2)) % canvas.width) + canvas.width, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height, -(
    (index * (speed / 2)) % canvas.width), 0, canvas.width, canvas.height);
    // déplace le background
if (gamePlaying) {
    ctx.drawImage(img, 432, Math.floor((index % 9) / 3) * size[1], ...size, cTenth, flyHeight, ...size);
    flight += gravity;
    flyHeight = Math.min(flyHeight + flight, canvas.height -size[1]);

} else {
    ctx.drawImage(img, 432, Math.floor((index % 9) / 3) * size[1], ...size, ((canvas.width / 2) - size[0] / 2), flyHeight, ...size);
    // void ctx.drawImage(image, sx, sy, sLargeur, sHauteur, dx, dy, dLargeur, dHauteur);
    // ctx.drawImage permets de déplacer des sprites sur l'image selon la formule à 9 parametres
    // ci dessus. Nous nous en servirons pour rendre mobile l'oiseau sur un axe horizontal
    // ((canvas.width / 2) - size [0] / 2) centre l'oiseau sur l'écran
    flyHeight = (canvas.height / 2) - (size[1] / 2);
    

    ctx.fillText(`Meilleur Score : ${bestScore}`, 55, 245);
    ctx.fillText(`Cliquez pour jouer`, 48, 535);
    ctx.font = "bold 30px courier";
    }
    //ctx.fillText(texte, x, y [, largeurMax]);

    // pipe display
    if (gamePlaying) {
        pipes.map(pipe => {
            pipe[0] -= speed;

    //top pipes
            ctx.drawImage(img, 432, 588 - pipe[1], pipeWidth, pipe[1], pipe[0], 0, pipeWidth, pipe[1]);
    //bottom pipes
            ctx.drawImage(img, 432 + pipeWidth, 108, pipeWidth, canvas.height - pipe[1] + pipeGap, pipe[0], pipe[1] + pipeGap, pipeWidth, canvas.height - pipe[1] + pipeGap);
        
            if(pipe[0] <= -pipeWidth) {
                currentScore++;
                bestScore = Math.max(bestScore, currentScore);

                //remove pipe = create new one
                pipes = [...pipes.slice(1), [pipes[pipes.length-1][0] + pipeGap + pipeWidth, pipeLoc()]];
            }
            // if hit the pipe, end
            if ([
                pipe[0] <= cTenth + size[0], 
                pipe[0] + pipeWidth >= cTenth, 
                pipe[1] > flyHeight || pipe[1] + pipeGap < flyHeight + size[1]
              ].every(elem => elem)) {
                gamePlaying = false;
                setup();
              }
        })
        
    }

    document.getElementById('bestScore').innerHTML = `Meilleur : ${bestScore}`;
    document.getElementById('currentScore').innerHTML = `Actuel : ${currentScore}`;
    window.requestAnimationFrame(render); // Fait tourner en boucle le render
}
setup();
img.onload = render; // Au chargement de l'image, charge le render
document.addEventListener('click', () => gamePlaying = true);
window.onclick = () => flight = jump;