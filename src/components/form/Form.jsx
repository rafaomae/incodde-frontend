import React from "react";
import { Formik, Form as FormField, ErrorMessage } from "formik";
import { css } from "aphrodite/no-important";

import styles from "./styles";

export const Form = ({
  initialValues,
  validationSchema,
  submit,
  children,
  notLogged,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={async (fields) => {
        await submit(fields);
      }}
    >
      {({ errors, status, touched }) => (
        <FormField
          className={css(notLogged ? styles.formNotLogged : styles.form)}
          autoComplete="off"
        >
          {children}
        </FormField>
      )}
    </Formik>
  );
};

export const FormRow = ({ children, notLogged }) => {
  return (
    <div className={css(notLogged ? styles.formRowNotLogged : styles.formRow)}>
      {children}
    </div>
  );
};

export const ErrorRow = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      component="div"
      className={css(styles.errorMessage)}
    />
  );
};
