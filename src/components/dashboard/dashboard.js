import React, { useState, useEffect, useContext } from "react";

const Dashboard = () => {
  return (
    <div className="dashboard-div">
      <div className="welcome-div text-center">
        <p className="ffqm fs14 fw600 cblack mb-1">
          Welcome to our cctclient.com portal V2.{" "}
        </p>
        <p className="ffqm fs13 cblack margb0">
          If you see any errors please take a picture and text to 888-635-0552.
        </p>
      </div>

      <div className="select-filters-div">
        <p className="ffqm fs16 fw600 cblack mb-1">Date:</p>
        <select className="form-control select-filter mb-3">
          <option>All</option>
          <option>2</option>
          <option>3</option>
        </select>

        <p className="ffqm fs16 fw600 cblack mb-1">Doctor:</p>
        <select className="form-control select-filter">
          <option>All</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>

      <div className="all-summary-div">
        <div className="d-flex per-sum-div">
          <div className="per-sum-icon-div">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.625 0.625H4.375C2.3125 0.625 0.625 2.3125 0.625 4.375V30.625C0.625 32.6875 2.3125 34.375 4.375 34.375H30.625C32.6875 34.375 34.375 32.6875 34.375 30.625V4.375C34.375 2.3125 32.6875 0.625 30.625 0.625ZM11.875 26.875H8.125V13.75H11.875V26.875ZM19.375 26.875H15.625V8.125H19.375V26.875ZM26.875 26.875H23.125V19.375H26.875V26.875Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <p className="ffmm fw700 fs30 cblack margb0 mt-1">3</p>
            <p className="ffmm fs16 csemiblack mb-2">Submissions</p>
          </div>
        </div>

        <div className="d-flex per-sum-div">
          <div className="per-sum-icon-div">
            <svg
              width="41"
              height="35"
              viewBox="0 0 41 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.375 0.625C14.0563 0.625 6.5 8.18125 6.5 17.5H0.875L8.16875 24.7938L8.3 25.0563L15.875 17.5H10.25C10.25 10.2438 16.1188 4.375 23.375 4.375C30.6313 4.375 36.5 10.2438 36.5 17.5C36.5 24.7563 30.6313 30.625 23.375 30.625C19.7563 30.625 16.475 29.1438 14.1125 26.7625L11.45 29.425C14.5063 32.4813 18.7063 34.375 23.375 34.375C32.6938 34.375 40.25 26.8188 40.25 17.5C40.25 8.18125 32.6938 0.625 23.375 0.625ZM21.5 10V19.375L29.525 24.1375L30.875 21.8687L24.3125 17.9688V10H21.5Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <p className="ffmm fw700 fs30 cblack margb0 mt-1">17</p>
            <p className="ffmm fs16 csemiblack mb-2">PSVs</p>
          </div>
        </div>

        <div className="d-flex per-sum-div">
          <div className="per-sum-icon-div">
            <svg
              width="35"
              height="39"
              viewBox="0 0 35 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.625 4.625H22.7875C22 2.45 19.9375 0.875 17.5 0.875C15.0625 0.875 13 2.45 12.2125 4.625H4.375C2.3125 4.625 0.625 6.3125 0.625 8.375V34.625C0.625 36.6875 2.3125 38.375 4.375 38.375H30.625C32.6875 38.375 34.375 36.6875 34.375 34.625V8.375C34.375 6.3125 32.6875 4.625 30.625 4.625ZM17.5 4.625C18.5312 4.625 19.375 5.46875 19.375 6.5C19.375 7.53125 18.5312 8.375 17.5 8.375C16.4688 8.375 15.625 7.53125 15.625 6.5C15.625 5.46875 16.4688 4.625 17.5 4.625ZM13.75 30.875L6.25 23.375L8.89375 20.7313L13.75 25.5688L26.1063 13.2125L28.75 15.875L13.75 30.875Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <p className="ffmm fw700 fs30 cblack margb0 mt-1">41</p>
            <p className="ffmm fs16 csemiblack mb-2">SIVs</p>
          </div>
        </div>

        <div className="d-flex per-sum-div">
          <div className="per-sum-icon-div">
            <svg
              width="35"
              height="43"
              viewBox="0 0 35 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 0.875L0.625 8.375V19.625C0.625 30.0312 7.825 39.7625 17.5 42.125C27.175 39.7625 34.375 30.0312 34.375 19.625V8.375L17.5 0.875ZM15.625 12.125H19.375V15.875H15.625V12.125ZM15.625 19.625H19.375V30.875H15.625V19.625Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <p className="ffmm fw700 fs30 cblack margb0 mt-1">6</p>
            <p className="ffmm fs16 csemiblack mb-2">Sites Declined</p>
          </div>
        </div>

        <div className="d-flex per-sum-div">
          <div className="per-sum-icon-div">
            <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.4812 0.75C9.13125 0.75 0.75 9.15 0.75 19.5C0.75 29.85 9.13125 38.25 19.4812 38.25C29.85 38.25 38.25 29.85 38.25 19.5C38.25 9.15 29.85 0.75 19.4812 0.75ZM27.4312 30.75L19.5 25.9688L11.5688 30.75L13.6688 21.7312L6.675 15.675L15.9 14.8875L19.5 6.375L23.1 14.8687L32.325 15.6562L25.3312 21.7125L27.4312 30.75Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <p className="ffmm fw700 fs30 cblack margb0 mt-1">9</p>
            <p className="ffmm fs16 csemiblack mb-2">Awarded</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
