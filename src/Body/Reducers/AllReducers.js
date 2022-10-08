import { combineReducers } from "redux";
import LogReducer from "./LogReducer";
import MedFormReducer from "./MedFormReducer";

const AllReducers = combineReducers({
    med: MedFormReducer,
    log: LogReducer,
});

export default AllReducers;