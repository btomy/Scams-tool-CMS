import React from "react";
import FormRadioCheck from "../FormRadioCheck/component";
import FormLabel from "../FormLabel/component";

const Answers = ({ results, currentSelection, handleChange }) => {
    if (!results) {
        return null
    }
    const currentChecked = currentSelection ? currentSelection.AnswerCode: null;
    const resultsBlock = results.map((result, id) => {
      return (
        <div className="input-wrapper"  key={id}>
          <div className="">
            <FormLabel htmlFor={result.AnswerCode} classNames="radio radio--block">
            <FormRadioCheck
              type="radio"
              id={result.AnswerCode}
              name={result.AnswerCode}
              value={result.AnswerCode}
              checked={result.AnswerCode === currentChecked}
              handleChange={e => handleChange(e, result)}
              classNames="input"
            />
              {result.Answer}
            </FormLabel>
          </div>
        </div>
      );
    });
    return <React.Fragment>{resultsBlock}</React.Fragment>;
  };
  
  export default Answers;