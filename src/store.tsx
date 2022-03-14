import { createStore, compose } from "redux";
import rootRed from "./FuncCompo/reduxre/reducrs/inde";

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootRed, composeEnhancers())

export default store;