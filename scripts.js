'use strict';

const container = document.querySelector('.container');
const resetBtn = document.querySelector('#grid-reset');

let squareSideCount = 16; // limit squares to 100
let divs = [];

createDivGrid(squareSideCount);

// core program to create divs within container, 16x16 grid baseline
function createDivGrid(squareSideCount) {
    container.style.gridTemplateColumns = (`repeat(${squareSideCount}, 1fr`);
    container.style.gridTemplateRows = (`repeat(${squareSideCount}, 1fr`);
    let cellCount = squareSideCount * squareSideCount;

    for (let y = 0; y < cellCount; y++) {
        divs[y] = document.createElement('div');
        divs[y].classList.add('js-div');
        divs[y].addEventListener('mouseover', colorChange);
        container.appendChild(divs[y]);
    }
}
function colorChange(e) {
    e.target.style.backgroundColor = 'black';
}
function resetBackground() {
    for (let j = 0; j < divs.length; j++) {
        divs[j].style.backgroundColor = '';
    }
}
function setSquares() {
    //squareSideCount = prompt("Choose the amount of squares per side");
}

resetBtn.addEventListener('click', () => {
    resetBackground();
    setSquares();
});