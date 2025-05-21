  const ads = [
    { title: "Car for rent", image: "car.jpg?text=Ad+1" },
    { title: "Selling a garage", image: "gara.jpg?text=Ad+2" },
    { title: "Italo Disco records", image: "ital.jpg?text=Ad+3" },
    { title: "Czech vase", image: "vase.png?text=Ad+4" },
    { title: "Anime action figure", image: "anim.jpg?text=Ad+5" },
    { title: "I put the kittens in good hands", image: "cat.jpg?text=Ad+6" }
  ];

const adContainer = document.getElementById('ad-card');
  const addButton = document.getElementById('add-button');

  function renderCards() {
    adContainer.innerHTML = '';

    ads.forEach((ad, index) => {
      const card = document.createElement('div');
      card.className = 'card';

      const title = document.createElement('h3');
      title.textContent = ad.title;

      const btnGo = document.createElement('button');
      btnGo.textContent = "Go";

      const img = document.createElement('img');
      img.src = ad.image;
      img.alt = ad.title;

      btnGo.addEventListener('click', () => {
if(img.style.display === 'block'){
          img.style.display = 'none';
          btnGo.textContent = "Go";
        } else {
          img.style.display = 'block';
          btnGo.textContent = "Hide";
        }
      });

      const btnDelete = document.createElement('button');
      btnDelete.textContent = "Delete";
      btnDelete.classList.add('delete-btn');
      btnDelete.addEventListener('click', () => {
        ads.splice(index, 1);
        renderCards();
      });

      card.appendChild(title);
      card.appendChild(btnGo);
      card.appendChild(btnDelete);
      card.appendChild(img);

      adContainer.appendChild(card);
    });
  }

  addButton.addEventListener('click', () => {
    const newAdIndex = ads.length + 1;
    ads.push({
      title: Ad {newAdIndex},
      image: https://via.placeholder.com/300x200.png?text=Ad+${newAdIndex}
    });
    renderCards();
  });

function addPlace() {
    let title = document.getElementById("titleInput").value;
    let description = document.getElementById("descriptionInput").value;
    let image = document.getElementById("imageInput").value;

    places.push({ title, description, image });
    renderCards();
}


  renderCards();
