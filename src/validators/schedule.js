import * as Yup from "yup";

export default Yup.object().shape({
  start: Yup.date().required("Data de início é obrigatória"),
  end: Yup.date()
    .required("Data de témino é obrigatória")
    .when(
      "start",
      (eventStartDate, schema) =>
        eventStartDate &&
        schema.min(
          eventStartDate,
          "Data de término tem que ser maior que data de início"
        )
    ),
});
