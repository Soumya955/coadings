import axios from "axios";
import { saveData } from "./Utils/appLocalStorage";

export const getdata=()=>{
   return axios.get('https://grumpy-pumps-fish.cyclic.cloud/api')
  .then((res) => {
    let data=res.data.map(item=>{return{...item,isFavorite:false}})
    saveData("newsData",data)
    return data;
  })
  .catch((err) => {
    return err;
  });
}