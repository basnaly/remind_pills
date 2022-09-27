import axios from "axios";

export const AddNewPill = (name, form, strength, unit, amount, interval, note) => {

	return async (dispatch, getState) => {

		const pillData = {
			name,
			form,
			strength,
            unit,
            amount,
            interval,
            note,
		};

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
