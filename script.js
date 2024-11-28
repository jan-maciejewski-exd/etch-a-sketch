const container = document.querySelector(".gridContainer");
let gridSize = 16;

// Initialize a button that prompts user to change grid size
const gridSizeBtn = document.querySelector(".gridSizeBtn");

gridSizeBtn.addEventListener("click", () => {
    let newSize = parseInt(prompt("Choose new grid base between 1 and 100"));
    while (isNaN(newSize) || newSize > 100 || newSize < 1) {
        newSize = prompt("Choose more wisely");
    };    
    gridSize = newSize;
    theGrid = createGrid(gridSize);
})

// Create a 16x16 grid. First column of subcontainers
function createGrid(size) {
    // Clear the container contents
    container.innerHTML = "";

    for (let i = 0; i < size; i++) {
        subcontainer = document.createElement("div");
        subcontainer.classList.add('subcontainer');
        container.appendChild(subcontainer);
        
        // Create 16 divs within as columns
        for (let j = 0; j < size; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add('horizontalDiv');
            subcontainer.appendChild(newDiv);
            
        }
    }
    // Select grid cells and listen for mouse hovering
    cells = document.querySelectorAll('.horizontalDiv');
    
    cells.forEach((cell) => {
        cell.style.opacity = 0.1;

        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "green";
            cell.style.opacity = parseFloat(cell.style.opacity) + 0.1
        })
    })
    
};


createGrid(gridSize);

const resetBtn = document.querySelector(".resetBtn");

resetBtn.addEventListener("click", () => {
    cells.forEach((cell) => {
        cell.style.backgroundColor = null;
    })
})