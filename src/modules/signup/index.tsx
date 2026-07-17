import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/button";
import { getItem, storeItem } from "../../utils/storage";
import { useNavigate, useSearchParams } from "react-router";
import { v4 as uuidv4 } from "uuid";
import MyContext from "../../configs/myContext";

function SignUp() {
  let navigate = useNavigate();
  const { setTestData } = useContext(MyContext)
  const [userInfo, setUserInfo] = useState({});
  const [errors, setErrors] = useState({});
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    const stoerdUsers = getItem("users") || [];
    const editedUser = stoerdUsers.find((el) => el.id === id);
    setUserInfo(editedUser);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let formIsValid = true;
    let err = {};
    if (!userInfo.userName) {
      formIsValid = false;
      err.userName = "* please enter valid username";
    }
    if (!userInfo.email) {
      formIsValid = false;
      err.email = "* please enter valid username";
    }
    if (!userInfo.password) {
      formIsValid = false;
      err.password = "* please enter valid username";
    }
    if (!userInfo.confirmPassword) {
      formIsValid = false;
      err.confirmPassword = "* please enter valid username";
    }
    setErrors(err);
    return formIsValid;
  };

  const handleSubmit = () => {
    if (validate()) {
      const storedUsers = getItem("users") || [];
      let newData = [];
      if (id) {
        newData = storedUsers.map((el) => (el.id === id ? userInfo : el));
      } else {
        newData = [...storedUsers, { ...userInfo, id: uuidv4() }];
      }
      storeItem("users", newData);
      navigate("/users");
      setTestData('this is from register')
    }
  };

  return (
    <div>
      <label>
        User Name{" "}
        {errors.userName && (
          <span style={{ color: "red" }}>{errors.userName}</span>
        )}
      </label>
      <input
        type="text"
        id="userName"
        name="userName"
        value={userInfo?.userName}
        onChange={handleChange}
      ></input>
      <br />
      <label htmlFor="email">
        Email{" "}
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </label>
      <input
        type="text"
        id="email"
        name="email"
        value={userInfo?.email}
        onChange={handleChange}
      ></input>
      <br />
      <label htmlFor="password">
        Password{" "}
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password}</span>
        )}
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={userInfo?.password}
        onChange={handleChange}
      ></input>
      <br />
      <label htmlFor="confirmPassword">
        Confirm Password{" "}
        {errors.confirmPassword && (
          <span style={{ color: "red" }}>{errors.confirmPassword}</span>
        )}
      </label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={userInfo?.confirmPassword}
        onChange={handleChange}
      ></input>
      <br />
      <Button
        buttonText={searchParams.get("id") ? "Update user" : "Create user"}
        buttonClick={handleSubmit}
      ></Button>
    </div>
  );
}

export default SignUp;
