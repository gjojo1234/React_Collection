import React, { useContext } from "react";
import { ImageContext } from "../ImageContext";
import "./images.css";

const Images = () => {
  const myData = useContext(ImageContext);

  return (
    <div className="container">
      <img src={myData.state.url} alt="" className="item1" />
      <div className="item2">
        {myData.collect[0].images.map((item) => {
          const { id, url } = item;
          return (
            <div key={id}>
              <img
                src={url}
                alt=""
                className="imgItem"
                onClick={myData.change}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Images;
