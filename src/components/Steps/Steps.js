import React from 'react';
import QuestionBlock from '../QuestionBlock/QuestionBlock';
import Answers from '../Answers/Answers';
import ShowSummary from './ShowSummary';

const Steps = ({
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
          <fieldset className="">
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

export default Steps;
