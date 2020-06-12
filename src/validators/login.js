import * as Yup from "yup";

export default Yup.object().shape({
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: Yup.string()
    .min(6, "Senha precisa no mínimo 6 caracteres")
    .required("Senha é obrigatório"),
});
