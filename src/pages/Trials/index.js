import React, { useState, useEffect } from "react";

import sample_specializations from "./sample_specializations.json";
import TrialsTable from "./TrialsTable";

function Trials() {
  const [trials, setTrials] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Newest");
  const [specializations, setSpecializations] = useState("All");

  return (
    <div className="flex grow flex-col justify-between py-[48px] font-[400] text-[0.894rem]   w-[100%]  shrink-1 basis-[auto]   px-4">
      {/* Header */}
      <div className="flex flex-col justify-between ">
        {/* left */}
        <div className="flex">
          <div
            className={`cursor-pointer px-[18px] py-[7px] rounded-[0.25rem] ${
              trials ? " text-white bg-[#388EF1]" : " bg-[#EAEBEA]"
            }`}
            onClick={() => {
              setTrials(true);
            }}
          >
            Open Trials
          </div>
          <div
            className={`cursor-pointer px-[18px] py-[7px] rounded-[0.25rem] ${
              !trials ? " text-white bg-[#388EF1]" : " bg-[#EAEBEA]"
            }`}
            onClick={() => {
              setTrials(false);
            }}
          >
            Closed Trials
          </div>
        </div>

        <div className="flex justify-between">
          <div className="text-[1.313rem] font-bold py-[25px] pl-[8px]">
            {trials ? "Open" : "Closed"} Trials
          </div>
          {/* right */}
          <div className="py-[25px] ">
            <div className="cursor-pointer px-[18px] py-[7px] rounded-[0.25rem] text-white bg-[#388EF1]">
              Create
            </div>
          </div>
        </div>
      </div>
      {/* Body Content */}
      <div className="grow ">
        {/* Table Header */}
        <div className="border-[1px] flex flex-col md:flex-row justifiy-center items-center ">
          {/* Search Bars */}
          <div className="w-full md:w-3/12 py-[24px] px-[24px]">
            <div className="pb-[5px]">Search</div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-[14px] py-[7px] rounded-[0.25rem] border-[1px]"
              type="text"
              placeholder="Trial Title"
            />
          </div>
          <div className="w-full md:w-3/12 py-[24px] px-[24px]">
            <div>Specialization</div>
            <select
              className="w-full px-[14px] py-[7px] rounded-[0.25rem] border-[1px]"
              value={specializations}
              onChange={(e) => setSpecializations(e.target.value)}
            >
              {sample_specializations.sample_s.map((item) => {
                return <option value={item.name}>{item.name}</option>;
              })}
            </select>
          </div>
          <div className="w-full md:w-3/12 py-[24px] px-[24px]">
            <div>Sort</div>
            <select
              className="w-full px-[14px] py-[7px] rounded-[0.25rem] border-[1px]"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
              <option value="Title A-Z">Title A-Z</option>
              <option value="Title Z-A">Title Z-A</option>
            </select>
          </div>
          {/* Buttons */}
          <div className="flex flex-col text-center space-y-2 py-[24px] px-[24px] w-full md:w-3/12">
            <div
              className={`cursor-pointer px-[18px] py-[7px] rounded-[0.25rem] text-white bg-[#818fa2]`}
              // onClick={() => {
              //   setTrials(true);
              // }}
            >
              Show
            </div>
            <div
              className={`cursor-pointer px-[18px] py-[7px] rounded-[0.25rem] bg-[#EAEBEA]`}
              onClick={() => {
                setSearch("");
                setSort("Newest");
                setSpecializations("All");
              }}
            >
              Clear
            </div>
          </div>
        </div>
        {/* Table Body */}
        <TrialsTable itemsPerPage={4} />
        {/* <div></div> */}
      </div>
    </div>
  );
}

export default Trials;
