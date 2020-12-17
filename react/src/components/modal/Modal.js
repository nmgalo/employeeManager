import React, { Component } from "react";

import "./Modal.css";
import Backdrop from "./Backdrop";

//Good ol modal from my old project so nvm the class based component, will rewrite probably

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentWillUpdate() {
    console.log("[Modal] WillUpdate");
  }

  render() {
    return (
      <>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          <p>Name: </p>
          <input
            placeholder={this.props.nameplaceholder}
            onChange={this.props.onNameChange}
          />
          <p>Last Name: </p>
          <input
            placeholder={this.props.lnameplaceholder}
            onChange={this.props.onLnameChange}
          />
          <p>Dob younger than: </p>
          <input
            placeholder={this.props.dobplaceholder}
            onChange={this.props.onDobChange}
          />
          <p>Gender: </p>
          <input
            placeholder={this.props.genderplaceholder}
            onChange={this.props.onGenderChange}
          />
          <p>Region: </p>
          <input
            placeholder={this.props.regionplaceholder}
            onChange={this.props.onRegionChange}
          />
          <button onClick={this.props.onButtonClick}>GO</button>
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Modal;
