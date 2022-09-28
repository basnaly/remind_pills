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

export const ChangeNewMedicineAmount = (amount) => {
	return {
		type: "CHANGE_NEW_MEDICINE_AMOUNT",
		amount,
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

		const pillData = getState()?.med?.newMedicine;

		try {
			const result = await axios.post(
				"/pill/create",
				{ pill: pillData }, // 'trip:' from backend: ...req.body.trip,
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
