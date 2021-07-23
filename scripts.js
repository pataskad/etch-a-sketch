'use strict';

// container node housing div grid
const container = document.querySelector('.container');

// create node div elements before named function to/and hold in memory? 
// const divs = document.createElement('div');

// container.appendChild(divs);

let squares = 144;


for (let i = 0; i < squares; i++) {
    const divs = document.createElement('div');
    divs.className = 'js-div';

    container.appendChild(divs);
}