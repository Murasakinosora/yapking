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
      <div className="display">
        <div className="dispContainer">
          <div className="con">
            <h3>Entry #1</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <div className="divide"></div>
            <h3>Entry #1</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
