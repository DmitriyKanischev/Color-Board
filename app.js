const board = document.getElementById('board');
const colors = ['#c28cff', '#FFA4F6', '#a992ff', '#fcdd6c', '#f9b690bc', '#ffbf9d', '#d6ffb5'];
const SQUARES_NUMBER = 1200;


for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor);

    square.addEventListener('mouseleave', removeColor);

    board.append(square);
}

function setColor(event) {
    const element = event.target;
    let color = getRandomColor();
    element.style.backgroundColor = `${color}`;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
    const element = event.target;
    element.style.backgroundColor = '#F0E6FF';
    element.style.boxShadow = `0 0 2px #d5baff`
}

function getRandomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}