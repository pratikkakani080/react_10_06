import React from "react";
import SubChild2 from "./subChild2";

export default function Child2(props) {
  console.log("child 2", props.upliftedName);

  return (
    <div>
      Child2
      <SubChild2 />
    </div>
  );
}
