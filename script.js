let numCartas = 0;
let cartasViradas = 0;
let cliquesTotais = 0;
let waiting;
let arrayCartas = [];
let auxGlobal = 0;
const images = [
    'bobrossparrot.gif',
    'explodyparrot.gif',
    'fiestaparrot.gif',
    'metalparrot.gif', //veja se precisa do imgs/ antes
    'revertitparrot.gif',
    'tripletsparrot.gif',
    'unicornparrot.gif'
];

images.sort(comparador); // Após esta linha, a images estará embaralhada

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}

while (numCartas > 14 || numCartas < 4 || (numCartas % 2) !== 0) {
    numCartas = prompt("com quantas cartas queres jogar?");
}

for (let i = 0; i < numCartas; i++) {
    let aux = i;
    if (i > 6) {
        aux = i - 7;
    }

    arrayCartas[aux + auxGlobal] = images[aux];
    arrayCartas[aux + auxGlobal + 1] = images[aux];
    auxGlobal++;

    let baralho = document.querySelector(".baralho");
    baralho.innerHTML += `
    <div class="carta" onclick="viraCarta(this)" data-identifier="card" id="${i}">
        <img src="imgs/front 6.png"/>
    </div>
    `;
}

arrayCartas.sort(comparador);

function viraCarta (elemento) {
    if (cartasViradas < 2) {
        let aux = elemento.querySelector('img');
        aux.src = "imgs/" + arrayCartas[elemento.id]; // PAREI AQUI
        cartasViradas++;
        cliquesTotais++;
        if (cartasViradas == 2) {
            setTimeout(desviraCarta, 2000, elemento);
            setTimeout(desviraCarta, 2000, waiting);
        }
        else {
            waiting = elemento;
        }
    }
}

function desviraCarta (elemento) {
    let aux = elemento.querySelector('img');
    aux.src = "imgs/front 6.png";
    cartasViradas--;
}