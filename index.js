let container = document.querySelector('.container');
let outer = document.querySelector('.outer');
let button = document.querySelector('.button');

let numOfTiles = 16 * 16;
let cols = Math.sqrt(numOfTiles);

function createGrid(numOfTiles, cols) {
    for (let i = 0; i < numOfTiles; i++) 
    {
        let tile = document.createElement('div');
        tile.classList.add('tile');
        container.appendChild(tile);
    }
    let tiles = document.querySelectorAll('.tile');

    tiles.forEach(tile => {
        let randomColor1 = Math.random() * 255;
        let randomColor2 = Math.random() * 255;
        let randomColor3 = Math.random() * 255;
        tile.style.cssText = `background-color: lightgray`;
        tile.style.width = 'auto';
        tile.style.height = 'auto';
        tile.addEventListener('mouseover', () => {
            tile.style.cssText = `background-color: rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
        });
    });

    outer.style.cssText = 
    `
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-color: lightgray;
        flex-direction: column;
    `;

    container.style.cssText = 
    `
        display: inline-grid;
        grid-template-columns: repeat(${cols}, 1fr);
        height: 65vh;
        width: 65vh;
        border: 10px solid black;
        border-radius: 25px;
        background-color: gray;
        gap: 1px;
    `;


}

function destroyGrid() {
    let tiles = document.querySelectorAll('.tile');

    tiles.forEach(tile => {
        tile.remove();
    });
    
}


button.addEventListener('click', changeSizeReset);

function changeSizeReset() {
    let answer = parseInt(prompt("What would you like the length of the square to be? 1-100"));
    if (typeof(answer) != 'number')
    {
        alert("Invalid input please try again.");
        alert(typeof(answer));
    } else if (answer < 1 || answer > 100) {
        alert("Number too big or too small. Try again");
    } else {
        let numberOfSquares = answer * answer;
        let columns = answer;
        destroyGrid();
        createGrid(numberOfSquares, columns);

    }
}

createGrid(numOfTiles, cols);