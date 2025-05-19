javascript// Define the array of objects
const items = [
  { id: 1, name: 'Item 1', description: 'Description for item 1' },
  { id: 2, name: 'Item 2', description: 'Description for item 2' },
  { id: 3, name: 'Item 3', description: 'Description for item 3' },
  // Add more objects as needed
];

// Get references to DOM elements
const container = document.querySelector('.cards-container');
const addButton = document.querySelector('.add-button');

// Function to render the cards
function renderCards() {
  // Clear the container
  container.innerHTML = '';

  // Loop through the array and create HTML for each item
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    const title = document.createElement('h3');
    title.textContent = item.name;

    const desc = document.createElement('p');
    desc.textContent = item.description;

    card.appendChild(title);
    card.appendChild(desc);

    container.appendChild(card);
  });
}

// Event handler for adding a new item
function handleAdd() {
  const newItem = {
    id: items.length + 1,
    name: \Item ${items.length + 1}\,
    description: \Description for item ${items.length + 1}\,
  };
  items.push(newItem);
  renderCards();
}

// Attach event listener to the button
addButton.addEventListener('click', handleAdd);

// Initial rendering
renderCards();
function renderCards() {
    let container = document.getElementById("cardsContainer");
    container.innerHTML = "";
    places.forEach((place, index) => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${place.image}" alt="">
            <h3>${place.title}</h3>
            <p>${place.description}</p>
            <button onclick="deleteCard(${index})">Удалить</button>
        `;
        container.appendChild(card);
    });
function deleteCard(index) {
    places.splice(index, 1);
    renderCards();
}
