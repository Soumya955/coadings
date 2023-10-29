
import * as types from "./ActionTypes";

const userGETRequest = () =>{
    return {
        type: types.USER_GET_REQUEST
    }
}

const userGETSuccess = (payload) =>{
    return {
        type: types.USER_GET_SUCCESS,
        payload
    }
}

const userGETFailure = () =>{
    return {
        type: types.USER_GET_FAILURE

    }
}
export {userGETRequest,userGETSuccess,userGETFailure}