import * as types from "./ActionTypes";

let initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

const Reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  console.log(oldState,type,payload,'redux')
  switch (action.type) {
    case types.TASK_GET_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
      };
    case types.TASK_GET_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case types.TASK_GET_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        data: [],
      };

    case types.TASK_ADDED_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case types.TASK_UPDATE_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case types.TASK_DELETE_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    default:
      return oldState;
  }
};
export { Reducer };
