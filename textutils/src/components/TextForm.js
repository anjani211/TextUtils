import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    console.log("upper case");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={handleOnChange}
          value={text}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to upper case
      </button>
    </div>
  );
}
