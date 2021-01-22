import React from "react";

const Header = (value) => () => {
  return (
    <div style={{ paddingLeft: "3px", paddingRight: "4px" }}>{`H${value}`}</div>
  );
};

export default Header;
