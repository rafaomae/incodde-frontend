import React, { useEffect, useState } from "react";
import { css } from "aphrodite/no-important";
import { useParams } from "react-router-dom";

import { confirmUser } from "../../modules/user";
import history from "../../services/history";
import logo from "../../assets/logo.svg";
import styles from "./styles";

export default () => {
  const { id } = useParams();
  const [confirmed, setConfirmed] = useState(false);
  useEffect(() => {
    confirmUser(id).then(({ data }) => {
      if (data.statusCode) {
        alert(data.message);
      } else {
        setConfirmed(true);
        setTimeout(() => {
          history.push("/");
        }, 2000);
      }
    });
  }, [id]);
  return (
    <>
      <img className={css(styles.img)} src={logo} alt="Coworking" />
      {confirmed && <p>Seu e-mail foi confirmado!</p>}
    </>
  );
};
