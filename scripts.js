'use strict';

const container = document.querySelector('.container');
const resetBtn = document.querySelector('#grid-reset');
const main = document.querySelector('#main-content');

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

resetBtn.addEventListener('click', () => {
    resetBackground();
    modal.style.display = "block";
    main.classList.add('blur');
});

// modal content and functions
let modal = document.getElementById("input-modal");
let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    main.classList.remove('blur');
    modal.style.display = "none";
}
window.onclick = function(e) {
    if (e.target == modal) {
        main.classList.remove('blur');
        modal.style.display = "none";
    }
}