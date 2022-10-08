import axios from "axios";

export const ChangeNewMedicineName = (name) => {
	return {
		type: "CHANGE_NEW_MEDICINE_NAME",
		name,
	}
}

export const ChangeNewMedicineForm = (form) => {
	return {
		type: "CHANGE_NEW_MEDICINE_FORM",
		form,
	}
}

export const ChangeNewMedicineQuantity = (quantity) => {
	return {
		type: "CHANGE_NEW_MEDICINE_QUANTITY",
		quantity,
	}
}

export const ChangeNewMedicineStrength = (strength) => {
	return {
		type: "CHANGE_NEW_MEDICINE_STRENGTH",
		strength,
	}
}

export const ChangeNewMedicineUnit = (unit) => {
	return {
		type: "CHANGE_NEW_MEDICINE_UNIT",
		unit,
	}
}

export const ChangeNewMedicineAmount = (packAmount) => {
	return {
		type: "CHANGE_NEW_MEDICINE_PACK_AMOUNT",
		packAmount,
	}
}

export const ChangeNewMedicineFrequency = (frequency) => {
	return {
		type: "CHANGE_NEW_MEDICINE_FREQUENCY",
		frequency,
	}
}

export const ChangeNewMedicineInterval = (interval) => {
	return {
		type: "CHANGE_NEW_MEDICINE_INTERVAL",
		interval,
	}
}

export const ChangeNewMedicineTime = (time) => {
	return {
		type: "CHANGE_NEW_MEDICINE_TIME",
		time,
	}
}

export const ChangeNewMedicineWeekDay = (weekDay) => {
	return {
		type: "CHANGE_NEW_MEDICINE_WEEK_DAY",
		weekDay,
	}
}

export const ChangeNewMedicineNote = (note) => {
	return {
		type: "CHANGE_NEW_MEDICINE_NOTE",
		note,
	}
}

export const AddNewPill = () => {

	return async (dispatch, getState) => {

		const medicineData = getState()?.med?.newMedicine;

		try {
			const result = await axios.post(
				"/medicine/create",
				{ medicine: medicineData }, // 'trip:' from backend: ...req.body.trip,
				// config() // header with access token
			);
			console.log(result);
            // dispatch(SetAlertMessage(result?.data?.message, 'success'));
			// dispatch(GetListTrips()); // get updated list trips

		} catch (error) {
			console.log(error);
			// dispatch(CheckTokenError(error))
			// dispatch(SetAlertMessage(error?.response?.data?.message));
		}
	};
};

export const GetListMedicines = () => {

	return async (dispatch, getState) => {

		dispatch({
			type: "SET_IS_LOADING_LIST_MEDICINES",
			isLoadingListMedicines: true,
		});

		try {
			const result = await axios.get("/medicine/list-medicines")
			let listMedicines = result?.data?.listMedicines;

			dispatch({
				type: "LOADED_LIST_MEDICINES",
				listMedicines
			});
		} catch (error) {
			console.log(error)
		}
	}
}

export const EditExistingMedicine = (index) => {
	return {
		type: "EDIT_EXISTING_MEDICINE",
		index,
	}
}

export const ClearDialogContent = () => {
	return {
		type: "CLEAR_DIALOG_CONTENT",
	}
}

export const SaveEditedMedicine = (medicineId) => {

	return async (dispatch, getState) => {

		const editedMedicineData = getState()?.med?.newMedicine;

		try {
			const result = await axios.post(
				`/medicine/edit?medicineId=${medicineId}`,
				{ medicine: editedMedicineData }, // 'trip:' from backend: ...req.body.trip,
				// config() // header with access token
			);
			console.log(result);
            // dispatch(SetAlertMessage(result?.data?.message, 'success'));
			dispatch(GetListMedicines()); // get updated list trips

		} catch (error) {
			console.log(error);
			// dispatch(CheckTokenError(error))
			// dispatch(SetAlertMessage(error?.response?.data?.message));
		}
	};
}