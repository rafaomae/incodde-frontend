import api from "../services/api";

const login = async (login) => {
  try {
    const { data } = await api.post("login", login);
    return data;
  } catch ({ response }) {
    console.error(response);
    return response.data;
  }
};

export { login };
