import React from "react";
import SideBar from "../../../components/sideBar/SideBar";
import { css } from "aphrodite";
import styles from "./styles";

export const DefaultLayout = ({ children }) => {
  return (
    <div className={css(styles.wrapper)}>
      <SideBar />
      <div className={css(styles.content)}>{children}</div>
    </div>
  );
};
export default DefaultLayout;
