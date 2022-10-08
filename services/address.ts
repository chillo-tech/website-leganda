import { axiosInstance } from "./axios-config";

const getAddress= () => axiosInstance.get('city').then(response => response.data);

export {getAddress}