import React from "react";

//HOC
import Auxx from "../../../hoc/Auxx";

//components
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const order_ingredient = props.ingredients;
  const order_items = Object.keys(order_ingredient).map((eachIng, index) => {
    return (
      <li key={index}>
        <span style={{ textTransform: "capitalize" }}>{eachIng} : </span>
        {props.ingredients[eachIng]}
      </li>
    );
  });
  return (
    <Auxx>
      <h2>Order Summary</h2>
      <p>Summary of the delicious burger that you purchased: </p>
      <ul>{order_items}</ul>
      <p>
        <strong>Total Price : {props.price.toFixed(2)}</strong>
      </p>
      <p>checkout now?</p>
      <Button clicked={props.make_order} btn_type={"Success"}>
        CONTINUE
      </Button>
      <Button clicked={props.close_modal} btn_type={"Danger"}>
        CANCEL
      </Button>
    </Auxx>
  );
};

export default orderSummary;
