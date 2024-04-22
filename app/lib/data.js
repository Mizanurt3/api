const Post = {
    id: Number,
    title: String,
    desc: String,
    date: Date,
  };
  
  // Array to store posts
  let posts = [];
  
  // Function to get all posts
  export const getPosts = () => posts;
  
  // Function to add a new post
  export const addPost = (post) => {
    // Type check for post object (optional)
    // if (!post || !post.id || !post.title || !post.desc || !post.date) {
    //   throw new Error("Invalid post object provided");
    // }
    posts.push(post);
  };
  
  // Function to delete a post by ID
  export const deletePost = (id) => {
    posts = posts.filter((post) => post.id.toString() !== id);
  };
  
  // Function to update an existing post
  export const updatePost = (id, title, desc, date) => {
    const post = posts.find((post) => post.id.toString() === id);
    if (post) {
      post.title = title;
      post.desc = desc;
      post.date = date;
    
      
    } else {
      throw new Error("No post found with the provided ID");
    }
  };
  
  // Function to get a post by ID
  export const getById = (id) => {
    return posts.find((post) => post.id.toString() === id);
  };
  