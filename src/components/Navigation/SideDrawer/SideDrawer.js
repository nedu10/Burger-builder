import React from "react";

//components
import NavigaionItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";

//higher order component
import Auxx from "../../../hoc/Auxx";

//styles
import Classes from "./sideDrawer.css";

const sideDrawer = props => {
  let attachedClasses = [Classes.SideDrawer];

  props.open
    ? attachedClasses.push(Classes.Open)
    : attachedClasses.push(Classes.Close);

  return (
    <Auxx>
      <Backdrop toggle_button={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={Classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigaionItems></NavigaionItems>
        </nav>
      </div>
    </Auxx>
  );
};

export default sideDrawer;
