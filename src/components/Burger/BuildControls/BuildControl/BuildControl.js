import React from "react";

//Style
import Classes from "./buildControl.css";

const buildControl = props => (
  <div className={Classes.BuildControl}>
    <div className={Classes.Label}>{props.label}</div>
    <button
      onClick={props.removeIngredient}
      disabled={props.disabled}
      className={Classes.Less}
    >
      Less
    </button>
    <button onClick={props.addIngredient} className={Classes.More}>
      More
    </button>
  </div>
);

export default buildControl;
