import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useParams } from "react-router-dom";
import { useTrialsContext } from "../../contexts/TrialsContext";

function Trial() {
  const params = useParams();
  const { getTrial, getInvestigators } = useTrialsContext();
  const [trial, setTrial] = useState(null);
  const [investigators, setInvestigators] = useState([]);

  const getDetails = async () => {
    const result = await getTrial(params.id);
    setTrial(result.data);
  };

  const getInvestigatorsDetails = async () => {
    const result = await getInvestigators(params.id);
    setInvestigators(result.data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (params.id) {
      getDetails();
      getInvestigatorsDetails();
    }
  }, [params.id]);

  if (!trial) {
    return <div>Loading</div>;
  }
  return (
    <Container>
      <PageHeader title="Trials" />

      <div>
        <h1 className="text-center font-semibold text-lg mb-2">
          {trial.title}
        </h1>

        <div
          dangerouslySetInnerHTML={{ __html: trial.description }}
          className="text-md description-list"
        />

        <div className="mt-4">
          <div className="option">
            <label className="font-semibold" htmlFor="">
              Investigator:
            </label>
            <div className="custom-dropdown">
              <select name="" id="" className="dropdown">
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

          <button className="btn btn-block btn-success">Apply</button>
          <button className="btn btn-block btn-default">Decline</button>
        </div>
      </div>
    </Container>
  );
}

export default Trial;
