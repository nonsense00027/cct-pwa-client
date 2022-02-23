import React, { useState, useEffect, useContext } from "react";


const Clinic = () => {

  return (
    <div className="clinic-div">

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

        <div className="btn-group btn-group-filter" role="group" >
          <button type="button" className="btn btn-apply">Apply</button>
          <button type="button" className="btn btn-clear">Clear</button>
        </div>
      </div>

      

    </div>
  )
}

export default Clinic;
