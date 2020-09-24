import React from 'react';
import './App.css';

function App() {
  const buttonText = "Click Me!"
  return (
    <div className="App">
      <label for="name">Name: </label>
      <input id="name" type="text" /><br />
      <button type="submit">{buttonText}</button>
    </div>
  );
}

export default App;
