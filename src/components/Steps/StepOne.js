import React from 'react';
import QuestionBlock from '../../QuestionBlock';
import Answers from '../../Answers';
import ShowSummary from './ShowSummary';

const StepOne = ({
  currentStep,
  isResult,
  question,
  summary,
  results,
  currentSelection,
  handleChange
}) => {
  return (
    <React.Fragment>
      {isResult ? (
        <ShowSummary summary={summary}/>
      ) : (
        <div>
          <QuestionBlock question={question} />
          <fieldset className="b-none p-0 m-0 mb-4">
            <Answers
              results={results}
              currentSelection={currentSelection}
              handleChange={handleChange}
            />
          </fieldset>
        </div>
      )}
    </React.Fragment>
  );
};

export default StepOne;
