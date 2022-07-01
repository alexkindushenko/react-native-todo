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

export const updateTodoItem = async ({ id, data }) => {
  try {
    return await axios.put(`${_apiBase}/${id}`, data);
  } catch (error) {
    return error;
  }
};

export const deleteTodoItem = async ({ id, selectedGpoupId }) => {
  try {
    return await axios.delete(`${_apiBase}/${id}`, { data: { selectedGpoupId } });
  } catch (error) {
    return error;
  }
};

export const addNewGroup = async (data) => {
  try {
    return await axios.post(`${_apiBase}/group`, data);
  } catch (error) {
    console.log(error);
    return error;
  }
};
