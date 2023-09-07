// Sample data for building information
const buildings = [
    {
        name: "Building 1",
        image: "building1.jpg",
        description: "This is the description of Building 1.",
        location: "https://maps.google.com/maps?q=Building%201"
    },
    {
        name: "Building 2",
        image: "building2.jpg",
        description: "This is the description of Building 2.",
        location: "https://maps.google.com/maps?q=Building%202"
    },
    // Add more building data as needed
];

// Function to create building cards
function createBuildingCard(building) {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = building.image;
    card.appendChild(image);

    const description = document.createElement("p");
    description.textContent = building.description;
    card.appendChild(description);

    const button = document.createElement("button");
    button.textContent = "Open in Google Maps";
    button.addEventListener("click", () => {
        window.open(building.location, "_blank");
    });
    card.appendChild(button);

    return card;
}

// Populate the container with building cards
const container = document.querySelector(".container");
buildings.forEach((building) => {
    const card = createBuildingCard(building);
    container.appendChild(card);
});
