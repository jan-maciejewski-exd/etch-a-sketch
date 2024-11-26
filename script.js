const container = document.querySelector(".gridContainer")

// Create a 16x16 grid. First column of subcontainers
for (let i = 0; i < 160; i++) {
    subcontainer = document.createElement("div")
    subcontainer.classList.add('subcontainer')
    container.appendChild(subcontainer)

    // Create 16 divs within as columns
    for (let i = 0; i < 160; i++) {
        const newDiv = document.createElement("div")
        newDiv.classList.add('horizontalDiv')
        subcontainer.appendChild(newDiv)
        
    }
};

cells = document.querySelectorAll('.horizontalDiv');

cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "green"
    })
})

resetBtn = document.querySelector(".resetBtn")

resetBtn.addEventListener("click", () => {
    cells.forEach((cell) => {
        cell.style.backgroundColor = null
    })
})