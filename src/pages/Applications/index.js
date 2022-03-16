import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";

import sample_specializations from "../../shared/data/sample_specializations.json";
import { ChevronDownIcon } from "@heroicons/react/solid";
import ApplicationsTable from "./ApplicationsTable";
import { useApplicationContext } from "../../contexts/ApplicationContext";

function Applications() {
  const { applications } = useApplicationContext();

  return (
    <Container className="">
      <PageHeader title="My Applications" />

      {/* Body Content */}
      <div className="grow ">
        {/* Table Body */}
        <ApplicationsTable itemsPerPage={6} data={applications} />
        <div className="py-10"></div>
      </div>
    </Container>
  );
}

export default Applications;
