


export const saveLocalData=(name,data)=>{
    localStorage.setItem(name,JSON.stringify(data))
}
export const getLocalData=(name)=>{
    return JSON.parse(localStorage.getItem(name))
}

saveLocalData("seats",Array(80).fill(false))