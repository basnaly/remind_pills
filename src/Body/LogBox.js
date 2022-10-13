import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { CheckBoxBlankStyled, CheckBoxStyled, NameMedStyled } from "../styles/MuiStyles";
import AddEditLogDialog from "./AddEditLogDialog";
import LogEntrey from "./LogEntrey";

const LogBox = ({ el }) => {

	const listLogs = useSelector((state) => state?.log?.listLogs);

	let todayDate = moment().format("ddd, Do MMM");

	const logCalendarDate = useSelector((state) => state?.log?.date);

	const logData = listLogs.filter(
		(log) => log.medicineId === el.id && log.date === logCalendarDate
	); //[{}, {}]

	return (
		<div className="d-flex flex-column align-items-center my-2">

			<div className="d-flex align-items-center my-2">
				{logData.length > 0 ? (
					<CheckBoxStyled className="me-3"></CheckBoxStyled>
				) : (
					<CheckBoxBlankStyled className="me-3"></CheckBoxBlankStyled>
				)}

				<NameMedStyled className="me-3">{el.name}</NameMedStyled>

				{ logCalendarDate === todayDate ? <AddEditLogDialog medEl={el} isNew={true} /> : ""}
			</div>

			<div className="d-flex align-items-center me-3">
				{logData.map((l, i) => (
					<LogEntrey medEl={el} logEl={l} logIndex={i} />
				))}
			</div>
		</div>
	);
};

export default LogBox;
