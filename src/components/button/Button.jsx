import React from "react";
import { css } from "aphrodite/no-important";

import styles from "./styles";

export default ({ type, children, className, onClick, role }) => {
  const getStyle = () => {
    switch (role) {
      case "error":
        return styles.error;
      case "success":
        return styles.success;
      case "default":
        return styles.default;
      default:
        return "";
    }
  };
  return (
    <button
      type={type}
      className={css(className ? className : styles.button, getStyle())}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
