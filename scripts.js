'use strict';


const container = document.querySelector('.container');

let squares = 144;

// core program to create divs within container
for (let i = 0; i < squares; i++) {
    const divs = document.createElement('div');
    divs.className = 'js-div';
    container.appendChild(divs);
    divs.addEventListener('mouseover', colorChange); // add event listener to every created div
}

function colorChange(e) {
    e.target.style.backgroundColor = 'black';
}

const newDivs = document.querySelector('.js-div'); // only sets first div


const resetBtn = document.querySelector('#grid-reset');
resetBtn.addEventListener('click', () => {
    newDivs.style.backgroundColor = '';
});

