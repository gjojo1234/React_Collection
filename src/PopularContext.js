import React from "react";
import { data } from "./data";

const PopularContext = React.createContext();
const collect = data;

function PopularProvider({ children }) {
  return (
    <PopularContext.Provider value={collect}>
      {children}
    </PopularContext.Provider>
  );
}

export { PopularContext, PopularProvider };
