import React, { Component } from "react";

//styles
import Classes from "./modal.css";

//hoc
import Auxx from "../../../hoc/Auxx";

//components
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }
  componentDidUpdate() {
    console.log("[Modal] component did update");
  }
  render() {
    return (
      <Auxx>
        <Backdrop
          toggle_button={this.props.show}
          clicked={this.props.closeModal}
        ></Backdrop>
        <div
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? 1 : 0
          }}
          className={Classes.Modal}
        >
          {this.props.children}
        </div>
      </Auxx>
    );
  }
}

export default Modal;
