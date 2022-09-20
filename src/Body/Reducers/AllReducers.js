import { combineReducers } from "redux";
import MedFormReducer from "./MedFormReducer";

const AllReducers = combineReducers({
    med: MedFormReducer,
});

export default AllReducers;