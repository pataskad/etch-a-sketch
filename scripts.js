'use strict';

// container node housing div grid
const container = document.querySelector('.container');

// create node div elements before named function to/and hold in memory? 
const divs = document.createElement('div');
divs.style.border = '2px solid gray'; // may need to change to transparent later
divs.style.height = '32px';
divs.style.width = '32px';

container.appendChild(divs);

