import React from "react";

const FormTextarea = ({ children, id, name, value, handleChange, classNames }) => {
  return (
    <textarea id={id} name={name} value={value} onChange={handleChange} className={classNames}>
      {children}
    </textarea>
  );
};

export default FormTextarea;
