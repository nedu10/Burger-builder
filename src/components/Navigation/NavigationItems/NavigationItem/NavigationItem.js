import React from "react";

//styles
import Classes from "./navigationItem.css";

const NavigationItem = props => {
  return (
    <li className={Classes.NavigationItem}>
      <a href={props.link} className={props.active ? Classes.active : null}>
        {props.children}
      </a>
    </li>
  );
};

export default NavigationItem;
