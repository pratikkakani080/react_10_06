import React, { useState } from "react";
import MyContext from "../myContext";

export default function MyContextProvider(props) {
  console.log("🚀 ~ MyContextProvider ~ props:", props)
  const [testData, setTestData] = useState("");
  return (
    <MyContext.Provider value={{ testData, setTestData }}>
      // object short hand
      {props.children}
    </MyContext.Provider>
  );
}
