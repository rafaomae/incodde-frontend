import React, { useState } from "react";
import { css } from "aphrodite/no-important";

import logo from "../../assets/logo.svg";
import styles from "./styles";

import SignIn from "../../components/signin/SignIn";
import SignUp from "../../components/signup/SignUp";

export const Home = () => {
  const [showSignIn, setShowSignIn] = useState(true);
  const handleSignIn = () => {
    setShowSignIn(true);
  };
  const handleSignUp = () => {
    setShowSignIn(false);
  };
  const getClassSignIn = () => {
    return showSignIn ? styles.selected : "";
  };
  const getClassSignUp = () => {
    return !showSignIn ? styles.selected : "";
  };

  return (
    <>
      <img className={css(styles.img)} src={logo} alt="Coworking" />
      <div className={css(styles.control)}>
        <span className={css(getClassSignIn())} onClick={handleSignIn}>
          Entrar
        </span>
        <span className={css(getClassSignUp())} onClick={handleSignUp}>
          Cadastro
        </span>
      </div>
      {showSignIn && <SignIn />}
      {!showSignIn && <SignUp />}
    </>
  );
};
export default Home;
