import * as types from "./ActionTypes";

const taskGETRequest = () => {
  return {
    type: types.TASK_GET_REQUEST,
  };
};

const taskGETSuccess = (payload) => {
  return {
    type: types.TASK_GET_SUCCESS,
    payload,
  };
};

const taskGETFailure = () => {
  return {
    type: types.TASK_GET_FAILURE,
  };
};

const taskADDEDSuccess = (payload) => {
  return {
    type: types.TASK_ADDED_SUCCESS,
    payload,
  };
};

const taskUPDATESuccess = (payload) => {
  return {
    type: types.TASK_UPDATE_SUCCESS,
    payload,
  };
};

const taskDELETESuccess = (payload) => {
  return {
    type: types.TASK_DELETE_SUCCESS,
    payload,
  };
};

export {
  taskGETRequest,
  taskGETSuccess,
  taskGETFailure,
  taskADDEDSuccess,
  taskUPDATESuccess,
  taskDELETESuccess,
};
