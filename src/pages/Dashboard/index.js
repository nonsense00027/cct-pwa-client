import React, { useState } from "react";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import {
  ChevronDownIcon,
  ChartSquareBarIcon,
  ShieldExclamationIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/solid";
import Card from "../../components/dashboard/Card";

const stats = [
  { title: "New Studies", count: 3, icon: ChartSquareBarIcon },
  { title: "Historical", count: 17, icon: ClipboardCheckIcon },
  { title: "Submissions", count: 41, icon: ChartSquareBarIcon },
  { title: "Sites Declined", count: 9, icon: ShieldExclamationIcon },
];
function Dashboard() {
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
      <section className="my-6">
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
      </section>

      {/* MAIN */}
      <main className="w-full">
        {stats.map((stat, index) => (
          <Card key={index} stat={stat} />
        ))}
      </main>
    </Container>
  );
}

export default Dashboard;
