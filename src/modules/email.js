import api from "../services/api";
import { EMAIL_SENDER, EMAIL_URL } from "../config";

const send = async (email, id) => {
  const confirmUrl = `${EMAIL_URL}${id}`;

  const message = {
    from: EMAIL_SENDER,
    to: email,
    subject: "Coworking App - Confirmação de cadastro",
    text: `<h1>Confirmação de cadastro</h1>
    <p>Olá cliente, clique no botão abaixo para confirmar seu cadastro</p>
    <button type="button" onclick="location.href='${confirmUrl}'>Confirmar e-mail</button>`,
  };

  try {
    const { data } = await api.post("email/send", message);
    return data;
  } catch ({ response }) {
    console.error(response);
    return response.data;
  }
};

export { send };
