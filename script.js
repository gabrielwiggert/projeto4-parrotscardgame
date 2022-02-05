let numCartas = 0;

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
    let aux = elemento.querySelector('img');
    aux.src = "imgs/bobrossparrot.gif";
}