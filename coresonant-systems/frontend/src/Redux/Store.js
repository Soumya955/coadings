import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { Reducer as TaskReducer } from "./TaskReducer/Reducer";

const RootReducers = combineReducers({ TaskReducer });

const store = legacy_createStore(RootReducers);

export default store;
