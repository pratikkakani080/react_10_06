import React, { useState } from "react";
import Button from "../../components/button";

export default function Login() {
  const [state, setState] = useState("test");
  const [first, setFirst] = useState(true)
  const [firstName, setFirstName] = useState('')
  let data = "test";
  console.log("🚀 ~ Login ~ data: outer", data);

  const handleClick = () => {
    data = "data updated";
    setState("data updated");
    console.log("🚀 ~ Login ~ data: inner", data);
  };

  const handleToggle = () => {
    setFirst(!first)
  }

  const handleChange  = (ev: any) => {
        setFirstName(ev.target.value)
  }

  return (
    <div>
      <Button buttonClick={handleClick} />
      <Button buttonClick={handleToggle} />
      {data}
      <br />
      {state}
      <br />
      {first ? 'yes' : 'no'}

      <input type="text" name="firstName" onChange={handleChange} />

      {firstName}
    </div>
  );
}
