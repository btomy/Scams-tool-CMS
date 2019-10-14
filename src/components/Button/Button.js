import React from "react";

const Button = ({className, click, disabled, children}) => {
    return (
      <button
        className={className}
        type="button"
        onClick={click}
        disabled={disabled}>
        {children}
      </button>
    );
}
export default Button;
