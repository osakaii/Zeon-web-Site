import axios from "axios";
import { API, URL } from "../data/constants";


export const getAllNews = async () => {
  try {
    const response = await axios.get(`${API}/new/`);
    return await response.data;
  } catch (e) {
    console.error("getAllNews", e);
  }
};

export const getNewsById = async (id) => {
  try {
    const response = await axios.get(`${API}/new/${id}/`);
    return await response.data;
  } catch (e) {
    console.error("getNewsById", e);
  }
};

export const getNewNews = async () => {
  try {
    const response = await axios.get(`${API}/new_news/`);
    return await response.data;
  } catch (e) {
    console.error("getNewNews", e);
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
    console.log(body)
    const response = await axios.post(`${API}/loading/`, body , {
      headers: {
        "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",
      },
    });
    console.log(response);
  } catch (e) {
    console.error("getDeveloperById", e);
  }
};

export const sendFeedback = async (body) =>{
  try {
    const response = await axios.post(`${API}/feedback/create/`, body, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(response);
    return response.status
  } catch (e) {
    console.error("sendFeedback", e);
  }
}

export const getFilteredCareer = async (name, remote, office, relocation, direction = "", country = "", search) =>{
  try {
    const response = await axios.get(`${API}/career_filter?name=${name}&remote=${remote}&office=${office}&relocation=${relocation}&direction=${direction}`);
    console.log(response)
    return response;
  } catch (e) {
    console.error("getFilteredCareer", e);
  }
}

export const getCountryList = async (id) => {
  try {
    const response = await axios.get(`${API}/country/list/`);
    console.log(response)
    return await response.data;
  } catch (e) {
    console.error("getCountryList", e);
  }
};

export const getDirectionList = async (id) => {
  try {
    const response = await axios.get(`${API}/direction/list/`);
    console.log(response)
    return await response.data;
  } catch (e) {
    console.error("getDirectionList", e);
  }
};

export const register = async (body) => {
  try {
    const response = await axios.post(`${API}/auth/register/`, body);
    console.log(response)
    return response;
  } catch (e) {
    console.error("register", e);
  }
};

export const login = async (body) => {
  try {
    const response = await axios.post(`${API}/auth/login/`, body);
    console.log(response)
    return response;
  } catch (e) {
    console.error("login", e);
  }
};


export const verifyEmail = async (body) => {
  try {
    const response = await axios.post(`${API}/auth/users/email/verify/`, body);
    console.log(response)
    return response;
  } catch (e) {
    console.error("verifyEmail", e);
  }
};

export const getQuiz = async (id) => {
  try {
    const response = await axios.get(`${URL}/quiz/${id}/`);
    console.log(response)
    return response;
  } catch (e) {
    console.error("getQuiz", e);
  }
};

export const getAllQuiz = async () => {
  try {
    const response = await axios.get(`${URL}/quiz/`);
    console.log(response)
    return response;
  } catch (e) {
    console.error("getQuiz", e);
  }
};


export const startQuiz = async (body) => {
  try {
    const response = await axios.get(`${URL}/response/`, body, {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    });
    console.log(response)
    return response;
  } catch (e) {
    console.error("getQuiz", e);
  }
};
