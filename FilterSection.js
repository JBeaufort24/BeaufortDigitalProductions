document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  const cards = document.querySelectorAll(".project-card");
  
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // 1. Remove 'active' class from all buttons and add to the clicked one
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      
      // 2. Get the filter value
      const filterValue = button.getAttribute("data-filter");
      
      // 3. Show/Hide cards based on filter value
      cards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        
        if (filterValue === "all" || filterValue === cardCategory) {
          card.classList.remove("hide");
          card.classList.add("show");
        } else {
          card.classList.remove("show");
          card.classList.add("hide");
        }
      });
    });
  });
});