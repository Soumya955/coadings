import * as types from "./ActionTypes";
import orderData from "../../Data/data.json";

let initialState = {
  data: orderData,
  isLoading: false,
  isError: false,
};

const Reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case types.ORDERDATA_GET_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
      };
    case types.ORDERDATA_GET_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case types.ORDERDATA_UPDATE_REQUEST:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case types.ORDERDATA_GET_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        data: [],
      };
    default:
      return oldState;
  }
};
export { Reducer };
