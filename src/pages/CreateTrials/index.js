import React from "react";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import { ChevronDownIcon } from "@heroicons/react/solid";

function CreateTrials() {
  return (
    <Container>
      <PageHeader title="Trials" />

      <form>
        <div className="form-row">
          <label htmlFor="" className="form-label">
            Title
          </label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-row">
          <label htmlFor="" className="form-label">
            Description
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className="form-input"
          ></textarea>
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="">
            Specializations
          </label>
          <div className="custom-dropdown">
            <select name="" id="" className="dropdown">
              <option value="">Select Specialization</option>
            </select>
            <ChevronDownIcon className="h-4 w-4" />
          </div>
        </div>

        <div className="form-row">
          <label htmlFor="" className="form-label">
            Expires on
          </label>
          <input type="date" className="form-input" />
        </div>

        <div className="form-row">
          <label htmlFor="" className="form-label">
            Source
          </label>
          <input type="text" className="form-input" />
        </div>

        <div className="form-row">
          <label htmlFor="" className="form-label">
            Attachments
          </label>
          <input type="file" className="form-input" />
        </div>

        <div className="form-row">
          <label htmlFor="" className="form-label">
            Survey Link
          </label>
          <input type="text" className="form-input" />
        </div>

        <button type="submit" className="btn btn-success btn-block">
          Submit
        </button>
      </form>
    </Container>
  );
}

export default CreateTrials;
