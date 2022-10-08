import axios from "axios";
import moment from "moment";

export const AddLog = (medicineId, time, quantity) => {

	return async (dispatch, getState) => {

		const logData = {
			medicineId,
			date: moment().format("ddd, Do MMM"),
			time,
            quantity,
		};

		try {
			const result = await axios.post(
				"/logs/create",
				{ log: logData }, // 'trip:' from backend: ...req.body.trip,
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

export const GetListLogs = () => {

	return async (dispatch, getState) => {

		dispatch({
			type: "SET_IS_LOADING_LIST_LOGS",
			isLoadingListLogs: true,
		});

		try {
			const result = await axios.get("/logs/list-logs")
			let listLogs = result?.data?.listLogs;

			dispatch({
				type: "LOADED_LIST_LOGS",
				listLogs
			});
		} catch (error) {
			console.log(error)
		}
	}
}

export const SaveEditedLog = (logId, medicineId, time, quantity) => {

	return async (dispatch, getState) => {

		const logData = {
			medicineId,
			date: moment().format("ddd, Do MMM"),
			time,
            quantity,
		};

		try {
			const result = await axios.post(
				`/logs/edit?logId=${logId}`,
				{ log: logData }, // 'trip:' from backend: ...req.body.trip,
				// config() // header with access token
			);
			console.log(result);
            // dispatch(SetAlertMessage(result?.data?.message, 'success'));
			dispatch(GetListLogs()); // get updated list trips

		} catch (error) {
			console.log(error);
			// dispatch(CheckTokenError(error))
			// dispatch(SetAlertMessage(error?.response?.data?.message));
		}
	};
}