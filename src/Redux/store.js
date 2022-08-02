import { legacy_createStore } from "redux";
import { reducer as TodoReducer } from "./reducer";

export const Store = legacy_createStore(TodoReducer);
