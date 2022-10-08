import axios from "axios";
import moment from "moment";

const initState = {
    listLogs: [],
    date: moment().format("ddd, Do MMM"),
    isLoadingListLogs: false,
}
    
const LogReducer = (state = initState, action) => {

    switch (action.type) {
        
        case "SET_IS_LOADING_LIST_LOGS":
            return {
                ...state,
                isLoadingListLogs: action.isLoadingListLogs,
            }
    
        case "LOADED_LIST_LOGS": 
            return {
                ...state,
                listLogs: action.listLogs,
                isLoadingListLogs: false,
            }
        
        default:
            return state
    }
}

export default LogReducer;