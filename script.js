let numCartas = 0;
let cartasViradas = 0;
let cliquesTotais = 0;
let waiting;

while (numCartas > 14 || numCartas < 4 || (numCartas % 2) !== 0) {
    numCartas = prompt("com quantas cartas queres jogar?");
}

for (let i = 0; i < numCartas; i++) {
    let baralho = document.querySelector(".baralho");
    baralho.innerHTML += `
    <div class="carta" onclick="viraCarta(this)">
        <img src="imgs/front 6.png"/>
    </div>
    `;
}

function viraCarta (elemento) {
    if (cartasViradas < 2) {
        let aux = elemento.querySelector('img');
        aux.src = "imgs/bobrossparrot.gif";
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