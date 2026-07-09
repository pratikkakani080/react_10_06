import React, { useEffect, useState } from "react";
import { getItem } from "../../utils/storage";
import Button from "../../components/button";
import { useNavigate, useSearchParams } from "react-router";

function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState(getItem("users"));

  

  useEffect(() => {
    const storedUsers = getItem("users");
    setUsers(storedUsers);
  }, []);

  return (
    <div>
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
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Users;
