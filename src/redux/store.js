import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { productReducer } from "./product.reducer";

const allReducer = combineReducers({
  product: productReducer,
});

export const store = legacy_createStore(allReducer, applyMiddleware(thunk));
