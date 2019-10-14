import React from "react";

const ShowSummary = ({summary})=> {
  return (
    <React.Fragment>
      <fieldset className="b-none p-0 m-0 mb-4">
        <div dangerouslySetInnerHTML={{ __html: summary.ResultText }}></div>
      </fieldset>
    </React.Fragment>
  );
};

export default ShowSummary;