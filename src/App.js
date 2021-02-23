import './App.css';

function App() {
  const name = 'Marisela';
  const comment ='Here are the comments:'
  const post = {
    title: "Dinosaurs Are Awesome",
    author: "Stealthy Stegosaurus",
    body: "Check out this body property!",
    comments: ["Great title!", "Great post", "Hire this author now!"]
  }

  return (
    <div className="App">
      {/* can use variables with curly brackets */}
      <p>{name}</p>
      <p><h1>Title: {post.title}</h1></p>
      <p>Author: {post.author}</p>
      <p>{post.body}</p>
      <p><h3>{comment}</h3></p>
      <p>{post.comments[0]}</p>
      <p>{post.comments[1]}</p>
      <p>{post.comments[2]}</p>
    </div>
  );
}

export default App;
