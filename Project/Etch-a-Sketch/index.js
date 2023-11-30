document.addEventListener("DOMContentLoaded", function() {
    // Create a grid container
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");

    // Create 16x16 grid items and append them to the container
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridContainer.appendChild(gridItem);

            
                        // Add mouseover event listener to change color on hover
                        gridItem.addEventListener("mouseover", function () {
                            gridItem.style.backgroundColor = "#fff";
                        });

        }
    }

    // Append the grid container to the body
    document.body.appendChild(gridContainer);
});

function clearButton(){
    const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(function (gridItem) {
            gridItem.style.backgroundColor = "#ddd";
            gridItem.classList.remove("clicked"); // Also remove the 'clicked' class
        });

}
