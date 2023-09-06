import axios from "axios";

const Server_URL = "https://what-colors-be.cyclic.app/v1";

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
