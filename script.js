const container = document.querySelector(".gridContainer")

// Create a 4by4 grid. First column of subcontainers
for (let i = 0; i < 4; i++) {
    subcontainer = document.createElement("div")
    subcontainer.classList.add('subcontainer')
    container.appendChild(subcontainer)

    // Create 4 divs within as columns
    for (let i = 0; i < 4; i++) {
        const newDiv = document.createElement("div")
        
    }
}