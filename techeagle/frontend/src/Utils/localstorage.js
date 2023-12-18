

export const accessLocalStorageData=(name)=>{
return JSON.parse(localStorage.getItem(name));
}

export const saveLocalStorageData=(name,value)=>{
return localStorage.setItem(name,JSON.stringify(value));
}