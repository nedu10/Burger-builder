import React from "react";

//styles
import Classes from "./button.css";

const button = props => {
  return (
    <button
      className={[Classes.Button, Classes[props.btn_type]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default button;
