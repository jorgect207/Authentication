import React, { useEffect, useState } from "react";

const Context = React.createContext({
  Enter: false,
  changeStateToTrue: () => {},
  changeStateToFalse: () => {},
});

export const LoginContex = (props) => {
  useEffect(() => {
    const getItem = localStorage.getItem("id");

    if (getItem === "1") {
      Setenter(true);
    }
  }, []);
  const [Enter, Setenter] = useState(false);

  const changeStateToTrue = () => {
    Setenter(true);
  };

  const changeStateToFalse = () => {
    Setenter(false);
  };

  return (
    <Context.Provider
      value={{
        Enter: Enter,
        changeStateToTrue: changeStateToTrue,
        changeStateToFalse: changeStateToFalse,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
