import React from "react";
import { css } from "aphrodite/no-important";
import { Formik, Field, Form, ErrorMessage } from "formik";

import schema from "./validator";
import logo from "../../assets/logo.svg";
import styles from "./styles";

const INITIAL_VALUES = {
  email: "",
  password: "",
};

export const SignIn = () => {
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
          return (
            <Form className={css(styles.form)}>
              <Field
                name="email"
                type="text"
                className={css(
                  styles.input,
                  errors.email && touched.email ? styles.input_error : ""
                )}
                placeholder="Seu e-mail"
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css(styles.error_message)}
              />
              <Field
                name="password"
                type="password"
                className={css(
                  styles.input,
                  errors.password && touched.password ? styles.input_error : ""
                )}
                placeholder="Sua senha"
              />
              <ErrorMessage
                name="password"
                component="div"
                className={css(styles.error_message)}
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
