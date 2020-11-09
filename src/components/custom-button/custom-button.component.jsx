import React from "react";

import "./custom-button.styles.scss";

/**@function Customizable botton component */
const CustomButton = ({ children, disabled, ...props }) => (
  <button className="custom-button" disabled={disabled} {...props}>
    {children}
  </button>
);

export default CustomButton;
