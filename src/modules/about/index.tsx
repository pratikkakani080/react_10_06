import React from "react";

export default function About() {
  return (
    <div>
      About
      <div
        onClick={(event) => {
          console.log("event =====> ", event);
        }}
      >
        test
      </div>
      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
      ></input>
      <legend>Select your favorite language:</legend>
      <div>
        <input
          type="radio"
          id="html"
          name="language"
          value="HTML"
          onChange={(e) => console.log(e.target.value, e.target.checked)}
        ></input>
        <label htmlFor="html">HTML</label>
      </div>
      <div>
        <input
          type="radio"
          id="css"
          name="language"
          value="CSS"
          onChange={(e) => console.log(e.target.value, e.target.checked)}
        ></input>
        <label htmlFor="css">CSS</label>
      </div>
      <div>
        <input
          type="radio"
          id="javascript"
          name="language"
          value="JavaScript"
          onChange={(e) => console.log(e.target.value, e.target.checked)}
        ></input>
        <label htmlFor="javascript">JavaScript</label>
      </div>
    </div>
  );
}
