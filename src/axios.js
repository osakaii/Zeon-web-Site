import axios from "axios";
import { API } from "./constants";

export const getAllNews = async () => {
  try {
    const response = await axios.get(`${API}/news/`);
    return await response.data;
  } catch (e) {
    console.error("getAllNews", e);
  }
};

export const getNewsById = async (id) => {
  try {
    const response = await axios.get(`${API}/news/${id}/`);
    return await response.data;
  } catch (e) {
    console.error("getNewsById", e);
  }
};

export const getDevelopers = async () => {
  try {
    const response = await axios.get(`${API}/career/`);
    return await response.data;
  } catch (e) {
    console.error("getDevelopers", e);
  }
};

export const getDeveloperById = async (id) => {
  try {
    const response = await axios.get(`${API}/career/${id}`);
    return await response.data;
  } catch (e) {
    console.error("getDeveloperById", e);
  }
};

export const sendCareerResponse = async (body) => {
  try {
    const response = await axios.post(`${API}/loading/`, body, {
      headers: {
        // "Access-Control-Allow-Headers":"*",
        "Content-Type": "multipart/form-data, application/json",
      },
    });
    console.log(response);
  } catch (e) {
    console.error("getDeveloperById", e);
  }
};

export const sendContacts = async (body) => {
  try {
    const response = await axios.post(`${API}/loading/`, body);
    console.log(response);
  } catch (e) {
    console.error("getDeveloperById", e);
  }
};
