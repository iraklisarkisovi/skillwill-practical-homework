function expo(number, power, callback) {
    
    if (power === 0) {
        return callback(1);
    }
 
    return expo(number, power - 1, function(result) {
        return callback(number * result);
    });
}
 
expo(4, 4, function(result) {
    console.log(result);  
});

//------------------------------------------------------

// Fetch posts from the API and display them in the DOM
async function fetchAndDisplayPosts() {
    try {
      // Fetch data from the API
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // Parse the JSON response
      const posts = await response.json();
      
      // Get the container element from the DOM
      const postsContainer = document.getElementById('posts-container');
      
      // Clear any existing content in the container
      postsContainer.innerHTML = '';
      
      // Loop through the posts and add them to the container
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        
        postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        `;
        
        postsContainer.appendChild(postElement);
      });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  
  // Call the function to fetch and display posts
  fetchAndDisplayPosts();
  
//---------------------------------------------------------------------

async function deepCopyObject(obj) {
  return new Promise((resolve, reject) => {
      if (typeof obj !== 'object' || obj === null) {
          reject(new Error("Argument is not an object"));
      } else {
          const deepCopy = JSON.parse(JSON.stringify(obj));
          resolve(deepCopy);
      }
  });
}

deepCopyObject({name: "John", age: 30})
  .then(copiedObj => {
      console.log("Deep Copy:", copiedObj);
})
  .catch(error => {
      console.error("Error:", error.message);
});