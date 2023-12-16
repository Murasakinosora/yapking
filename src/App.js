import React from "react";
import "./App.css";
const App = () => {
  return (
    <div className="container">
      <div className="userDetails">
        <div className="input">
          <h1>Diary Entry</h1>
          <div className="entry">
            <input className="Title" placeholder="Enter Entry Title Here.." />
            <h2>Entry Title</h2>
          </div>
          <textarea className="body" placeholder="Enter Content Here.." />
        </div>
      </div>
      <div className="display"></div>
    </div>
  );
};

export default App;
