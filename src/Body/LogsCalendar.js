import moment from "moment";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetListLogs, SetSelectedLogDate } from "../Actions/LogAction";
import { ArrowLeftStyled, ArrowRightStyled, ArrowStyled, LogDateStyled, LogMedicineStyled, TodaySpanStyled } from "../styles/MuiStyles";
import LogBox from "./LogBox";


const LogsCalendar = () => {

	const logCalendarDate = useSelector((state) => state?.log?.date);

	let todayDate = moment().format("ddd, Do MMM");
	

	const listMedicines = useSelector((state) => state?.med?.listMedicines);

	const dispatch = useDispatch();

	const setPrevDate = () => {
		let prevDate = moment(logCalendarDate, "ddd, Do MMM").subtract(1, 'days').format("ddd, Do MMM");
		dispatch(SetSelectedLogDate(prevDate))
	}

	const setNextDate = () => {
		let nextDate = moment(logCalendarDate, "ddd, Do MMM").add(1, 'days').format("ddd, Do MMM");
		dispatch(SetSelectedLogDate(nextDate))
	}

	useEffect(() => {
		dispatch(GetListLogs());
	}, []);

	return (
		<div className="d-flex flex-column align-items-center">
			<div className="d-flex align-items-center w-100 justify-content-evenly">
				<ArrowLeftStyled fontSize="large" className="m-2" onClick={setPrevDate} />
				{
					logCalendarDate === todayDate ? 
					<div className="d-flex align-items-center">
						<TodaySpanStyled>Today:</TodaySpanStyled> 
						<LogDateStyled className="m-2">{logCalendarDate}</LogDateStyled> 
					</div>
					: <LogDateStyled className="m-2">{logCalendarDate}</LogDateStyled>
				}
				
				<ArrowRightStyled 
					sx={{color: logCalendarDate === todayDate && "gray", 
						pointerEvents: logCalendarDate === todayDate && 'none',}} 
						fontSize="large" className="m-2" onClick={setNextDate} 
				/>
		
			</div>
			{listMedicines.map((el, index) => (
				<LogMedicineStyled key={el.id}>
					<LogBox el={el} />
				</LogMedicineStyled>
			))}
		</div>
	);
};

export default LogsCalendar;
