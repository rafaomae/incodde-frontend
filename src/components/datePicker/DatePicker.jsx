import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker, { registerLocale } from "react-datepicker";
import { ptBR } from "date-fns/locale";
import { css } from "aphrodite/no-important";
import styles from "./styles";
registerLocale("ptBr", ptBR);

export default ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      locale="ptBr"
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={30}
      timeCaption="time"
      dateFormat="dd/MM/yyyy HH:mm"
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
      className={css(styles.input)}
    />
  );
};
