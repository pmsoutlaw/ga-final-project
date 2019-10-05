import * as React from "react";

const wrapperStyles = {
  display: "block",
  padding: "24px 10px",
  margin: "10px",
  position: "relative",
  boxSizing: "border-box",
  minHeight: "60px"
};

const Navbar = ({ label, description, children, ...props }) => (
  <div className="navbar">{children ? children : null}</div>
);

export default Navbar;
