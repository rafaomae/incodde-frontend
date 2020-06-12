import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  description: Yup.string().required("Descrição é obrigatória"),
});
