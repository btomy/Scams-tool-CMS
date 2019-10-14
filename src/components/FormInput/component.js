import React from "react";

const FormInput = ({ type, id, name, value, handleChange, classNames }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={handleChange}
      className={classNames}
    />
  );
};

export default FormInput;
