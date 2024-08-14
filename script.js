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

async function fetchAndDisplayPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const posts = await response.json();
      
      const postsContainer = document.getElementById('posts-container');
      
      postsContainer.innerHTML = '';
      
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
