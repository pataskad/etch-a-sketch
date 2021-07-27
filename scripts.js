'use strict';


const container = document.querySelector('.container');
const resetBtn = document.querySelector('#grid-reset');

let xSquares = 16; // will prompt user for squares, limit to 100
let ySquares = 16;

// core program to create divs within container, 16x16 grid
for(let x = 0; x < xSquares; x++) {
    for(let y = 0; y < ySquares; y++) {
        const divs = document.createElement('div');
        divs.className = 'js-div';
        container.appendChild(divs);
        divs.addEventListener('mouseover', colorChange);
    }
}

function colorChange(e) {
    e.target.style.backgroundColor = 'black';
}

const newDivs = document.querySelectorAll('.js-div'); // only sets first div
// grab nodeList
// loop through nodeList upon function call 'button click'
// reset background color of each div within the container
function resetBackground() {
    for (let j = 0; j < newDivs.length; j++) {
        let item = newDivs[j];
        item.style.backgroundColor = '';
    }
}

resetBtn.addEventListener('click', resetBackground);

