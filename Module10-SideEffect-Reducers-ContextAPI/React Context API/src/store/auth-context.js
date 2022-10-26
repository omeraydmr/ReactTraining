/**
 * @author omeraydmr
 * @email osilix1@gmail.com
 * @create date 2022-10-26 22:24:29
 * @modify date 2022-10-26 23:04:07
 * @desc auth context template
 */

/**
 * * USAGE OF REACT CONTEXTS
 * ! react contexts are using for if the multiple props chain is in the project
 * ! that contexts will store your states and more easily manage your props and states
 */

import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  // ! dummy functions for better IDE answers
  onLogout: () => {},
  onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
