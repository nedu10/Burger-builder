import React from "react";

//component
import BuildControl from "./BuildControl/BuildControl";

//styles
import Classes from "./buildControls.css";

//hoc
// import Aux from "../../../hoc/Aux";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => {
  return (
    <div className={Classes.BuildControls}>
      <p>
        The total is <strong>${props.totalPrice.toFixed(2)}</strong>
      </p>
      {controls.map((eachControl, i) => {
        return (
          <BuildControl
            addIngredient={() => props.addIngredient(eachControl.type)}
            removeIngredient={() => props.removeIngredient(eachControl.type)}
            key={i}
            disabled={props.disableInfo[eachControl.type]}
            label={eachControl.label}
          ></BuildControl>
        );
      })}
      <button
        className={Classes.Button}
        onClick={props.clickButton}
        disabled={!props.orderToggler}
      >
        Order Now
      </button>
    </div>
  );
};

export default buildControls;
