import React, {useState} from "react";
import './App.css';

import Box from "./Components/Box";

function App() {
  const [color, setColor] = useState("");
    const [boxes, setBoxes] = useState([]);
    
    const createBox = (e) => {
        e.preventDefault();
        const newBox = {
            color : color
        };

        console.log(newBox);
        const updatedBoxes = [newBox, ...boxes];
        setBoxes(updatedBoxes);

        setColor("");
    }


    return (
        <div className="container">
        <form onSubmit={(e) => { createBox(e); } }>
          <div className="row align-items-center justify-content-center">
            <div className="my-4 col-2">
              <label className="mx-4 fs-4">Color</label>
              <input onChange={(e) => {
                setColor(e.target.value);
              } }
                type="text"
                value={color} />
            </div>
            <input type="submit" value="Submit" className="col-sm-1 bg-info text-white" />
          </div>
      </form>
      <main className="d-flex flex-row flex-wrap justify-content-center align-items-center">
          {boxes === null ? (
            <img
              src="https://64.media.tumblr.com/tumblr_maxclot2R71qg6rkio1_500.gifv"
              alt="loading cat" className="justify-content-center"/>
          ) : (
            boxes.map((color, i) => {
              return (
                <div key={ i } className="box" style={{backgroundColor: {color}}}></div>
              );
            })
          )}
        </main>
      </div>
    );
}

export default App;
