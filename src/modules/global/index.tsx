import React, { useState } from "react";
import Child1 from "./child1";
import Child2 from "./child2";

export default function Global() {
  const [upliftedName, setUpliftedName] = useState("");
  console.log("global", upliftedName);

  const callbkfn = (name) => {
    console.log("global", name);
  };

  return (
    <div>
      Global
      <Child1 callbkfn={callbkfn} setUpliftedName={setUpliftedName} />
      <br />
      <Child2 upliftedName={upliftedName} />
    </div>
  );
}
