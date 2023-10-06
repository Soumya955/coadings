import { createStore } from "redux";
import { productReducer } from "./product/reducer";

const store = createStore(productReducer);
export { store };
