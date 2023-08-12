import React, { useState } from "react";
import "./NavbarStyle.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownActive(!isDropDownActive);
  };
  return (
    <header>
      <div className="left">
        <h3>EDYODA</h3>
        <div className="dropdown">
          <p className="dropbtn" onClick={toggleDropDown}>
            Courses
            <span className="arrow-icon">
              <RiArrowDropDownLine size={24} className="drop-icon" />
            </span>
          </p>
          {isDropDownActive && (
            <div className="dropdown-content">
              <div className="header">
                <h2>List of Courses Offered</h2>
              </div>
              <div className="row">
                <div className="column">
                  <h3>Web Development</h3>
                  <a href="#">Basic Web Development Course</a>
                  <a href="#">MERN Stack Course</a>
                  <a href="#">MEAN Stack Course</a>
                </div>
                <div class="column">
                  <h3>Devops</h3>
                  <a href="#">Beginner Level</a>
                  <a href="#">Intermediate Level</a>
                  <a href="#">Advanced Level</a>
                </div>
                <div class="column">
                  <h3>SDE</h3>
                  <a href="#">Python/Java</a>
                  <a href="#">Data Structure and Algorithm</a>
                  <a href="#">Computer Networks, Database, Operating System</a>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="dropdown">
          <p className="dropbtn" onClick={toggleDropDown}>
            Programs
            <span className="arrow-icon">
              <RiArrowDropDownLine size={24} className="drop-icon" />
            </span>
          </p>
          {isDropDownActive && (
            <div className="dropdown-content">
              <div className="header">
                <h2>List of Programs Offered</h2>
              </div>
              <div className="row">
                <div className="column">
                  <h3>Web Development</h3>
                  <a href="#">Beginner Certification Course</a>
                  <a href="#">Certified MERN Course</a>
                  <a href="#">Certified MEAN Course</a>
                </div>
                <div className="column">
                  <h3>Devops</h3>
                  <a href="#">Beginner Level Certification</a>
                  <a href="#">Intermediate Level Certification</a>
                  <a href="#">Advanced Level Certification</a>
                </div>
                <div className="column">
                  <h3>Bootcamps</h3>
                  <a href="#">Python : Zero to Hero</a>
                  <a href="#">DSA : Monsoon Special</a>
                  <a href="#">Creating Netflix Clone</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="right">
        <svg
          className="search"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M20.1 21L13.8 14.7C13.3 15.1 12.725 15.4167 12.075 15.65C11.425 15.8833 10.7333 16 10 16C8.18333 16 6.646 15.3707 5.388 14.112C4.13 12.8533 3.50067 11.316 3.5 9.5C3.5 7.68333 4.12933 6.146 5.388 4.888C6.64667 3.63 8.184 3.00067 10 3C11.8167 3 13.354 3.62933 14.612 4.888C15.87 6.14667 16.4993 7.684 16.5 9.5C16.5 10.2333 16.3833 10.925 16.15 11.575C15.9167 12.225 15.6 12.8 15.2 13.3L21.5 19.6L20.1 21ZM10 14C11.25 14 12.3127 13.5623 13.188 12.687C14.0633 11.8117 14.5007 10.7493 14.5 9.5C14.5 8.25 14.0623 7.18733 13.187 6.312C12.3117 5.43667 11.2493 4.99933 10 5C8.75 5 7.68733 5.43767 6.812 6.313C5.93667 7.18833 5.49933 8.25067 5.5 9.5C5.5 10.75 5.93767 11.8127 6.813 12.688C7.68833 13.5633 8.75067 14.0007 10 14Z"
            fill="black"
          />
        </svg>
        <p>Login</p>
        <button className="join-button">Join Now</button>
      </div>
    </header>
  );
};

export default Navbar;
