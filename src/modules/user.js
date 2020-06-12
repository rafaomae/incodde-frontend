import api from "../services/api";

const getAll = async () => {
  return await api.get("users");
};

const get = async () => {
  return await api.get("user");
};
const post = async (user) => {
  try {
    const { data } = await api.post("user", user);
    return data;
  } catch ({ response }) {
    const errorData = response.data;
    return errorData;
  }
};
const put = async (id, user) => {
  try {
    const { data } = await api.put(`user/${id}`, user);
    return data;
  } catch ({ response }) {
    const errorData = response.data;
    return errorData;
  }
};

const patch = async (id, isAdmin) => {
  try {
    const { data } = await api.patch(`user/${id}/admin/${isAdmin}`);
    return data;
  } catch ({ response }) {
    const errorData = response.data;
    return errorData;
  }
};

const confirmUser = async (id) => {
  try {
    return await api.patch(`user/${id}/confirmed`);
  } catch ({ response }) {
    const errorData = response.data;
    return errorData;
  }
};

export { get, getAll, post, put, patch, confirmUser };
