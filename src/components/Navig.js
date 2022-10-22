import React, { useContext } from "react";
import { ImageContext } from "../ImageContext";
import "./navig.css";

const Navig = () => {
  const myData = useContext(ImageContext);
  return (
    <div>
      <h1 className="nadpis">Popular Collections</h1>
      <ul className="lists">
        {myData.collect.map((item) => {
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
