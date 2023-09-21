import React, { useState } from "react";
import "./Nav.css";

function Nav({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        onSearch(value); 
      };
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
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>
    </section>
  );
}

export default Nav;
