import React from "react";
import { Link } from "react-router-dom";
import AllAdmins from "../AllAdmins/AllAdmins";
import CreateJob from "../createJob/CreateJob";
import AdminLogin from "../createAdmin/AdminLogin";
import Vacancy from "../alljobs/VacancyCard";
import "./Dashboard.css";
function Dashboard() {
  let allJobs = localStorage.getItem("alljobs")?.length;
  let AllAdmins = localStorage.getItem("AllAdmins")?.length;
  const data = [
    {
      link: "/admin/create-job",
      p: "Create",
      marked: "job",
      color: "crimson",
      span: "Create some jobs here! Let's add interesting and modern professions ",
    },
    {
      link: "/admin/create-admin",
      p: "ADD",
      color: "orange",
      marked: "Admin",
      span: "You can add new admins that can manage job information",
    },
    {
      link: "/admin/alljobs",
      p: allJobs,
      color: "green",
      marked: "jobs",
      span: "We have currently. Find your own job with us !",
    },
    {
      link: "/admin/all-admins",
      p: AllAdmins,
      color: "blue",
      marked: "Admins",
      span: "These admins are monitoring 'TheWork' site.",
    },
  ];
  return (
    <div className="Dashboard">
      <div className="overlay"></div> 
      {data.map((item, index) => (
        <Link to={item.link} key={index} className="boards">
          <div className="paragraph">
            <p>{item.p}</p>
            <b style={{ color: item.color }}>/{item.marked}</b>
          </div>
          <span>{item.span}</span>
        </Link>
      ))}
    </div>
  );
}

export default Dashboard;
