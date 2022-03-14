import React, { useEffect } from "react";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import { ChevronDownIcon } from "@heroicons/react/solid";

function Trial() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <PageHeader title="Trials" />

      <div>
        <h1 className="text-center font-semibold text-md mb-2">
          Meibomian Gland Dysfunction CCT03112022
        </h1>

        <div className="text-sm">
          <p>
            We are working with a Sponsor on the above mentioned study. Please
            review the Inclusion/Exclusion criteria below and confirm your
            interest by answering the questions below: <br /> <br />
            Inclusion Criteria:
          </p>
          <ul className="px-4">
            <li className="list-disc">
              Participant has a current diagnosis of Social Anxiety Disorder
              (SAD) as defined in DSM-5 and confirmed by Structured Clinical
              Interview for DSM-5 Disorders - Clinical Trials version
              (SCID-5-CT).
            </li>
            <li className="list-disc">
              Liebowitz Social Anxiety Scale (LSAS) total score of ≥70
            </li>
            <li className="list-disc">
              Suitable contraception use in line with protocol requirements
            </li>
            <li className="list-disc">Ability to swallow tablets</li>
          </ul>
        </div>

        <div className="mt-4">
          <div className="option">
            <label className="font-semibold" htmlFor="">
              Investigator:
            </label>
            <div className="custom-dropdown">
              <select name="" id="" className="dropdown">
                <option value="">Select Investigator</option>
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
