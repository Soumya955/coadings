import axios from "axios";
import { accessData, saveData } from "./Utils/appLocalStorage";

export const getdata=()=>{
   return axios.get('https://grumpy-pumps-fish.cyclic.cloud/api')
  .then((res) => {
    let data2=accessData("newsData");
    let data=res.data.map((item,index)=>{return{...item,isFavorite:data2[index].isFavorite?true:false}})
    saveData("newsData",data)
    return data;
  })
  .catch((err) => {
    return err;
  });
}