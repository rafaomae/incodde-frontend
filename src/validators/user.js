import * as Yup from "yup";
const { cpf } = require("cpf-cnpj-validator");

export const birthDateMask = [
  /\d/,
  /\d/,
  "/",
  /\d/,
  /\d/,
  "/",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const cpfMask = [
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];

Yup.addMethod(Yup.string, "cpf", function (message) {
  return this.test("cpf", message, function (value) {
    const { path, createError } = this;

    return cpf.isValid(value) || createError({ path, message });
  });
});

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  birthDate: Yup.date()
    .typeError("Data inválida")
    .required("Data de nascimento é obrigatório"),
  cpf: Yup.string().required("Cpf é obrigatório").cpf("Cpf inválido"),
  address: Yup.string().required("Endereço é obrigatório"),
  bio: Yup.string().optional(),
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: Yup.string()
    .min(6, "Senha precisa no mínimo 6 caracteres")
    .required("Senha é obrigatório"),
});
