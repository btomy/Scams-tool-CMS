import React from "react";
import PropTypes from 'prop-types';

const Label = ({ children, htmlFor, classNames, isOptional }) => {
  return (
    <label htmlFor={htmlFor} className={classNames}>
      {children}
      {isOptional ? <span>optional</span> : ""}
    </label>
  );
};

export default Label;

Label.defaultProps = {
  htmlFor: "",
  className: ""
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
};