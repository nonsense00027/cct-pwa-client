import React, { useState, useEffect, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/theme.css';
import Routing from "./components/routing";


function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [namePage, setNamePage] = useState("Home");
  let winPath = window.location.pathname;


  const getNamePage = () => {
    switch(winPath) {
      case '/':
        return "Home";
      case '/clinic':
        return "Clinic";
      default:
        return "Home";
    }
  }

  console.log(winPath)


  return (
    <div className="container-fluid content-div">
      <div className="row">
        <div className="col-12">
          
          <div className="d-flex"
            onClick={() => setNavOpen(true)}
          >
            <div className="toggle-sidebar-icon">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.25 11.25H19.75V9.08333H0.25V11.25ZM0.25 15.5833H19.75V13.4167H0.25V15.5833ZM0.25 6.91666H19.75V4.74999H0.25V6.91666ZM0.25 0.416656V2.58332H19.75V0.416656H0.25Z" fill="#5A5A5A"/>
              </svg>
            </div>

            <div className="d-flex justify-content-center w-100">
              <p className="ffmm fw600 fs18 cblack me-3">{getNamePage()}</p>
            </div>
          </div>
          
          <Routing />



          <div className={`side-navbar ${navOpen ? "open" : ""}`}>
            <div className="close-sidebar-icon"
              onClick={() => setNavOpen(false)}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#323232"/>
              </svg>
            </div>
            
            <div className="logo-sidebar-div">
              <img src="/assets/images/cct-logo.png" alt="" />
            </div>


            <ul className="ul-navbar">
              <li>
                <a href="/">
                  <svg style={{marginRight:"15px"}} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 8.83333H7.16667V0.5H0.5V8.83333ZM0.5 15.5H7.16667V10.5H0.5V15.5ZM8.83333 15.5H15.5V7.16667H8.83333V15.5ZM8.83333 0.5V5.5H15.5V0.5H8.83333Z" fill="#E47D4D"/>
                  </svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#">
                  <svg style={{marginRight:"15px"}} width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9167 11.25C10.9167 12.9167 8.83333 14.1667 8.83333 15.4167H7.16667C7.16667 14.1667 5.08333 12.9167 5.08333 11.25C5.08333 9.64168 6.39167 8.33334 8 8.33334C9.60833 8.33334 10.9167 9.64168 10.9167 11.25ZM8.83333 16.25H7.16667V17.5H8.83333V16.25ZM13.8333 10.8333C13.8333 12.2333 13.3417 13.5083 12.5167 14.5167L13.7 15.7C14.8167 14.3917 15.5 12.6917 15.5 10.8333C15.5 8.55001 14.475 6.50834 12.8667 5.13334L11.6833 6.31668C12.9917 7.38334 13.8333 9.01668 13.8333 10.8333ZM11.3333 4.16668L8 0.833344V3.33334C3.85833 3.33334 0.5 6.69168 0.5 10.8333C0.5 12.6917 1.18333 14.3917 2.3 15.7L3.48333 14.5167C2.65833 13.5083 2.16667 12.2333 2.16667 10.8333C2.16667 7.61668 4.78333 5.00001 8 5.00001V7.50001L11.3333 4.16668Z" fill="#7C7C7C"/>
                  </svg>
                  Specializations
                </a>
              </li>
              <li>
                <a href="/clinic">
                  <svg style={{marginRight:"15px"}} width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.8333 6.99999H16.6666V8.24999H10.8333V6.99999ZM10.8333 4.91666H16.6666V6.16666H10.8333V4.91666ZM10.8333 9.08333H16.6666V10.3333H10.8333V9.08333ZM17.5 0.333328H2.49998C1.58331 0.333328 0.833313 1.08333 0.833313 1.99999V12.8333C0.833313 13.75 1.58331 14.5 2.49998 14.5H17.5C18.4166 14.5 19.1666 13.75 19.1666 12.8333V1.99999C19.1666 1.08333 18.4166 0.333328 17.5 0.333328ZM17.5 12.8333H9.99998V1.99999H17.5V12.8333Z" fill="#7C7C7C"/>
                  </svg>
                  Clinics
                </a>
              </li>
              <li>
                <a href="#">
                  <svg style={{marginRight:"15px"}} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.50002 8.79167C5.92502 8.79167 5.45835 9.25834 5.45835 9.83334C5.45835 10.4083 5.92502 10.875 6.50002 10.875C7.07502 10.875 7.54169 10.4083 7.54169 9.83334C7.54169 9.25834 7.07502 8.79167 6.50002 8.79167ZM11.5 8.79167C10.925 8.79167 10.4584 9.25834 10.4584 9.83334C10.4584 10.4083 10.925 10.875 11.5 10.875C12.075 10.875 12.5417 10.4083 12.5417 9.83334C12.5417 9.25834 12.075 8.79167 11.5 8.79167ZM9.00002 0.666672C4.40002 0.666672 0.666687 4.40001 0.666687 9.00001C0.666687 13.6 4.40002 17.3333 9.00002 17.3333C13.6 17.3333 17.3334 13.6 17.3334 9.00001C17.3334 4.40001 13.6 0.666672 9.00002 0.666672ZM9.00002 15.6667C5.32502 15.6667 2.33335 12.675 2.33335 9.00001C2.33335 8.75834 2.35002 8.51667 2.37502 8.28334C4.34169 7.40834 5.90002 5.80001 6.71669 3.80834C8.22502 5.94167 10.7084 7.33334 13.5167 7.33334C14.1667 7.33334 14.7917 7.25834 15.3917 7.11667C15.5667 7.70834 15.6667 8.34167 15.6667 9.00001C15.6667 12.675 12.675 15.6667 9.00002 15.6667Z" fill="#7C7C7C"/>
                  </svg>
                  Users
                </a>
              </li>
              <li>
                <a href="#">
                  <svg style={{marginRight:"15px"}} width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9167 11.25C10.9167 12.9167 8.83333 14.1667 8.83333 15.4167H7.16667C7.16667 14.1667 5.08333 12.9167 5.08333 11.25C5.08333 9.64168 6.39167 8.33334 8 8.33334C9.60833 8.33334 10.9167 9.64168 10.9167 11.25ZM8.83333 16.25H7.16667V17.5H8.83333V16.25ZM13.8333 10.8333C13.8333 12.2333 13.3417 13.5083 12.5167 14.5167L13.7 15.7C14.8167 14.3917 15.5 12.6917 15.5 10.8333C15.5 8.55001 14.475 6.50834 12.8667 5.13334L11.6833 6.31668C12.9917 7.38334 13.8333 9.01668 13.8333 10.8333ZM11.3333 4.16668L8 0.833344V3.33334C3.85833 3.33334 0.5 6.69168 0.5 10.8333C0.5 12.6917 1.18333 14.3917 2.3 15.7L3.48333 14.5167C2.65833 13.5083 2.16667 12.2333 2.16667 10.8333C2.16667 7.61668 4.78333 5.00001 8 5.00001V7.50001L11.3333 4.16668Z" fill="#7C7C7C"/>
                  </svg>
                  Sales Representatives
                </a>
              </li>
            </ul>

          </div>
          

        </div>
      </div>
    </div>
  );
}

export default App;
