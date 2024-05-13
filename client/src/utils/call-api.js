import axios from 'axios';

const Server_URL = import.meta.env.VITE_BACKEND_URL;

const newIndividual = async (userData) => {
  return axios
    .post(`${Server_URL}/user/new`, userData, {
      timeout: 90000,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      const { id } = response.data;
      return id;
    })
    .catch((error) => {
      if (
        error.code === 'ECONNABORTED' &&
        error.message.indexOf('timeout') !== -1
      ) {
        const customError = new Error('Request Timeout');
        customError.response = {
          data: { message: 'Proses Pengiriman Data Terlalu Lama', status: 408 },
        };
        throw customError;
      } else {
        return error;
      }
    });
};

const getIndividualById = async (id) => {
  return axios
    .get(`${Server_URL}/user/${id}/detail`, { timeout: 90000 })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      if (
        error.code === 'ECONNABORTED' &&
        error.message.indexOf('timeout') !== -1
      ) {
        const customError = new Error('Request Timeout');
        customError.response = {
          data: { message: 'Proses Penarikan Data Terlalu Lama', status: 408 },
        };
        throw customError;
      } else {
        const errorData = error.response;
        return errorData;
      }
    });
};

const newGroup = async (groupData) => {
  return axios
    .post(`${Server_URL}/group/new`, groupData, {
      headers: {
        'Content-Type': 'application/json',
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
  return axios
    .get(`${Server_URL}/group/${id}/data`, { timeout: 90000 })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      if (
        error.code === 'ECONNABORTED' &&
        error.message.indexOf('timeout') !== -1
      ) {
        const customError = new Error('Request Timeout');
        customError.response = {
          data: { message: 'Proses Penarikan Data Terlalu Lama', status: 408 },
        };
        throw customError;
      } else {
        const errorData = error.response;
        return errorData;
      }
    });
};

const deleteGroupById = async (id) => {
  return axios.delete(`${Server_URL}/group/${id}/delete`).then((response) => {
    const data = response.data;
    return data;
  });
};

const getClientData = async (id) => {
  return axios
    .get(`${Server_URL}/group/${id}/clients`, { timeout: 90000 })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      if (
        error.code === 'ECONNABORTED' &&
        error.message.indexOf('timeout') !== -1
      ) {
        const customError = new Error('Request Timeout');
        customError.response = {
          data: { message: 'Proses Penarikan Data Terlalu Lama', status: 408 },
        };
        throw customError;
      } else {
        const errorData = error.response;
        return errorData;
      }
    });
};

const newClient = async ({ id, clientData }) => {
  return axios
    .post(`${Server_URL}/client/${id}/new`, clientData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      const { id } = response.data;
      return id;
    });
};

const getClientById = async (id) => {
  return axios
    .get(`${Server_URL}/client/${id}/data`, { timeout: 90000 })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      if (
        error.code === 'ECONNABORTED' &&
        error.message.indexOf('timeout') !== -1
      ) {
        const customError = new Error('Request Timeout');
        customError.response = {
          data: { message: 'Proses Penarikan Data Terlalu Lama', status: 408 },
        };
        throw customError;
      } else {
        const errorData = error.response;
        return errorData;
      }
    });
};

const getTestSearch = async (name) => {
  return axios.post(`${Server_URL}/search?name=${name}`).then((response) => {
    const data = response.data;
    return data;
  });
};

const getArticle = async () => {
  return axios
    .get(`${Server_URL}/article/data`, { timeout: 90000 })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      if (
        error.code === 'ECONNABORTED' &&
        error.message.indexOf('timeout') !== -1
      ) {
        const customError = new Error('Request Timeout');
        customError.response = {
          data: { message: 'Proses Penarikan Data Terlalu Lama', status: 408 },
        };
        throw customError;
      } else {
        const errorData = error.response;
        return errorData;
      }
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
  getTestSearch,
  getArticle,
};
