fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
});
// Select all category items
const categories = document.querySelectorAll('.category-item');
let selectedCategory = null;

// Add click event listeners
categories.forEach(category => {
  category.addEventListener('click', () => {
    // Remove 'selected' class from all categories
    categories.forEach(c => c.classList.remove('selected'));
    
    // Add 'selected' class to the clicked category
    category.classList.add('selected');
    
    // Store the selected category
    selectedCategory = category.textContent;
  });
});

// java script of scroller

// Handle submit button
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', () => {
  if (selectedCategory) {
    alert(`You selected: ${selectedCategory}`);
    // You can also send this value to your server here
  } else {
    alert('Please select a category first!');
  }
});
