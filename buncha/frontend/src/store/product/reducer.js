import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  SET_LOGS,
  SET_PRODUCT_CATEGORY,
  SET_PRODUCT_MENU_CLICKED,
} from "./actionType";

const initState = {
  cartItems: [],
  currentCategory: 1,
  isProductMenuClicked: false,
  logs: [],
};

export const productReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCT_CATEGORY:
      return {
        ...store,
        currentCategory: payload,
      };
    case SET_PRODUCT_MENU_CLICKED:
      return {
        ...store,
        isProductMenuClicked: payload,
      };
    case ADD_ITEM_TO_CART:
      return {
        ...store,
        cartItems: [...store.cartItems, payload],
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...store,
        cartItems: removeCartItem(store.cartItems, payload),
      };
    case SET_LOGS:
      return {
        ...store,
        logs: [...store.logs, payload],
      };
    default:
      return store;
  }
};

function removeCartItem(cartItems, payload) {
  const updatedItems = cartItems.filter((itemId) => itemId !== payload);
  return updatedItems;
}
