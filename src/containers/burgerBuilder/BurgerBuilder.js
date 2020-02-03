import React, { Component } from "react";

//higher order component
import Auxx from "../../hoc/Auxx";

//components
import Burger from "../../components/Burger/Burger";
import BuildControl from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

//External variables
const INGREDIENT_PRICES = {
  salad: 0.4,
  bacon: 0.7,
  meat: 1.0,
  cheese: 0.2
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0
    },
    total_price: 4,
    show_order: 0,
    toggle_button: false
  };

  showOrderHelper = ingredients => {
    const sum = Object.keys(ingredients)
      .map(eachIngredient => {
        return ingredients[eachIngredient];
      })
      .reduce((arr, el) => {
        return arr + el;
      }, 0);

    this.setState({ show_order: sum > 0 });
  };

  addIngredient = type => {
    // console.log("am here checking type >> ", type);
    let count = this.state.ingredients[type];
    count++;

    let getIngredient = {
      ...this.state.ingredients
    };

    let newPrice = this.state.total_price + INGREDIENT_PRICES[type];

    // console.log(
    //   "am here checking get ingredient and count >> ",
    //   getIngredient,
    //   count
    // );
    getIngredient[type] = count;

    this.setState({
      ingredients: getIngredient,
      total_price: newPrice
    });

    this.showOrderHelper(getIngredient);
  };

  removeIngredient = type => {
    let count = this.state.ingredients[type];

    let newPrice =
      count > 0
        ? this.state.total_price - INGREDIENT_PRICES[type]
        : this.state.total_price;

    count === 0 ? (count = 0) : count--;
    let getIngredient = {
      ...this.state.ingredients
    };
    getIngredient[type] = count;

    // console.log(newPrice, count);

    this.setState({
      ingredients: getIngredient,
      total_price: newPrice
    });

    this.showOrderHelper(getIngredient);
  };

  handleFetchOrder = () => {
    this.setState({ toggle_button: true });
  };

  handleCloseOrder = () => {
    this.setState({ toggle_button: false });
  };

  makeOrderHandler = () => {
    alert("You successfully made an order");
  };

  render() {
    const disableInfo = { ...this.state.ingredients };
    for (const key in disableInfo) {
      disableInfo[key] = disableInfo[key] === 0;
    }
    // console.log("disable info >> ", disableInfo);
    return (
      <Auxx>
        {/* {this.state.toggle_button && (
          <Modal>
            <OrderSummary ingredients={this.state.ingredients}></OrderSummary>
          </Modal>
        )} */}
        <Modal
          show={this.state.toggle_button}
          closeModal={this.handleCloseOrder}
        >
          <OrderSummary
            price={this.state.total_price}
            close_modal={this.handleCloseOrder}
            make_order={this.makeOrderHandler}
            ingredients={this.state.ingredients}
          ></OrderSummary>
        </Modal>
        <Burger ingredient={this.state.ingredients}></Burger>
        <BuildControl
          addIngredient={type => this.addIngredient(type)}
          removeIngredient={type => this.removeIngredient(type)}
          disableInfo={disableInfo}
          totalPrice={this.state.total_price}
          clickButton={this.handleFetchOrder}
          orderToggler={this.state.show_order}
        ></BuildControl>
      </Auxx>
    );
  }
}

export default BurgerBuilder;
