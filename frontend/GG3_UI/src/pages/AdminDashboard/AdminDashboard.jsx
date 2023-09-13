import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/dashboard`)
      .then((res) => {
        if (res.data === "success") {
          return;
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>AdminDashboard</div>;
}

export default AdminDashboard;
