import React, { useEffect, useState } from "react";
import { Field } from "formik";
import { useParams } from "react-router-dom";

import Button from "../../../components/button/Button";
import { Form, FormRow, ErrorRow } from "../../../components/form/Form";
import DatePickerField from "../../../components/datePicker/DatePicker";

import validationSchema from "../../../validators/meeting";
import history from "../../../services/history";
import { getMeetingRoom } from "../../../modules/meetingRoom";
import { post } from "../../../modules/meeting";
import { getToken } from "../../../services/auth";

import "react-datepicker/dist/react-datepicker.css";

export default () => {
  const [meetingRoom, setMeetingRoom] = useState({});
  const { id } = useParams();

  const submitForm = async (fields) => {
    const result = await post(id, fields);
    if (result.statusCode) {
      alert(result.message);
    } else {
      alert(`Reunião criada com sucesso!`);
      history.push("/reuniao");
    }
  };

  useEffect(() => {
    getMeetingRoom(id).then(({ data }) => {
      setMeetingRoom(data);
    });
  }, [id]);

  const INITIAL_VALUES = {
    name: "",
    description: "",
    start: "",
    end: "",
    createdBy: getToken().email,
  };

  return (
    <>
      <h2>Agendar reunião: {meetingRoom.name}</h2>
      <Form
        initialValues={INITIAL_VALUES}
        validationSchema={validationSchema}
        submit={(fields) => submitForm(fields)}
      >
        <FormRow>
          <Field name="name" type="text" placeholder="Nome" />
        </FormRow>
        <ErrorRow name="name" />
        <FormRow>
          <Field name="description" type="text" placeholder="Descrição" />
        </FormRow>
        <ErrorRow name="description" />
        <FormRow>
          <DatePickerField name="start" placeholderText="Data de início" />
        </FormRow>
        <ErrorRow name="start" />
        <FormRow>
          <DatePickerField name="end" placeholderText="Data de término" />
        </FormRow>
        <ErrorRow name="end" />
        <Button type="submit">Cadastrar</Button>
      </Form>
    </>
  );
};
