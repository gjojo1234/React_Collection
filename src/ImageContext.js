import React, { useReducer } from "react";
import { data } from "./data";
import { reducer } from "./reducer";

const ImageContext = React.createContext();
const collect = data;
const view = {
  url: "/img/nature1.jpg",
};

function ImageProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, view);
  const change = (e) => {
    e.preventDefault();

    dispatch({ type: "CHANGE", payload: e.target.src });
  };
  return (
    <ImageContext.Provider value={{ state, change, collect }}>
      {children}
    </ImageContext.Provider>
  );
}

export { ImageContext, ImageProvider };
