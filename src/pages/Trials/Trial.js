import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useParams } from "react-router-dom";
import { useTrialsContext } from "../../contexts/TrialsContext";
import { useAuthContext } from "../../shared/contexts/AuthContext";
import Apply from "./Apply";

function Trial() {
  const params = useParams();
  const { user } = useAuthContext();
  const { getTrial, getInvestigators, getApplications } = useTrialsContext();
  const [trial, setTrial] = useState(null);
  const [investigators, setInvestigators] = useState([]);
  // const [reminders, setReminders] = useState([]);
  // const [referrals, setReferrals] = useState([]);
  const [applications, setApplications] = useState([]);
  const [investigator, setInvestigator] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [applying, setApplying] = useState(false);

  const getDetails = async () => {
    const result = await getTrial(params.id);
    setTrial(result.data);
  };

  const getInvestigatorsDetails = async () => {
    const result = await getInvestigators(params.id);
    setInvestigators(result.data);
  };
  // const getRemindersDetails = async () => {
  //   const result = await getReminders(params.id);
  //   setReminders(result.data);
  // };
  // const getIReferralsDetails = async () => {
  //   const result = await getReferrals(params.id);
  //   setReferrals(result.data);
  // };
  const getApplicationsDetails = async () => {
    const result = await getApplications(params.id);
    setApplications(result.data);
  };

  const hasApplied = () => {
    return applications
      .map(
        (item) => item.investigator_id === investigator && item.status_id !== 13
      )
      .includes(true);
  };

  const handleApply = () => {
    setApplying(true);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setApplying(false);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (params.id) {
      getDetails();
      getInvestigatorsDetails();
      getApplicationsDetails();
    }
  }, [params.id]);

  if (!trial) {
    return <div>Loading</div>;
  }

  if (applying) {
    return <Apply handleBack={handleBack} trial={trial} />;
  }

  console.log("trial: ", trial);
  console.log("user: ", user);
  console.log("applications: ", applications);
  console.log("investigator: ", investigator);
  return (
    <Container>
      <PageHeader title="Trials" />

      <div>
        <h1 className="font-primary text-center font-semibold text-lg mb-4">
          {trial.title}
        </h1>

        <div
          dangerouslySetInnerHTML={{ __html: trial.description }}
          className="text-sm description-list font-secondary"
        />

        <div className="mt-4">
          <div className="option">
            <label className="font-semibold" htmlFor="">
              Investigator:
            </label>
            <div className="custom-dropdown">
              <select
                name=""
                id=""
                className="dropdown"
                value={investigator}
                onChange={(e) => setInvestigator(e.target.value)}
              >
                <option value="">Select Investigator</option>
                {investigators.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.profile.first_name} {item.profile.last_name}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="h-4 w-4" />
            </div>
          </div>

          <button
            disabled={investigator.length === 0 || hasApplied()}
            className={`btn btn-block btn-success ${
              investigator.length === 0 && "!bg-gray-300"
            }`}
            onClick={handleApply}
          >
            {hasApplied() ? "Already applied" : "Apply"}
          </button>
          <button
            disabled={investigator.length === 0}
            className={`btn btn-block btn-default
          ${investigator.length === 0 && "!bg-gray-300"}
          `}
          >
            Decline
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Trial;
