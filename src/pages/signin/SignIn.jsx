import React, { useState } from "react";
import { css } from "aphrodite/no-important";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FiMail, FiEyeOff, FiEye } from "react-icons/fi";

import schema from "./validator";
import logo from "../../assets/logo.svg";
import styles from "./styles";

const INITIAL_VALUES = {
  email: "",
  password: "",
};

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <img className={css(styles.img)} src={logo} alt="Coworking" />
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={schema}
        onSubmit={(fields) => {
          alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
        }}
      >
        {({ errors, status, touched }) => {
          const getErrorClass = (type) => {
            return errors[type] && touched[type] ? styles.inputError : "";
          };
          return (
            <Form className={css(styles.form)}>
              <div className={css(styles.formRow, getErrorClass("email"))}>
                <Field
                  name="email"
                  type="text"
                  className={css(styles.input)}
                  placeholder="Seu e-mail"
                />
                <FiMail size={18} />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className={css(styles.errorMessage)}
              />
              <div className={css(styles.formRow, getErrorClass("password"))}>
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className={css(styles.input)}
                  placeholder="Sua senha"
                />
                {!showPassword && (
                  <FiEyeOff size={18} onClick={handleShowPassword} />
                )}
                {showPassword && (
                  <FiEye size={18} onClick={handleShowPassword} />
                )}
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className={css(styles.errorMessage)}
              />
              <button type="submit" className={css(styles.button)}>
                Acessar
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
export default SignIn;
