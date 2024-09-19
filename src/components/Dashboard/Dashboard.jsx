import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logoforbank from "../../assets/logoforbank2.png";
import logoontheheader from "../../assets/logoontheheader.png";
import "./dashboard.css";

/**
 * Reusable Dashboard component that accepts children
 * and can be used across different routes and pages.
 */

const Dashboard = ({ children }) => {
  const handleSidebarToggle = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
  };

  return (
    <div className="dashboardContainer">
      <div className="sidebar">
        <div className="top">
          <div className="logoCtn">
            <div className="logo">
              <img
                src={logoforbank}
                width="90px"
                height="40px"
                alt="NobleTrust Bank Logo"
              />
            </div>
          </div>
          <span>
            <i
              className="bx bx-menu"
              id="btn"
              onClick={handleSidebarToggle}
            ></i>
          </span>
        </div>

        {/* Manually list each NavLink */}
        <ul>
          <li>
            <NavLink to="/home" className="navlink">
              <i className="bx bx-home"></i>
              <span className="nav-item">Home</span>
            </NavLink>
            <span className="tooltip">Home</span>
          </li>
          <li>
            <NavLink to="/send" className="navlink">
              <i className="bx bxs-credit-card"></i>
              <span className="nav-item">Send</span>
            </NavLink>
            <span className="tooltip">Send</span>
          </li>
          <li>
            <NavLink to="/history" className="navlink">
              <i className="bx bx-history"></i>
              <span className="nav-item">History</span>
            </NavLink>
            <span className="tooltip">History</span>
          </li>
          <li>
            <NavLink to="/settings" className="navlink">
              <i className="bx bx-cog"></i>
              <span className="nav-item">Settings</span>
            </NavLink>
            <span className="tooltip">Settings</span>
          </li>
          <li>
            <NavLink to="/logout" className="navlink">
              <i className="bx bx-log-out"></i>
              <span className="nav-item">Logout</span>
            </NavLink>
            <span className="tooltip">Logout</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content-view">
        {/* Header */}
        <div className="container5">
          <span>
            <img src={logoontheheader} alt="NobleTrust Bank Logo" />
          </span>
          <div className="notification">
            <Link to="#">
              <i className="bx bx-notification"></i>
            </Link>
          </div>
        </div>

        {/* Body - Content passed as children */}
        <div><Outlet /></div>
      </div>
    </div>
  );
};

export default Dashboard;
