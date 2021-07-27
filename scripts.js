'use strict';


const container = document.querySelector('.container');

// core program to create divs within container

for(let x = 0; x < 16; x++) {
    for(let y = 0; y < 16; y++) {
        const divs = document.createElement('div');
        divs.className = 'js-div';
        container.appendChild(divs);
        divs.addEventListener('mouseover', colorChange);
    }
}

function colorChange(e) {
    e.target.style.backgroundColor = 'black';
}

const newDivs = document.querySelector('.js-div'); // only sets first div


const resetBtn = document.querySelector('#grid-reset');
resetBtn.addEventListener('click', () => {
    newDivs.style.backgroundColor = '';
});

