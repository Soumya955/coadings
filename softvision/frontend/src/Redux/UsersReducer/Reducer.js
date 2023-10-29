import * as types from "./ActionTypes";

let initialState = {
    data:[],
    isLoading:false,
    isError:false,
}

const Reducer = (oldState = initialState,action) =>{  
    const {type,payload} = action;  
    switch (action.type){
        case types.USER_GET_REQUEST:
            return{
                ...oldState,
                isLoading:true,
                isError:false,
            }
        case types.USER_GET_SUCCESS:
            return{
                ...oldState,
                isLoading:false,
                isError:false,
                data:action.payload,
                
            }
        case types.USER_GET_FAILURE:
            return{
                ...oldState,
                isLoading:false,
                isError:true,
                data:[]
            }
        default :
        return oldState
    }
}
export {Reducer}