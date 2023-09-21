import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <section className="nav">
      <div className="logo">
        <img src="/images/house.svg" alt="logo" />
        <h1>Interior Decoration</h1>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search for designs"
        />
      </div>
    </section>
  );
}

export default Nav;
