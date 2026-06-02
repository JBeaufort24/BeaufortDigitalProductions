// Product data
const projects = [
    {
      id: 1,
      title: "WhisperInk",
      category: "webdev",
      description: 0,
      image: "/Kush Images/Kush 1.jpg"
    },
  ]
  
function renderProducts(productsToRender = projects) {
  const grid = document.getElementById('projectGrid');
  grid.innerHTML = productsToRender.map(product => `
                <div class="project-card" data-category="${projects.category}">
                    <img src="${projects.image}" alt="${projects.title}" class="projects-image">
                    <div class="projects-info">
                        <h3 class="projects-title">${projects.title}</h3>
                        <p class="projects-category">${projects.category.charAt(0).toUpperCase() + projects.category.slice(1)}</p>
                        <div class="projects-description">${projects-description}</div>
                        <button class="add-to-cart" onclick="addToCart(${project.id})">Add to Cart</button>
                    </div>
                </div>
            `).join('');
}

function filterProducts(category) {
  // Update active filter button
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  // Filter products
  const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
  renderProducts(filteredProducts);
}
