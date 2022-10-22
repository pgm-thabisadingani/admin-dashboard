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
  const [currentColor, setCurrentColor] = useState("#03c9d7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  //e.target.value : dont distructure coz the return value is a string thus use "color"
  const setColor = (color) => {
    setCurrentColor(color);
    // when the user vists again the value with still be the same
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    // when the user vists again the value with still be the same
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

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
        currentMode,
        currentColor,
        themeSettings,
        setThemeSettings,
        setColor,
        setMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// get the data from the context using the context
export const useStateContext = () => useContext(StateContext);
