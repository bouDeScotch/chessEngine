// Check if any squares are clicked
let squares = document.getElementsByClassName('square');
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function() {
        let x = squares[i].getAttribute('data-x');
        let y = squares[i].getAttribute('data-y');
        console.log(`Clicked square (${x}, ${y})`);
    });
}