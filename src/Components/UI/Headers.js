import React from "react";

import classes from "./HeaderB.module.css";

function Headers(props) {
  return <div className={classes.header}>{props.children}</div>;
}

export default Headers;
