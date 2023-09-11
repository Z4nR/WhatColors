import axios from "axios";

const Server_URL = import.meta.env.VITE_BASE_URL;
//const Server_URL = "http://localhost:5000/v1";

const newIndividual = async (userData) => {
  return axios
    .post(`${Server_URL}/user/new`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      const { id } = response.data;
      return id;
    });
};

const getIndividualById = async (id) => {
  return axios.get(`${Server_URL}/user/${id}`).then((response) => {
    const data = response.data;
    return data;
  });
};

const newGroup = async (groupData) => {
  return axios
    .post(`${Server_URL}/group/new`, groupData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      const { id } = response.data;
      return id;
    });
};

const sendEmail = async (id) => {
  return axios.get(`${Server_URL}/group/code/${id}`).then((response) => {
    const { message } = response.data;
    return message;
  });
};

const verifyRole = async (code) => {
  return axios.get(`${Server_URL}/group/verify/${code}`).then((response) => {
    const data = response.data;
    return data;
  });
};

export { newIndividual, getIndividualById, newGroup, sendEmail, verifyRole };
