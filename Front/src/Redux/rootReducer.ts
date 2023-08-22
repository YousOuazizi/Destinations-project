import { combineReducers } from "redux";
import { destinationsReducer } from "./destinationsSlice";

const rootReducer = combineReducers({
  destinations: destinationsReducer,
  // ... autres reducers
});

export default rootReducer;
