import React, { Component } from "react";

//higher order component
import Auxx from "../../hoc/Auxx";

//containers
import BurgerBuider from "../../containers/burgerBuilder/BurgerBuilder";

//components
import ToolBar from "../Navigation/ToolBar/ToolBar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

//Styles
import Classes from "./layout.css";

class Layout extends Component {
  state = {
    side_drawer: false
  };
  closeSideDrawerHandler = () => {
    this.setState({ side_drawer: false });
  };
  drawerTogglerHandler = () => {
    this.setState(prevState => {
      return { side_drawer: !prevState.side_drawer };
    });
  };
  render() {
    return (
      <Auxx>
        <ToolBar toggleDrawer={this.drawerTogglerHandler} />
        <SideDrawer
          closed={this.closeSideDrawerHandler}
          open={this.state.side_drawer}
        ></SideDrawer>
        <main className={Classes.Content}>
          <BurgerBuider></BurgerBuider>
        </main>
      </Auxx>
    );
  }
}

export default Layout;
