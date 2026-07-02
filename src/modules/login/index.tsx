import React, { useState } from "react";
import Button from "../../components/button";
import { clearStore, getItem, storeItem } from "../../utils/storage";

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
    clearStore()
  };

  const handleToggle = () => {
    setFirst(!first)
    console.log(getItem('firstName'))
  }

  const handleChange  = (ev: any) => {
        setFirstName(ev.target.value)
  }

  const handleSave = () => {
    storeItem('firstName', firstName)
  }

  return (
    <div>
      <Button buttonClick={handleClick} buttonText={'Clear store'} />
      <Button buttonClick={handleToggle} buttonText={'Get Item'} />
      <Button buttonClick={handleSave} buttonText={'Submit'} />
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
