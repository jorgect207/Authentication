import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div
      className={`${classes.divlabel} ${
        props.isvalid === false ? classes.wrong : " "
      } `}
    >
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></input>
    </div>
  );
};

export default Input;
