import React from "react";

//images
import BurgerLogo from "../../assets/img/burger-logo.png";

//styles
import Classes from "./logo.css";

const logo = props => {
  return (
    <div className={Classes.Logo}>
      <img src={BurgerLogo} alt="burger builder logo" />
    </div>
  );
};

export default logo;
