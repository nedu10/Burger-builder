import React from "react";

//Styles
import Classes from "./burger.css";

// components
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  let transformIngredient = Object.keys(props.ingredient)
    .map(igKey => {
      // console.log("checking this [...Array(props.ingredient[igKey])] >> ", [
      //   ...Array(props.ingredient[igKey])
      // ]);
      return [...Array(props.ingredient[igKey])].map((_, i) => {
        return (
          <BurgerIngredient key={igKey + i} type={igKey}></BurgerIngredient>
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  //arr is the initial state of the array which is an empty array as defined.
  // el is the individual element.

  //[...Array(props.ingredient[igKey])] --> this creates an empty destructured array

  // Object.keys(props.ingredient) --> this get only the keys of the object ans makes it an array

  // console.log(
  //   " also checkinng this transformIngredient >> ",
  //   transformIngredient
  // );

  if (transformIngredient.length === 0) {
    transformIngredient = <p>Please start adding ingredient</p>;
  }

  return (
    <div className={Classes.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {transformIngredient}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default burger;
