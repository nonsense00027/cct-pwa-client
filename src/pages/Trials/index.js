import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";

import sample_specializations from "../../shared/data/sample_specializations.json";
import TrialsTable from "./TrialsTable";
import { ChevronDownIcon } from "@heroicons/react/solid";

function Trials() {
  const [trials, setTrials] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Newest");
  const [specializations, setSpecializations] = useState("All");

  return (
    <Container className="">
      <PageHeader title="Trials" />

      {/* Body Content */}
      <div className="grow ">
        {/* Table Header */}
        <div className="border flex flex-col gap-2 py-2 md:flex-row px-4">
          {/* Search Bars */}
          <div className="">
            <label htmlFor="" className="form-label">
              Search
            </label>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-[14px] py-[7px] rounded-[0.25rem] border"
              type="text"
              placeholder="Trial Title"
            />
          </div>
          <div className="option">
            <label htmlFor="" className="form-label">
              Specialization
            </label>
            <div className="custom-dropdown">
              <select
                className="dropdown"
                value={specializations}
                onChange={(e) => setSpecializations(e.target.value)}
              >
                {sample_specializations.sample_s.map((item) => {
                  return <option value={item.name}>{item.name}</option>;
                })}
              </select>
              <ChevronDownIcon className="h-4 w-4" />
            </div>
          </div>
          <div className="option">
            <label htmlFor="" className="form-label">
              Sort
            </label>
            <div className="custom-dropdown">
              <select
                className="dropdown"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
                <option value="Title A-Z">Title A-Z</option>
                <option value="Title Z-A">Title Z-A</option>
              </select>
              <ChevronDownIcon className="h-4 w-4" />
            </div>
          </div>

          <div className="option">
            <label className="font-semibold" htmlFor="">
              Applied Status:
            </label>
            <div className="custom-dropdown">
              <select name="" id="" className="dropdown">
                <option value="">All</option>
              </select>
              <ChevronDownIcon className="h-4 w-4" />
            </div>
          </div>

          {/* Buttons */}
          <div>
            <button
              className={`btn btn-block btn-success`}
              // onClick={() => {
              //   setTrials(true);
              // }}
            >
              Show
            </button>
            <button
              className={`btn btn-block btn-default`}
              onClick={() => {
                setSearch("");
                setSort("Newest");
                setSpecializations("All");
              }}
            >
              Clear
            </button>
          </div>
        </div>
        {/* Table Body */}
        <TrialsTable itemsPerPage={6} />
        <div className="py-10"></div>
      </div>
    </Container>
  );
}

export default Trials;
