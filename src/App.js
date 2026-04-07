import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    window.location.replace('./home.html');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redirecting to home page...</h1>
        <p>If the redirect does not happen automatically, <a href="./home.html">click here</a>.</p>
      </header>
    </div>
  );
}

export default App;
