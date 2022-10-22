import React, { useContext } from "react";
import { ImageContext } from "../ImageContext";
import "./navig.css";

function Navig() {
  const myData = useContext(ImageContext);
  return (
    <div>
      <h1 className="nadpis">Popular Collections</h1>
      <ul className="navList">
        {myData.collect.map((item) => {
          const { id, name } = item;

          return (
            <li
              key={id}
              id={id}
              style={{ listStyleType: "none", fontSize: "1.5em" }}
              onClick={myData.changeID}
              className="lists"
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navig;
