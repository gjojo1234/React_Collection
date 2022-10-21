import React, { useContext } from "react";
import { PopularContext } from "../PopularContext";
import "./navig.css";

const Navig = () => {
  const collect = useContext(PopularContext);
  return (
    <div>
      <h1 className="nadpis">Popular Collections</h1>
      <ul className="lists">
        {collect.map((item) => {
          const { id, name } = item;
          return (
            <li key={id} style={{ listStyleType: "none", fontSize: "1.5em" }}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navig;
