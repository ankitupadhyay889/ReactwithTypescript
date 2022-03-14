//! Ye main reducer means hum isme sare reducers ko call krte hai.

import changeThe from "./upDown";

import { combineReducers } from "redux";

const rootRed = combineReducers({
    changeThe
});

export default rootRed;