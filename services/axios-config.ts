import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.BACKOFFICE_URL}/api/v1`,
  headers: {
  }
})

export {axiosInstance}