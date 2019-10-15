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
          <div className="checkbox">
            <FormRadioCheck
              type="checkbox"
              id={result.AnswerCode}
              name={result.AnswerCode}
              value={result.AnswerCode}
              checked={result.AnswerCode === currentChecked}
              handleChange={e => handleChange(e, result)}
              classNames="input"
            />
            <FormLabel htmlFor={result.AnswerCode} classNames="">
              {result.Answer}
            </FormLabel>
          </div>
        </div>
      );
    });
    return <React.Fragment>{resultsBlock}</React.Fragment>;
  };
  
  export default Answers;