import React from "react";
import { css } from "aphrodite/no-important";

import styles from "./styles";

export const LoginLayout = ({ children }) => {
  return (
    <div className={css(styles.wrapper)}>
      <div className={css(styles.content)}>{children}</div>
    </div>
  );
};
export default LoginLayout;
