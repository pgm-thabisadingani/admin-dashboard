import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

// values: will be passed through the application
// return children

export const ContextProvider = ({ children }) => {
  // application logic
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  //initialState returns an object, thus use a spread operator, and targetd the value you want to change [value] : boolean

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  //passing values to the state context
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// get the data from the context using the context
export const useStateContext = () => useContext(StateContext);
