import axios from 'axios'
export const getDefaultData=(page)=>{

   const apiUrl = 'https://api.spacexdata.com/v3/capsules';

   return axios.get(apiUrl, {
      params: {
        limit: 5,
        offset: (page - 1) * 4
      },
    })
  .catch ((err)=>{
    console.error('Error fetching SpaceX data:', err);
    throw err;})
  
}



export const getData=(page,status="active",originalLaunch="",type="dragon")=>{

    const apiUrl = 'https://api.spacexdata.com/v3/capsules';
 
    return axios.get(apiUrl, {
       params: {
         limit: 10,
         offset: (page - 1) * 10, 
         status: status, 
         original_launch: originalLaunch,
         type: type
       },
     })
   .catch ((err)=>{
     console.error('Error fetching SpaceX data:', err);
     throw err;})
   
 }
 
 
 
 