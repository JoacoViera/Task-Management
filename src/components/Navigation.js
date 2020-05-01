import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <nav className="navbar navbar-dark bg-dark">
          <a href="#" className="text-white">
            {/* Props para enviar atributos a traves del component */}
            {/* Dentro de estas llaves puedo meter js como un champion */}
            {this.props.titulo}
          </a>
        </nav>
      </div>
    );
  }
}

export default Navigation;
