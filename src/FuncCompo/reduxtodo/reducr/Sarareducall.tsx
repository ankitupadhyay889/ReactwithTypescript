//! Ye main reducer means hum isme sare reducers ko call krte hai mtlb ki action ka functionaliti jha likhte hai.
import toDo from "./toDo";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    toDo
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>