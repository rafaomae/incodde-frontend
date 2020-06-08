import { createStore } from "redux";
import reducer from "./storeReducer";

const store = createStore(reducer);

export { store };
