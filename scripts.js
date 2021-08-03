'use strict';

const container = document.querySelector('.container');
const resetBtn = document.querySelector('#grid-reset');
const main = document.querySelector('#main-content');
const formBtn = document.getElementById('input-submit-btn');
const formInput = document.getElementById('input-box');

let squareSideCount = 16; // limit squares to 100
let divs = [];

createDivGrid(squareSideCount); // initialize starting grid count

// core program to create divs within container, 16x16 grid baseline
function createDivGrid(squareSideCount) {
    clearGrid();
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

// helper functions
function colorChange(e) {
    e.target.style.backgroundColor = 'black';
}
function resetBackground() {
    for (let j = 0; j < divs.length; j++) {
        divs[j].style.backgroundColor = '';
    }
}
function removeBlur() {
    main.classList.remove('blur');
}
function clearGrid() {
    // removes all current children to allow for new grid count
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

// event listeners
resetBtn.addEventListener('click', () => {
    resetBackground();
    modal.style.display = "block";
    main.classList.add('blur');
});
formBtn.addEventListener('click', () => {
    squareSideCount = formInput.value;
    createDivGrid(squareSideCount);
    modal.style.display = "none";
    removeBlur();
});

// modal content and functions
let modal = document.getElementById("input-modal");
let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
    removeBlur();
}
window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
        removeBlur();
    }
}