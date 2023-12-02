
import * as types from "./ActionTypes";

const ORDERDATAGETRequest = () =>{
    return {
        type: types.ORDERDATA_GET_REQUEST
    }
}

const ORDERDATAGETSuccess = (payload) =>{
    return {
        type: types.ORDERDATA_GET_SUCCESS,
        payload
    }
}

const ORDERDATAGETFailure = () =>{
    return {
        type: types.ORDERDATA_GET_FAILURE

    }
}

const ORDERDATAUPDATERequest = (payload) =>{
    return {
        type: types.ORDERDATA_UPDATE_REQUEST,
        payload
    }
}
const ORDERDATAADDSuccess = (payload) =>{
    return {
        type: types.ORDERDATA_ADD_SUCCESS,
        payload
    }
}

export {ORDERDATAGETRequest,ORDERDATAGETSuccess,ORDERDATAGETFailure,ORDERDATAUPDATERequest,ORDERDATAADDSuccess}