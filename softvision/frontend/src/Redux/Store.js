import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { Reducer as UserReducer } from "./UsersReducer/Reducer";

const RootReducers = combineReducers({ UserReducer });

const store = legacy_createStore(RootReducers);

export default store;
