import { createContext, useReducer, useContext } from "react";
import { initialState, reducer } from "./reducer";

export const Context = createContext<any>(initialState);

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useGlobalContext = () => useContext(Context);
