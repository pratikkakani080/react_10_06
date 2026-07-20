import React, { useState } from "react";
import MyContext from "../myContext";

export default function MyContextProvider(props) {
  console.log("🚀 ~ MyContextProvider ~ props:", props)
  const [testData, setTestData] = useState("");
  return (
      // object short hand
    <MyContext.Provider value={{ testData, setTestData }}>
      {props.children}
    </MyContext.Provider>
  );
}
