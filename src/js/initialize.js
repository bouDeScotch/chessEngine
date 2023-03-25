import("./dataStructures.js");

// Create a 8x8 grid of squares in the document
let grid = document.getElementById('grid');
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('data-y', 8 - i);
        square.setAttribute('data-x', j + 1);
        square.classList.add((i + j) % 2 === 0 ? 'white' : 'black');
        grid.appendChild(square);
    }
}