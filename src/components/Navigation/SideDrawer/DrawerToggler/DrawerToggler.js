import React from "react";

//style
import Classes from "./drawerToggle.css";

const drawerToggler = props => (
  <div className={Classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggler;
