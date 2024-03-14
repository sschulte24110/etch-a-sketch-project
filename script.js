const gridContainer = document.querySelector('#grid-container');
const userInput = document.querySelector('.button');
const INITIALGRID = 16;



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
            element.style.backgroundColor = getRandomColor();
        });
    });
}
gridGenerator(INITIALGRID);

function getRandomColor () {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color +- letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

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