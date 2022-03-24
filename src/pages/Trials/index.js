import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";

import sample_specializations from "../../shared/data/sample_specializations.json";
import TrialsTable from "./TrialsTable";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useTrialsContext } from "../../contexts/TrialsContext";

function Trials() {
  const { specializations, filterTrials } = useTrialsContext();
  const [trials, setTrials] = useState([]);
  const [search, setSearch] = useState("");
  const [spec, setSpec] = useState("All");
  const [sort, setSort] = useState("created_at-desc");
  const [view, setView] = useState("All");

  const handleFilter = () => {
    filterTrials(search, spec, sort, view).then((data) => {
      setTrials(data);
    });
  };

  const clearFilter = () => {
    setSearch("");
    setSort("created_at-desc");
    setSpec("All");
    setView("All");
    filterTrials("", "All", "created_at-desc", "All").then((data) => {
      setTrials(data);
    });
  };

  useEffect(() => {
    filterTrials(search, spec, sort, view).then((data) => {
      setTrials(data);
    });
  }, []);

  const getTrials = () => {
    return trials;
  };

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
                value={spec}
                onChange={(e) => setSpec(e.target.value)}
              >
                <option value="All">All</option>
                {specializations.map((item) => {
                  return (
                    <option
                      value={item.specialization.id}
                      key={item.specialization.id}
                    >
                      {item.specialization.name}
                    </option>
                  );
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
                <option value="created_at-desc">Newest</option>
                <option value="created_at-asc">Oldest</option>
                <option value="title-asc">Title A-Z</option>
                <option value="title-desc">Title Z-A</option>
              </select>
              <ChevronDownIcon className="h-4 w-4" />
            </div>
          </div>

          <div className="option">
            <label className="font-semibold" htmlFor="">
              Applied Status:
            </label>
            <div className="custom-dropdown">
              <select
                name=""
                id=""
                className="dropdown"
                value={view}
                onChange={(e) => setView(e.target.value)}
              >
                <option value="All">All</option>
                <option value="able-to-apply">Trials Not Applied For</option>
                <option value="unable-to-apply">Trials Applied For</option>
              </select>
              <ChevronDownIcon className="h-4 w-4" />
            </div>
          </div>

          {/* Buttons */}
          <div>
            <button
              className={`btn btn-block btn-success`}
              onClick={handleFilter}
            >
              Show
            </button>
            <button
              className={`btn btn-block btn-default`}
              onClick={clearFilter}
            >
              Clear
            </button>
          </div>
        </div>
        {/* Table Body */}
        {getTrials().length > 0 ? (
          <TrialsTable itemsPerPage={6} data={getTrials()} />
        ) : (
          <div className="grid place-items-center pt-20">No data available</div>
        )}
        <div className="py-10"></div>
      </div>
    </Container>
  );
}

export default Trials;
