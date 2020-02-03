import React from "react";

//components
import NavigationItem from "./NavigationItem/NavigationItem";

//styles
import Classes from "./navigationItems.css";

const navigationItems = props => (
  <ul className={Classes.NavigationItems}>
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/order">Orders</NavigationItem>
  </ul>
);

export default navigationItems;
