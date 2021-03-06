import React, { useState } from "react";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import {
  ChevronDownIcon,
  ChartSquareBarIcon,
  ShieldExclamationIcon,
  ClipboardCheckIcon,
  OfficeBuildingIcon,
  ArchiveIcon,
  BadgeCheckIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/solid";
import Card from "../../components/dashboard/Card";
import { useDashboardContext } from "../../contexts/DashboardContext";

const statsItems = [
  {
    title: "Submissions",
    count: 3,
    icon: ClipboardCheckIcon,
    name: "submissions",
  },
  { title: "PSV's", count: 17, icon: ArchiveIcon, name: "psvs" },
  { title: "SIV's", count: 41, icon: OfficeBuildingIcon, name: "sivs" },
  {
    title: "Sites Declined",
    count: 9,
    icon: ShieldExclamationIcon,
    name: "site_declined",
  },
  { title: "Awarded", count: 4, icon: BadgeCheckIcon, name: "awarded" },
  {
    title: "Not Awarded",
    count: 3,
    icon: ExclamationCircleIcon,
    name: "not_awarded",
  },
];

function Dashboard() {
  const { stats } = useDashboardContext();

  return (
    <Container>
      <PageHeader title="Home" />

      {/* WARNING */}
      <section className="bg-yellow-200 bg-opacity-40 text-center px-6 py-6 rounded-md">
        <h4 className="font-semibold mb-2">
          Welcome to our cctclient.com portal V2.{" "}
        </h4>
        <p className="text-sm">
          If you see any errors please take a picture and text to 888-635-0552.
        </p>
      </section>

      {/* OPTIONS */}
      {/* <section className="my-6">
        <div className="option">
          <label className="font-semibold" htmlFor="">
            Date:
          </label>
          <div className="custom-dropdown">
            <select name="" id="" className="dropdown">
              <option value="">Select Date</option>
            </select>
            <ChevronDownIcon className="h-4 w-4" />
          </div>
        </div>
        <div className="option">
          <label className="font-semibold" htmlFor="">
            Doctor:
          </label>
          <div className="custom-dropdown">
            <select name="" id="" className="dropdown">
              <option value="">Select Doctor</option>
            </select>
            <ChevronDownIcon className="h-4 w-4" />
          </div>
        </div>
      </section> */}

      {/* MAIN */}
      <main className="w-full mt-10">
        {stats &&
          statsItems.map((stat, index) => (
            <Card
              key={index}
              stat={stat}
              title={stat.title}
              count={stats[stat.name].length}
              icon={stat.icon}
            />
          ))}
      </main>
    </Container>
  );
}

export default Dashboard;
