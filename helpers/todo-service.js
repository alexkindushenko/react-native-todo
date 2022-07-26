import axios from "axios";

const _apiBase = "http:192.168.1.100:8888";

export const getTodoList = async () => {
  try {
    const res = await axios.patch(_apiBase);
    return res;
  } catch (error) {
    return error;
  }
};

export const addTodoItem = async (data) => {
  try {
    return await axios.post(`${_apiBase}`, data);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const updateTodoItem = async ({ _id, data }) => {
  try {
    return await axios.put(`${_apiBase}/${_id}`, data);
  } catch (error) {
    return error;
  }
};

export const deleteTodoItem = async ({ _id, selectedGpoupId }) => {
  try {
    return await axios.delete(`${_apiBase}/${_id}`, { data: { selectedGpoupId } });
  } catch (error) {
    return error;
  }
};

export const addTodoGroup = async (data) => {
  try {
    return await axios.post(`${_apiBase}/group`, data);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteTodoGroup = async (id) => {
  try {
    return await axios.delete(`${_apiBase}/group/${id}`);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const sendLoginForm = async (data) => {
  try {
    return await axios.post(`${_apiBase}/auth/login`, data);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const sendRegisterForm = async (data) => {
  try {
    return await axios.post(`${_apiBase}/auth/register`, data);
  } catch (error) {
    return error;
  }
};
