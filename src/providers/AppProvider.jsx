// Imports from react
import {createContext, useContext, useState} from "react";

// Declaring AppContext
const AppContext = createContext({});

// Exporting AppProvider and AppContext
export const useAppContext = () => useContext(AppContext);
export default function AppProvider(props){
  const [pageSelect, usePageSelect] = useState("About Me");

  return (
    <AppContext.Provider value={{pageSelect}}>
      {props.children}
    </AppContext.Provider>
  )
};