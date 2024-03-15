const gridContainer = document.querySelector('#grid-container');
const userInput = document.querySelector('.button');
const STARTINGGRID = 16;

function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

function gridGenerator(index) {
    gridContainer.innerHTML = "";

    for (let i = 0; i < index; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < index; j++) {
            const col = document.createElement('div');
            col.classList.add('cell');
            row.appendChild(col);
        }
        gridContainer.appendChild(row);
    }

    const hoverEffect = document.querySelectorAll('.cell');

    hoverEffect.forEach((element) => {
        element.addEventListener('mouseover', () => {
            const color = getRandomRgbColor();
            element.style.backgroundColor = color;
        });
    });
}
gridGenerator(STARTINGGRID);



userInput.addEventListener('click', () => {
    const userInputValue = prompt('Please select a from 0 to 100.', 'Enter a number');
    if (userInputValue !==null) {
        const gridSize = parseInt(userInputValue);
        if (!isNaN(gridSize) && gridSize > 0) {
            gridGenerator(gridSize);
        } else {
            alert('Please enter a valid positive number.');
        }
    }
});