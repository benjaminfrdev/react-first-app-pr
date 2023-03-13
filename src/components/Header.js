import React from "react";

function Header(props) {
  console.log("====================================");
  console.log(props);
  console.log("====================================");
  return (
    <h1>
      Hello There Indeed , {props.name} , {props.color}
    </h1>
  );
}

export default Header;
