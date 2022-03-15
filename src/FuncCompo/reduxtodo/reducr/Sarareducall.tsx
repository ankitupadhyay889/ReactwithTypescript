//! Ye main reducer means hum isme sare reducers ko call krte hai.

import toDo from "./toDo";
import { combineReducers } from "redux";

const rootReduc = combineReducers({
    toDo
});

export default rootReduc;