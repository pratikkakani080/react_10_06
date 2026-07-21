import React, { useRef, useState } from "react";

export default function About() {
  const ref = useRef(null);
  const dataRef = useRef("");
  const [dataState, setDataState] = useState('')
  console.log("🚀 ~ About ~ ref:", ref);
  return (
    <div>
      <p ref={ref}>About</p>
      <button
        onClick={() => {
          ref.current.style.backgroundColor = "red";
          ref.current.style.color = "white";
          console.log("🚀 ~ About ~ ref:", ref);
          console.log("🚀 ~ About ~ ref:", dataRef);
        }}
      >
        CLick me
      </button>
      <div
        onClick={(event) => {
          console.log("event =====> ", event);
        }}
      >
        test
      </div>
      <input
        type="text"
        onChange={(e) => {
          dataRef.current = e.target.value;
          setDataState(e.target.value)
          // console.log(e.target.value);
        }}
      ></input>
      data ref: {dataState || dataRef.current}
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
