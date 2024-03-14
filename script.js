const gridContainer = document.querySelector('#grid-container');
const userInput = document.querySelector('.button');
const ititialGrid = 16;

function getRandomColor () {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color +- letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

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