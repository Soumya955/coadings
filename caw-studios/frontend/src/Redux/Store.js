import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { Reducer as OrderDataReducer } from "./OrderDataReducer/Reducer";

const RootReducers = combineReducers({ OrderDataReducer });

const store = legacy_createStore(RootReducers);

export default store;
