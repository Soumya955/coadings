import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { Reducer as UserReducer } from "./TaskReducer/Reducer";

const RootReducers = combineReducers({ UserReducer });

const store = legacy_createStore(RootReducers);

export default store;
