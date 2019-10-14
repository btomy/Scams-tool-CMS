import React from "react";

const ShowSummary = ({summary})=> {
  return (
    <React.Fragment>
      <fieldset className="">
        <div dangerouslySetInnerHTML={{ __html: summary.ResultText }}></div>
      </fieldset>
    </React.Fragment>
  );
};

export default ShowSummary;