import React from "react";

const Navigation = (props) => {
  return (
    <div className="Navigation">
      <nav className="navbar navbar-dark bg-dark">
        <a href="#" className="text-white">
          {props.tittle}
        </a>
      </nav>
    </div>
  );
}

export default Navigation;
