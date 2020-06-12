import React, { useEffect, useState } from "react";
import { Field } from "formik";
import { Form, FormRow, ErrorRow } from "../../../components/form/Form";
import Button from "../../../components/button/Button";
import { useParams } from "react-router-dom";

import validationSchema from "../../../validators/default";
import history from "../../../services/history";
import {
  getMeetingRoom,
  postMeetingRoom,
  putMeetingRoom,
} from "../../../modules/meetingRoom";
import {
  getWorkStation,
  postWorkStation,
  putWorkStation,
} from "../../../modules/workStation";

let INITIAL_VALUES = {
  name: "",
  description: "",
};

export default () => {
  const [user, setUser] = useState(INITIAL_VALUES);
  const { id, obj } = useParams();

  const getFunction = () => {
    if (obj === "reuniao") {
      if (id === "new") {
        return postMeetingRoom;
      }
      return putMeetingRoom;
    } else {
      if (id === "new") {
        return postWorkStation;
      }
      return putWorkStation;
    }
  };

  useEffect(() => {
    if (id !== "new") {
      switch (obj) {
        case "reuniao":
          getMeetingRoom(id).then(({ data }) => {
            setUser(data);
          });
          break;
        default:
          getWorkStation(id).then(({ data }) => {
            setUser(data);
          });
          break;
      }
    }
  }, [id, obj]);

  const submitForm = async (fields) => {
    const submitFunc = getFunction();
    const result = submitFunc(fields);
    if (result.statusCode) {
      alert(result.message);
    } else {
      alert(`Dados atualizados com sucesso!`);
      history.push(`/admin/${obj}`);
    }
  };

  return (
    <>
      <Form
        initialValues={user}
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
        <Button type="submit">Cadastrar</Button>
      </Form>
    </>
  );
};
