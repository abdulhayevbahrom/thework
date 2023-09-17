import React from "react";
import { useState, useEffect, memo } from "react";
import axios from "axios";
import './AllAdmins.css'
function AllAdmins() {
  let adminAPI = "https://64da6002e947d30a260b2eee.mockapi.io/foods/admins";
  const [admin, setAdmin] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(adminAPI)
      .then((res) => setAdmin(res.data))
      .catch((err) => console.log(err))
     .finally(()=>setLoading(false));
  }, []);
<<<<<<< HEAD

  console.log(admin);
=======
 
console.log(loading);
>>>>>>> origin/Gulnoza
  return (
    <div className="AllAdmins">
      {loading ? (
        <div id="loading-bar-spinner" class="spinner">
          <div class="spinner-icon"></div>
        </div>
<<<<<<< HEAD
      ) :
        (<table>
=======
      ) : (
        <table>
>>>>>>> origin/Gulnoza
          <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Username</th>
              <th>Password</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {admin.map((item, index) => (
              <tr key={index}>
                <th className="numberID">{index + 1}</th>
                <th>{item.firstname}</th>
                <th>{item.lastname}</th>
                <th>{item.username}</th>
                <th>{item.password}</th>
                <th>{item.age}</th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default memo(AllAdmins);
