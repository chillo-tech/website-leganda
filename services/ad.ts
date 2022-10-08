import { SearchParams } from "../types";
import { axiosInstance } from "./axios-config";

const getAds = (params: SearchParams) => {
  /*
  const response = await axiosInstance.post(
    'ad/search', 
    JSON.stringify(params)
  );
  const data = await response.data;
  return data;
  */
 return axiosInstance.post('ad/search', JSON.stringify({}), 
 {
   headers: {
     'Content-Type': 'application/json',

    "Access-Control-Allow-Origin": "*"
   }
 });
}
export {getAds}