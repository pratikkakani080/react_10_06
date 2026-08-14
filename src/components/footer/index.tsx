import React from "react";
import useStorage from "../../hooks/useStorage";

export default function Footer() {
  const [state, setState, storeData] = useStorage("default");
  console.log("🚀 ~ Footer ~ data:", state, setState);

  return (
    <div
      onClick={() => {
        setState("value changed");
        storeData('testing', "data stored");
      }}
    >
      Footer
    </div>
  );
}
