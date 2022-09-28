import { FORM, FREQUENCY, INTERVAL, UNIT, WEEK_DAYS } from "../../constants";

const initState = {
    newMedicine: {
        name: '', 
        form: FORM[0], 
        strength: '', 
        unit: UNIT[0], 
        amount: '', 
	    frequency: FREQUENCY[0],
        interval: INTERVAL[0], 
        weekDay: WEEK_DAYS[0],
        note: '',
    },
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

        case "CHANGE_NEW_MEDICINE_AMOUNT":
            return {
                ...state,
                newMedicine: {
                    ...state.newMedicine,
                    amount: action.amount,
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

        default:
			return state;
    }
}

export default MedFormReducer;