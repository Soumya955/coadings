import axios from "axios";

export const postData=(userInput)=>{
 return axios.post(`https://gpt-api.richexplorer.com/api/general`,{
    usecase: "GPT_MEDITATION_CREATOR",
    userInput: userInput,
  })
}