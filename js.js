const container = document.querySelector(".gridContainer");
let gridSize = 16;

// Initialize a button that prompts user to change grid size
const gridSizeBtn = document.querySelector(".gridSizeBtn");

gridSizeBtn.addEventListener("click", () => {
    let newSize = parseInt(prompt("Choose new grid base between 1 and 100"));
    while (isNaN(newSize) || newSize > 100 || newSize < 1) {
        newSize = parseInt(prompt("Choose more wisely (1-100):"));
    }
    gridSize = newSize;
    createGrid(gridSize); // Corrected to call the function directly
});

// Create a grid with dynamic size
function createGrid(size) {
    // Clear the container contents
    container.innerHTML = "";

    // Generate rows and columns
    for (let i = 0; i < size; i++) {
        const subcontainer = document.createElement("div");
        subcontainer.classList.add('subcontainer');
        container.appendChild(subcontainer);
        
        for (let j = 0; j < size; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add('horizontalDiv');
            subcontainer.appendChild(newDiv);
        }
    }

    // Add hover effects to all cells
    const cells = container.querySelectorAll('.horizontalDiv'); // Local scope
    cells.forEach((cell) => {
        cell.style.opacity = 0.1;

        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "green";
            cell.style.opacity = Math.min(parseFloat(cell.style.opacity) + 0.1, 1);
        });
    });
}

// Initial grid creation
createGrid(gridSize);

// Reset button functionality
const resetBtn = document.querySelector(".resetBtn");

resetBtn.addEventListener("click", () => {
    const cells = container.querySelectorAll('.horizontalDiv'); // Ensure latest reference
    cells.forEach((cell) => {
        cell.style.backgroundColor = null;
        cell.style.opacity = 0.1; // Reset opacity as well
    });
});
