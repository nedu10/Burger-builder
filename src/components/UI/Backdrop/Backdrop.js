import React from "react";

//styles
import Classes from "./backdrop.css";

const backdrop = props => {
  return props.toggle_button ? (
    <div className={Classes.Backdrop} onClick={props.clicked}></div>
  ) : null;
};

export default backdrop;
