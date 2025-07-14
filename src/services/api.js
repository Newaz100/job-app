import axios from "axios";

const BASE = "http://api.mnimedu.com/api";

export const loginUser = (data) => axios.post(`${BASE}/auth/login/`, data);
export const registerUser = (data) => axios.post(`${BASE}/auth/registration/`, data);
export const getJobList = () => axios.get(`https://api.mnimedu.com/api/browse/pro-jobs/`);
