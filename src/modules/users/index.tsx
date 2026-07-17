import React, { useContext, useEffect, useState } from "react";
import { getItem, storeItem } from "../../utils/storage";
import Button from "../../components/button";
import { useNavigate, useSearchParams } from "react-router";
import MyContext from "../../configs/myContext";

function Users() {
  const { testData } = useContext(MyContext);
  const navigate = useNavigate();
  const [users, setUsers] = useState(getItem("users"));

  useEffect(() => {
    const storedUsers = getItem("users");
    setUsers(storedUsers);
  }, []);

  const handleDelete = (id) => {
    const ans = confirm("are you really want to delete this user?");
    if (ans) {
      const storedUsers = getItem("users");
      const filteredUsers = storedUsers.filter((el) => el.id !== id);
      storeItem("users", filteredUsers);
      setUsers(filteredUsers);
    }
  };

  return (
    <div>
      {testData}
      <Button
        buttonText={"Back"}
        buttonClick={() => navigate("/signup")}
      ></Button>
      <table>
        <tr>
          <th>User Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Edit</th>
        </tr>
        {users?.map((el) => {
          return (
            <tr key={el.email}>
              <td>{el.userName}</td>
              <td>{el.email}</td>
              <td>{el.password}</td>
              <td>
                <Button
                  buttonText={"Edit"}
                  buttonClick={() => {
                    navigate("/signup?id=" + el.id);
                  }}
                ></Button>
              </td>
              <td>
                <Button
                  buttonText={"Delete"}
                  buttonClick={() => handleDelete(el.id)}
                ></Button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Users;
