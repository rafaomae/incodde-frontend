import api from "../services/api";

const getMeetingRooms = async () => {
  return await api.get("meetingrooms");
};

const getAvailableMeetings = async () => {
  return await api.get("/meetingroom/meeting/available");
};

const getMeetingRoom = async (id) => {
  return await api.get(`/meetingroom/${id}`);
};

const postMeetingRoom = async (meetingRoom) => {
  try {
    const { data } = await api.post("/meetingroom", meetingRoom);
    return data;
  } catch ({ response }) {
    const errorData = response.data;
    return errorData;
  }
};

const putMeetingRoom = async (meetingRoom) => {
  try {
    const { data } = await api.put(`/meetingroom/${meetingRoom._id}`, {
      name: meetingRoom.name,
      description: meetingRoom.description,
    });
    return data;
  } catch ({ response }) {
    const errorData = response.data;
    return errorData;
  }
};

const removeMeetingRoom = async (id) => {
  return await api.delete(`/meetingroom/${id}`);
};

export {
  getMeetingRooms,
  getAvailableMeetings,
  getMeetingRoom,
  postMeetingRoom,
  putMeetingRoom,
  removeMeetingRoom,
};
