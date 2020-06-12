import api from "../services/api";

const getWorkStations = async () => {
  return await api.get("workstations");
};

const getWorkStation = async (id) => {
  return await api.get(`/workstation/${id}`);
};

const postWorkStation = async (workStation) => {
  try {
    const { data } = await api.post("/workstation", workStation);
    return data;
  } catch ({ response }) {
    const errorData = response.data;
    return errorData;
  }
};

const putWorkStation = async (workStation) => {
  try {
    const { data } = await api.put(`/meetingroom/${workStation._id}`, {
      name: workStation.name,
      description: workStation.description,
    });
    return data;
  } catch ({ response }) {
    const errorData = response.data;
    return errorData;
  }
};

const removeWorkStation = async (id) => {
  return await api.delete(`/workstation/${id}`);
};

export {
  getWorkStations,
  getWorkStation,
  postWorkStation,
  putWorkStation,
  removeWorkStation,
};
