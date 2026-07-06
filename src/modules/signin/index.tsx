import React, { useEffect, useState } from "react";
import { storeItem } from "../../utils/storage";
import { toast } from "react-toastify";

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

  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log('calling on mount');
    
    return () => {
      console.log('calling at the time of unmounting');
      
    }
  }, [errors])

  const handleChange = (e: any) => {
    const { name, checked, type, value } = e.target;

    // setErrors({ ...errors, [name]: false });

    setUserInfo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // setUserInfo({
    //   ...userInfo,
    //   [name]: type === "checkbox" ? checked : value,
    // });
  };

  const validate = () => {
    let isFormValid = true;
    let errs = {};
    if (!userInfo.uname) {
      isFormValid = false;
      errs.uname = true;
    }
    if (!userInfo.password) {
      isFormValid = false;
      errs.password = true;
    }
    setErrors(errs);
    return isFormValid;
  };

  const handleSubmit = () => {
    if (validate()) {
      storeItem("userInfo", userInfo);
    }
  };

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
        {errors.uname && (
          <span style={{ color: "red" }}>* this field is mandatory</span>
        )}
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
        {errors.password && (
          <span style={{ color: "red" }}>* this field is mandatory</span>
        )}
        <br />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
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
