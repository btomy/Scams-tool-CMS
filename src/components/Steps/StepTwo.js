// const Step2 = props => {
//   if (props.currentStep !== 2) {
//     return null;
//   }

//   return (
//     <div className="rich-content">
//       <h3>Who you’ve been in contact with </h3>
//       <h4>
//         Do you have any information on the identity of the organisation or
//         individual?
//       </h4>
//       <fieldset className="b-none p-0 m-0 mb-5">
//         <div className="block mv-2">
//           <div className="radio">
//             <input
//               value="yes"
//               id="yes"
//               name="yes"
//               type="radio"
//               checked={props.selected === "yes"}
//               onChange={props.handleChange}
//             />
//             <label htmlFor="yes" className="ml-2 lh-2 semi-bold">
//               Yes
//             </label>
//           </div>
//         </div>
//         <div className="block mv-2">
//           <div className="radio">
//             <input
//               value="no"
//               id="no"
//               name="no"
//               type="radio"
//               checked={props.selected === "no"}
//               onChange={props.handleChange}
//             />
//             <label htmlFor="no" className="ml-2 lh-2 semi-bold">
//               No
//             </label>
//           </div>
//         </div>
//       </fieldset>
//     </div>
//   );
// };

import React from "react";
import QuestionBlock from "../../QuestionBlock";
import Answers from "../../Answers";

const StepTwo = ({currentStep,question,results,selected,handleChange})=> {
  if (currentStep !== 2) {
    return null;
  }
  return (
    <React.Fragment>
      <QuestionBlock question={question} />

      <fieldset className="b-none p-0 m-0 mb-4">
        <Answers
          results={results}
          selected={selected}
          handleChange={handleChange}
        />
      </fieldset>
    </React.Fragment>
  );
};

export default StepTwo;