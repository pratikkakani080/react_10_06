import React, { useRef, useState } from "react";
import client from "../../configs/apolloClient";
import { gql } from "@apollo/client";

export default function About() {
  const ref = useRef(null);
  const dataRef = useRef("");
  const [dataState, setDataState] = useState("");
  console.log("🚀 ~ About ~ ref:", ref);

  client
  .query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          photo
        }
      }
    `,
  })
  .then((result) => console.log(result));

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
          setDataState(e.target.value);
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
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <label htmlFor="vehicle1"> I have a bike </label>
      <br />
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
      <label htmlFor="vehicle2"> I have a car </label>
      <br />
      <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
      <label htmlFor="vehicle3"> I have a boat </label>
      <br />
      <button type="submit">Submit</button>
    </div>
  );
}
