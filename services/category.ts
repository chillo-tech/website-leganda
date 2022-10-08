import { axiosInstance } from "./axios-config";

const getCategory= () => axiosInstance.get('category').then(response => response.data);

export {getCategory}