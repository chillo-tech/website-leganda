import { SearchParams } from "../types";
import { axiosInstance } from "./axios-config";

const getAds = async (params: SearchParams) => {
  const response = await axiosInstance.post(
    'ad/search', 
    params,
  );
  const data = await response.data;
  return data;
}
export {getAds}