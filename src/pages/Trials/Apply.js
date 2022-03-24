import React from "react";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";

function Apply({ handleBack, trial }) {
  const isDisabled = () => {
    return false;
  };

  return (
    <Container>
      <PageHeader title="Trials" back={true} handleBack={handleBack} />

      <div>
        <h1 className="font-primary text-center font-semibold text-lg mb-4">
          {trial.title}
        </h1>
        {trial.questions.map((question) => (
          <div key={question.id} className="mb-2 font-secondary">
            <p>{question.question}</p>
            <textarea className="w-full outline-none border border-gray-300 rounded-sm p-2 text-sm"></textarea>
          </div>
        ))}
        <button
          disabled={isDisabled()}
          className={`btn btn-block btn-success ${
            isDisabled() && "!bg-gray-300"
          }`}
        >
          Submit
        </button>
        <button
          disabled={isDisabled()}
          className={`btn btn-block btn-default
          ${isDisabled() && "!bg-gray-300"}
          `}
          onClick={handleBack}
        >
          Cancel
        </button>
      </div>
    </Container>
  );
}

export default Apply;
