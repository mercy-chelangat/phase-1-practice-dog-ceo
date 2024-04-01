console.log('%c HI', 'color: firebrick')
// Function to fetch images and add them to the DOM
function fetchAndDisplayImages() {
    fetch('https://api.example.com/images')
      .then(response => response.json())
      .then(data => {
        data.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          document.body.appendChild(img);
        });
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }
  
  // Call the function on page load
  window.addEventListener('load', fetchAndDisplayImages);
  // Function to fetch and display dog breeds
function fetchAndDisplayBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const breedList = document.getElementById('breedList');
  
        // Clear existing list items
        breedList.innerHTML = '';
  
        // Iterate over the breeds and add them to the list
        for (const breed in data.message) {
          const listItem = document.createElement('li');
          listItem.textContent = breed;
          breedList.appendChild(listItem);
        }
      })
      .catch(error => {
        console.error('Error fetching breeds:', error);
      });
  }
  
  // Call the function on page load
  window.addEventListener('load', fetchAndDisplayBreeds);
  
  
