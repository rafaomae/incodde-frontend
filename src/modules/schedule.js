import api from "../services/api";

const getUserSchedules = async () => {
  return await api.get("workstations/schedules");
};

const post = async (workstationId, schedule) => {
  try {
    const { data } = await api.post(
      `/workstation/${workstationId}/schedule`,
      schedule
    );
    return data;
  } catch ({ response }) {
    const errorData = response.data;
    return errorData;
  }
};

export { getUserSchedules, post };
