import React, { useEffect } from "react";
import SubChild1 from "./subChild1";

export default function Child1(props) {
  let fName = "Mahek";
  useEffect(() => {
    props.setUpliftedName(fName);
    props.callbkfn(fName);
  }, []);

  return (
    <div>
      Child1
      <SubChild1 />
    </div>
  );
}
