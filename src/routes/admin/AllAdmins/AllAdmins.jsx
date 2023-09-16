import React from "react";
import { useState, useEffect, memo } from "react";
import axios from "axios";
import './AllAdmins.css'
function AllAdmins() {
  let adminAPI = "https://64da6002e947d30a260b2eee.mockapi.io/foods/admins";
  const [admin, setAdmin] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(adminAPI)
      .then((res) => setAdmin(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
 
console.log(admin);
  return (
    <div className="AllAdmins">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <p className="loader">Loading...</p>
        </div>
      ) :
       ( <table>
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
        </table>)}


    </div>
  );
}

export default memo(AllAdmins);
