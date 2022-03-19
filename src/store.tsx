import { createStore, compose } from "redux";
// import rootRed from "./FuncCompo/reduxre/reducrs/inde";
import rootReduc from "./FuncCompo/reduxtodo/reducr/Sarareducall";

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReduc, composeEnhancers())

export default store;