import { FORM, FREQUENCY, INTERVAL, UNIT, WEEK_DAYS } from "../../constants";

const initState = {
    newMedicine: {
        name: '', 
        form: FORM[0], 
        quantity: '',
        strength: '', 
        unit: UNIT[0], 
        packAmount: '', 
	    frequency: FREQUENCY[0],
        interval: INTERVAL[0], 
        time: '00:00',
        weekDay: WEEK_DAYS[0],
        note: '',
    },
    listMedicines: [],
    isLoadingListMedicines: false,
}

const MedFormReducer = (state = initState, action) => {

    switch (action.type) {

        case "CHANGE_NEW_MEDICINE_NAME":
			return {
				...state,
				newMedicine: {
					...state.newMedicine,
					name: action.name,
				},
			};

        case "CHANGE_NEW_MEDICINE_FORM":
            return {
                ...state,
                newMedicine: {
                    ...state.newMedicine,
                    form: action.form,
                },
            };

        case "CHANGE_NEW_MEDICINE_QUANTITY":
            return {
                ...state,
                newMedicine: {
                    ...state.newMedicine,
                    quantity: action.quantity,
                },
            };

        case "CHANGE_NEW_MEDICINE_STRENGTH":
            return {
                ...state,
                newMedicine: {
                    ...state.newMedicine,
                    strength: action.strength,
                },
            };

        case "CHANGE_NEW_MEDICINE_UNIT":
            return {
                ...state,
                newMedicine: {
                    ...state.newMedicine,
                    unit: action.unit,
                },
            };

        case "CHANGE_NEW_MEDICINE_PACK_AMOUNT":
            return {
                ...state,
                newMedicine: {
                    ...state.newMedicine,
                    packAmount: action.packAmount,
                },
            };

        case "CHANGE_NEW_MEDICINE_FREQUENCY":
            return {
                ...state,
                newMedicine: {
                    ...state.newMedicine,
                    frequency: action.frequency,
                },
            };

        case "CHANGE_NEW_MEDICINE_INTERVAL":
            return {
                ...state,
                newMedicine: {
                    ...state.newMedicine,
                    interval: action.interval,
                },
            }

        case "CHANGE_NEW_MEDICINE_TIME":
            return {
                ...state,
                newMedicine: {
                    ...state.newMedicine,
                    time: action.time,
                },
            }

        case "CHANGE_NEW_MEDICINE_WEEK_DAY":
            return {
                ...state,
                newMedicine: {
                    ...state.newMedicine,
                    weekDay: action.weekDay,
                },
            }

        case "CHANGE_NEW_MEDICINE_NOTE":
            return {
                ...state,
                newMedicine: {
                    ...state.newMedicine,
                    note: action.note,
                },
            }

        case "SET_IS_LOADING_LIST_MEDICINES":
            return {
                ...state,
				isLoadingListMedicines: action.isLoadingListMedicines,
            }

        case "LOADED_LIST_MEDICINES": 
            return {
                ...state,
                listMedicines: action.listMedicines,
                isLoadingListMedicines: false,
            }

        case "EDIT_EXISTING_MEDICINE": 
            const medicineToEdit = state.listMedicines[action.index]
            return {
                ...state,
                newMedicine: {...medicineToEdit},
            }

        case "CLEAR_DIALOG_CONTENT":
            return {
                ...state,
                newMedicine: {...initState.newMedicine},
            }

        default:
			return state;
    }
}

export default MedFormReducer;