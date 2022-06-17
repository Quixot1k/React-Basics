/* expose a only store */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./counterReducer";

// const store = createStore(calculation_reducer);
// export default store;

export default createStore(counterReducer, applyMiddleware(thunk));
