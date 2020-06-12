import * as Yup from "yup";

export default Yup.object().shape({
  isAdmin: Yup.boolean(),
  name: Yup.string().required("Nome é obrigatório"),
  description: Yup.string().required("Descrição é obrigatória"),
  start: Yup.date().required("Data de início é obrigatória"),
  end: Yup.date()
    .required("Data de término é obrigatória")
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
