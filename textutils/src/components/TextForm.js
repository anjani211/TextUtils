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
  const handleLoClick = () => {
    console.log("upper case");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleReset = () => {
    setText("");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#121212",
              color: props.mode === "dark" ? "white" : "black",
            }}
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
        <button className="btn btn-primary ms-2" onClick={handleLoClick}>
          Convert to lower case
        </button>
        <button className="btn btn-primary ms-2" onClick={handleReset}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-4"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in text area above to preview it here"}
        </p>
      </div>
    </>
  );
}
