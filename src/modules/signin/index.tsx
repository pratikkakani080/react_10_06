import React, { useState } from "react";
import { storeItem } from "../../utils/storage";

interface user {
  uname: string;
  password: string;
  rememberMe: boolean;
}

export default function SignIn() {
  const [userInfo, setUserInfo] = useState<user>({
    uname: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: any) => {
    const { name, checked, type, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    storeItem('userInfo', userInfo)
  }

  return (
    <>
      <div>
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
          onChange={handleChange}
        ></input>
        <br />
        <button type="submit" onClick={handleSubmit}>Login</button>
        <br />
        <label>
          <input
            type="checkbox"
            checked={userInfo.rememberMe}
            name="rememberMe"
            onChange={handleChange}
          ></input>
          Remember me
        </label>
      </div>
    </>
  );
}
