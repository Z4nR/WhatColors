import axios from "axios";

const Server_URL = import.meta.env.VITE_BASE_URL;

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

export { newIndividual, getIndividualById };
