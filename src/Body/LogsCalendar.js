import moment from "moment";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetListLogs } from "../Actions/LogAction";
import { LogDateStyled, LogMedicineStyled } from "../styles/MuiStyles";
import LogBox from "./LogBox";

const LogsCalendar = () => {

	let todayDate = moment().format("ddd, Do MMM");

	const listMedicines = useSelector((state) => state?.med?.listMedicines);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(GetListLogs())
	}, [])

	return (
		<div className="d-flex flex-column align-items-center">
			<LogDateStyled className="m-2">
				Today: {todayDate}
			</LogDateStyled>
			{ listMedicines.map((el, index) => (
				<LogMedicineStyled key={el.id}>
					<LogBox el={el} />
				</LogMedicineStyled>
			))}
		</div>

	);
};

export default LogsCalendar;
