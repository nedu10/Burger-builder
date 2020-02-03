import React from "react";

//styles
import Classes from "./toolBar.css";

//component
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggler from "../SideDrawer/DrawerToggler/DrawerToggler";

const toolBar = props => {
  return (
    <header className={Classes.ToolBar}>
      <DrawerToggler clicked={props.toggleDrawer} />
      <div className={Classes.Logo}>
        <Logo />
      </div>

      <nav className={Classes.DesktopOnly}>
        <NavigationItems></NavigationItems>
      </nav>
    </header>
  );
};

export default toolBar;
