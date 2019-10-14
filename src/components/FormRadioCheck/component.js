import React from "react";

const FormRadioCheck = ({ type, id, name, value, checked, handleChange, classNames }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={handleChange}
      className={classNames}
    />
  );
};

export default FormRadioCheck;
