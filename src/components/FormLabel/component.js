import React from "react";

const Label = ({ children, htmlFor, classNames, isOptional }) => {
  return (
    <label htmlFor={htmlFor} className={classNames}>
      {children}
      {isOptional ? <span>optional</span> : ""}
    </label>
  );
};

export default Label;
