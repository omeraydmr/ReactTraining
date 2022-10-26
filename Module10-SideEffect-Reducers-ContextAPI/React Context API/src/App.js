/**
 * @author omeraydmr
 * @email osilix1@gmail.com
 * @create date 2022-10-26 23:07:12
 * @modify date 2022-10-27 00:43:20
 */

import React, { useState, useEffect, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  // ! cleared for better usage
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  //   if (storedUserLoggedInInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  // return (
  //   <React.Fragment>
  //     {
  // ! auth context.provider will supply all props values to all children components which listen
  //     }
  //     <AuthContext.Provider
  //       value={{
  //         isLoggedIn: isLoggedIn,
  //         onLogout: logoutHandler
  //       }}
  //     >
  //       <MainHeader />
  //       <main>
  //         {!isLoggedIn && <Login onLogin={loginHandler} />}
  //         {isLoggedIn && <Home onLogout={logoutHandler} />}
  //       </main>
  //     </AuthContext.Provider> 
  //   </React.Fragment>
  // );

  // * new type of writing the code sample

  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
