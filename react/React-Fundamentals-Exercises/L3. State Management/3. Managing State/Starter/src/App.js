import { useState } from 'react';
import corgi from "./corgi.jpg";
import "./App.css";

const App = () => {
  const [numberOfLikes, setNumberOfLikes] = useState(0);

  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi"></img>
      <p>Amount of likes: {numberOfLikes}</p>
      <button onClick={() => setNumberOfLikes(numberOfLikes + 1)}>Like</button>
    </div>
  );
};

export default App;
