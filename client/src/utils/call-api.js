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
      return { err: false, d: id };
    })
    .catch((error) => {
      const { status, data } = error.response;
      if (status !== 201) return { err: true, d: data.message };
    });
};

const getIndividualById = async (id) => {
  return axios
    .get(`${Server_URL}/user/${id}`)
    .then((response) => {
      const data = response.data;
      return { err: false, d: data };
    })
    .catch((error) => {
      const { status, data } = error.response;
      if (status !== 201) return { err: true, d: data.message };
    });
};

export { newIndividual, getIndividualById };
