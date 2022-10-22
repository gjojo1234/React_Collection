import React, { useReducer } from "react";
import { data } from "./data";
import { reducer } from "./reducer";

const ImageContext = React.createContext();
const collect = data;

const view = {
  id: 0,
  url: collect[0].images[0].url,
};

function ImageProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, view);
  const change = (e) => {
    e.preventDefault();

    dispatch({ type: "CHANGE", payload: e.target.src });
  };
  const changeID = (e) => {
    e.preventDefault();

    dispatch({
      type: "CHANGE_ID",
      id: e.target.id,
      url: collect[e.target.id].images[0].url,
    });
  };
  return (
    <ImageContext.Provider value={{ state, change, collect, changeID }}>
      {children}
    </ImageContext.Provider>
  );
}

export { ImageContext, ImageProvider };
