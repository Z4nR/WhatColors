import axios from "axios";

const Server_URL = import.meta.env.BE_URL;

const newIndividual = async (userData) => {
  try {
    const response = await axios.post(`${Server_URL}/user/new`, userData);
    const { data, status } = response;

    if (status !== 201) {
      return { error: true, data: data.message };
    }

    return { error: false, data: data.id };
  } catch (errors) {
    console.error(errors);
  }
};

const getIndividualById = async (id) => {
  try {
    const response = await axios.get(`${Server_URL}/user/`, { params: id });
    const { data, status } = response;

    if (status !== 202) {
      return { error: true, data: data.message };
    }

    return { error: false, data: data.data };
  } catch (errors) {
    console.error(errors);
  }
};

export { newIndividual, getIndividualById };
