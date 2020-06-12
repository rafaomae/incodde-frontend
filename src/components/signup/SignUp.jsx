import React from "react";
import { css } from "aphrodite/no-important";
import { Field } from "formik";
import { Form, FormRow, ErrorRow } from "../form/Form";
import Button from "../button/Button";
import InputMask from "react-text-mask";

import { TOKEN_KEY } from "../../config";
import { post, put } from "../../modules/user";
import { send } from "../../modules/email";
import { login } from "../../modules/login";
import {
  FiUser,
  FiCalendar,
  FiEdit2,
  FiHome,
  FiMessageCircle,
  FiAtSign,
  FiLock,
} from "react-icons/fi";

import styles from "./styles";

import {
  birthDateMask,
  cpfMask,
  validationSchema,
} from "../../validators/user";

let INITIAL_VALUES = {
  name: "",
  birthDate: "",
  cpf: "",
  address: "",
  bio: "",
  email: "",
  password: "",
  isAdmin: false,
};

export default ({ user }) => {
  let notLogged = true;
  if (user) {
    notLogged = false;
    INITIAL_VALUES = {
      name: user.name,
      birthDate: user.birthDate,
      cpf: user.cpf,
      address: user.address,
      bio: user.bio,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
    };
  }

  const submitForm = async (fields) => {
    if (!user) {
      const result = await post(fields);
      if (result.statusCode) {
        alert(result.message);
      } else {
        const emailResult = await send(fields.email, result.id);
        if (emailResult.statusCode) {
          alert(emailResult.message);
        } else {
          alert(`Usuário criado com sucesso!
      Um e-mail foi enviado, por favor confirme para utilizar os funcionalidades do site`);
          window.location.reload();
        }
      }
    } else {
      const result = await put(user._id, fields);
      if (result.statusCode) {
        alert(result.message);
      } else {
        const loginReq = { email: fields.email, password: fields.password };
        const loginResult = await login(loginReq);
        if (loginResult.token) {
          localStorage.setItem(TOKEN_KEY, JSON.stringify(loginResult));
          alert("Dados atualizados");
          window.location.reload();
        }
      }
    }
  };

  return (
    <Form
      notLogged={notLogged}
      initialValues={INITIAL_VALUES}
      validationSchema={validationSchema}
      submit={(fields) => submitForm(fields)}
    >
      <FormRow notLogged={notLogged}>
        <FiUser size={18} />
        <Field name="name" type="text" placeholder="Seu nome" />
      </FormRow>
      <ErrorRow name="name" />
      <div className={css(styles.formRowGroup)}>
        <FormRow notLogged={notLogged}>
          <FiEdit2 size={18} />
          <Field name="cpf">
            {({ field }) => (
              <InputMask {...field} mask={cpfMask} placeholder="Seu cpf" />
            )}
          </Field>
        </FormRow>
        <FormRow notLogged={notLogged}>
          <FiCalendar size={18} />
          <Field name="birthDate">
            {({ field }) => (
              <InputMask
                {...field}
                mask={birthDateMask}
                placeholder="Data nasc."
              />
            )}
          </Field>
        </FormRow>
      </div>
      <div className={css(styles.formRowGroup)}>
        <ErrorRow name="cpf" />
        <ErrorRow name="birthDate" />
      </div>
      <FormRow notLogged={notLogged}>
        <FiHome size={18} />
        <Field name="address" type="text" placeholder="Seu endereço" />
      </FormRow>
      <ErrorRow name="address" />
      <FormRow notLogged={notLogged}>
        <FiMessageCircle size={18} />
        <Field name="bio" as="textarea" placeholder="Sua bio" />
      </FormRow>
      <FormRow notLogged={notLogged}>
        <FiAtSign size={18} />
        <Field name="email" type="email" placeholder="Seu e-mail" />
      </FormRow>
      <ErrorRow name="email" />
      <FormRow notLogged={notLogged}>
        <FiLock size={18} />
        <Field name="password" type="password" placeholder="Sua senha" />
      </FormRow>
      <ErrorRow name="password" />
      <Button type="submit">Cadastrar</Button>
    </Form>
  );
};
