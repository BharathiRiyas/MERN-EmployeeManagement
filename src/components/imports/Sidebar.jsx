import React from "react";
import { Link, Route } from "react-router-dom";
import List from "../pages/List";
import "./sidebar.css";

// import {LineStyleIcon} from '@mui/icons-material/LineStyle';

export default function Sidebar() {
  const handleClick = (prop) => {
    <main>
      <Route path={"/"} component={List} />
    </main>;
  };
  console.log("in sidebar");
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <i className="fas fa-home"></i>
              <Link className="sidebarLink" to="/">
                Home
              </Link>
            </li>
            <li className="sidebarListItem">
              <i className="fas fa-chart-area"></i>
              <Link className="sidebarLink" to="/holiday-list">
                2024 Edunet Holiday Calender
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <i className="fas fa-user"></i>
              <a className="sidebarLink" href="/list">
                Employee
              </a>
            </li>
            <li className="sidebarListItem">
              <i className="far fa-plus-square"></i>
              <a className="sidebarLink" href="/add-user">
                Add Employee
              </a>
            </li>
            <li className="sidebarListItem">
              <i className="fas fa-user-clock"></i>
              <Link className="sidebarLink" to="/leave">
                Leave Request
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Contact</h3>
          <p>Edunet Foundation</p>
          <p> XJ3V+64P, IBM India Private Limited,Embassy Golf Links Business Park, Domlur</p> 
          <p> Bengaluru, Karnataka 560071</p>
          <p>Email: Edunet@Gmail.com</p>
         
        </div>
      </div>
    </div>
  );
}
