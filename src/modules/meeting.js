import api from "../services/api";

const post = async (meetingRoomId, meeting) => {
  try {
    const { data } = await api.post(
      `/meetingroom/${meetingRoomId}/meeting`,
      meeting
    );
    return data;
  } catch ({ response }) {
    const errorData = response.data;
    return errorData;
  }
};

const update = async (meetingRoomId, meetingId, meeting) => {
  try {
    const { data } = await api.put(
      `/meetingroom/${meetingRoomId}/meeting/${meetingId}`,
      meeting
    );

    return data;
  } catch ({ response }) {
    const errorData = response.data;
    return errorData;
  }
};
const remove = async (meetingRoomId, meetingId) => {
  try {
    const { data } = await api.delete(
      `/meetingroom/${meetingRoomId}/meeting/${meetingId}`
    );
    return data;
  } catch ({ response }) {
    const errorData = response.data;
    return errorData;
  }
};

export { post, update, remove };
