import './App.css';

function App() {
  const name = 'Marisela';
  const post = {
    title: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Check out this body property!",
    comments: ["First!", "Great post", "Hire this author now!"]
  }

  return (
    <div className="App">
      {/* can use variables with curly brackets */}
      <p>{name}</p>
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.body}</p>
      <p>{post.comments[0]}</p>
      <p>{post.comments[1]}</p>
      <p>{post.comments[2]}</p>
    </div>
  );
}

export default App;
