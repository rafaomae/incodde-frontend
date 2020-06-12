import React, { useEffect, useState } from "react";
import { css } from "aphrodite/no-important";

import { get } from "../../modules/user";
import SignUp from "../../components/signup/SignUp";

import styles from "./styles";

export default () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    get().then(({ data }) => {
      data.birthDate = new Date(data.birthDate).toLocaleDateString("pt-BR");
      setUser(data);
    });
  }, []);

  return (
    <>
      <h2>Meus dados</h2>
      <div className={css(styles.content)}>
        {user._id && <SignUp user={user} />}
      </div>
    </>
  );
};
