let container = document.querySelector('.container');
let outer = document.querySelector('.outer');

let numOfTiles = 16 * 16;
let cols = Math.sqrt(numOfTiles);

for (let i = 0; i < numOfTiles; i++) 
{
    let tile = document.createElement('div');
    tile.classList.add('tile');
    container.appendChild(tile);
}

let tiles = document.querySelectorAll('.tile');

tiles.forEach(tile => {
    tile.style.width = 'auto';
    tile.style.height = 'auto';
});

outer.style.cssText = 
    `
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-color: lightgray;
    `;
container.style.cssText = 
    `
        display: inline-grid;
        grid-template-columns: repeat(${cols}, 1fr);
        height: 65vh;
        width: 65vh;
        border: 1px solid black;
    `;

tiles.addEventListener('hover', () => {
    tile.style.color = 'black';
});