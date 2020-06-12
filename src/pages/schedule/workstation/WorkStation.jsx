import React, { useEffect, useState } from "react";
import { css } from "aphrodite/no-important";
import { Field } from "formik";
import { useParams } from "react-router-dom";

import Button from "../../../components/button/Button";
import { Form, FormRow, ErrorRow } from "../../../components/form/Form";
import DatePickerField from "../../../components/datePicker/DatePicker";

import validationSchema from "../../../validators/schedule";
import history from "../../../services/history";
import { getToken } from "../../../services/auth";
import { getWorkStation } from "../../../modules/workStation";
import { post } from "../../../modules/schedule";
import { getAll } from "../../../modules/user";

import styles from "./styles";
import "react-datepicker/dist/react-datepicker.css";

export default () => {
  const [workStation, setWorkStation] = useState({});
  const [users, setUsers] = useState([]);
  const login = getToken();
  const { id } = useParams();

  useEffect(() => {
    getWorkStation(id).then(({ data }) => {
      setWorkStation(data);
    });
  }, [id]);

  useEffect(() => {
    if (login.isAdmin) {
      getAll().then(({ data }) => {
        setUsers(data);
      });
    }
  }, [login.isAdmin]);

  const INITIAL_VALUES = {
    start: "",
    end: "",
    createdBy: login.email,
    usedBy: login.email,
  };

  const submitForm = async (fields) => {
    const result = await post(id, fields);
    if (result.statusCode) {
      alert(result.message);
    } else {
      alert(`Agendamento criado com sucesso!`);
      history.push("/workstation");
    }
  };

  return (
    <>
      <h2>Agendar horário para workstation: {workStation.name}</h2>
      <Form
        initialValues={INITIAL_VALUES}
        validationSchema={validationSchema}
        submit={(fields) => submitForm(fields)}
      >
        <FormRow>
          <DatePickerField name="start" placeholderText="Data de início" />
        </FormRow>
        <ErrorRow name="start" />
        <FormRow>
          <DatePickerField name="end" placeholderText="Data de término" />
        </FormRow>
        <ErrorRow name="end" />
        {login.isAdmin && (
          <FormRow>
            <Field as="select" name="usedBy" className={css(styles.select)}>
              {users.map((user) => (
                <option key={user._id} value={user.email}>
                  {user.name} ({user.email})
                </option>
              ))}
            </Field>
            <ErrorRow name="usedBy" />
          </FormRow>
        )}
        <Button type="submit">Cadastrar</Button>
      </Form>
    </>
  );
};
