import React, { useContext } from "react";
import { PopularContext } from "../PopularContext";
import "./images.css";

const Images = () => {
  const collect = useContext(PopularContext);

  return (
    <div className="container">
      <img src={collect[0].images[0].url} alt="" className="item1" />
      <div className="item2">
        {collect[0].images.map((item) => {
          const { id, url } = item;
          return (
            <div key={id}>
              <img src={url} alt="" className="imgItem" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Images;
