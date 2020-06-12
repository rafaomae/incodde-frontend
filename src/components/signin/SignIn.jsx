import React, { useState } from "react";
import { Field } from "formik";
import { Form, FormRow, ErrorRow } from "../form/Form";
import Button from "../button/Button";
import { FiMail, FiEyeOff, FiEye } from "react-icons/fi";

import { TOKEN_KEY } from "../../config";
import { login } from "../../modules/login";
import history from "../../services/history";
import validationSchema from "../../validators/login";

const INITIAL_VALUES = {
  email: "",
  password: "",
};

export default () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const submitForm = async (fields) => {
    const result = await login(fields);
    if (result.token) {
      localStorage.setItem(TOKEN_KEY, JSON.stringify(result));
      history.push("/home");
    } else alert(result.message);
  };

  return (
    <Form
      notLogged={true}
      initialValues={INITIAL_VALUES}
      validationSchema={validationSchema}
      submit={(fields) => submitForm(fields)}
    >
      <FormRow notLogged={true}>
        <Field name="email" type="text" placeholder="Seu e-mail" />
        <FiMail size={18} />
      </FormRow>
      <ErrorRow name="email" />
      <FormRow notLogged={true}>
        <Field
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Sua senha"
        />
        {!showPassword && <FiEyeOff size={18} onClick={handleShowPassword} />}
        {showPassword && <FiEye size={18} onClick={handleShowPassword} />}
      </FormRow>
      <ErrorRow name="password" />
      <Button type="submit">Acessar</Button>
    </Form>
  );
};
