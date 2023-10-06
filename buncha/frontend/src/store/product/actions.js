import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  SET_LOGS,
  SET_PRODUCT_CATEGORY,
  SET_PRODUCT_MENU_CLICKED,
} from "./actionType";

export const setProductCategory = (payload) => {
  return {
    type: SET_PRODUCT_CATEGORY,
    payload,
  };
};

export const setProductMenuClicked = (payload) => {
  return {
    type: SET_PRODUCT_MENU_CLICKED,
    payload,
  };
};

export const addItemToCart = (payload) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload,
  };
};

export const removeItemFromCart = (payload) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload,
  };
};

export const setLogs = (payload) => {
  return {
    type: SET_LOGS,
    payload,
  };
};
