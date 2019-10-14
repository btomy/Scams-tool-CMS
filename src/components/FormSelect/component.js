import React from "react";

const FormSelect = ({ id, name, value, handleChange, classNames, options }) => {
  return (
    <select id={id} name={name} value={value} onChange={handleChange} className={classNames}>
      {options.map((item) => (
        <option key={item.id} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;
