import React from "react";
import PropTypes from 'prop-types';

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


FormInput.defaultProps = {
  type: "text",
  className: ""
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  type: PropTypes.oneOf(['radio', 'checkbox']),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
};