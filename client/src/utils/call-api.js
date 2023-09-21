import axios from "axios";

const Server_URL = import.meta.env.VITE_SERVER_URL;

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
  return axios.post(`${Server_URL}/group/${id}/code`).then((response) => {
    const { message } = response.data;
    return message;
  });
};

const verifyRole = async (code) => {
  return axios.post(`${Server_URL}/group/${code}/verify`).then((response) => {
    const data = response.data;
    return data;
  });
};

const getGroupById = async (id) => {
  return axios.get(`${Server_URL}/group/${id}/data`).then((response) => {
    const data = response.data;
    return data;
  });
};

const deleteGroupById = async (id) => {
  return axios.delete(`${Server_URL}/group/${id}/delete`).then((response) => {
    const data = response.data;
    return data;
  });
};

const getClientData = async (id) => {
  return axios.get(`${Server_URL}/group/${id}/clients`).then((response) => {
    const data = response.data;
    return data;
  });
};

const newClient = async ({ id, clientData }) => {
  return axios
    .post(`${Server_URL}/client/${id}/new`, clientData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      const { id } = response.data;
      return id;
    });
};

const getClientById = async (id) => {
  return axios.get(`${Server_URL}/client/${id}/data`).then((response) => {
    const data = response.data;
    return data;
  });
};

const deleteClientByGroup = async (id) => {
  return axios
    .post(`${Server_URL}/group/${id}/delete/client`)
    .then((response) => {
      const data = response.data;
      return data;
    });
};

const getTestSearch = async (name) => {
  return axios.post(`${Server_URL}/search?name=${name}`).then((response) => {
    const data = response.data;
    return data;
  });
};

const getArticle = async () => {
  return axios.get(`${Server_URL}/article/data`).then((response) => {
    const data = response.data;
    return data;
  });
};

export {
  newIndividual,
  getIndividualById,
  newGroup,
  sendEmail,
  verifyRole,
  getGroupById,
  deleteGroupById,
  getClientData,
  newClient,
  getClientById,
  deleteClientByGroup,
  getTestSearch,
  getArticle,
};
