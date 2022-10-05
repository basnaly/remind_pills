import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	AddNewPill,
	ChangeNewMedicineAmount,
	ChangeNewMedicineForm,
	ChangeNewMedicineFrequency,
	ChangeNewMedicineInterval,
	ChangeNewMedicineName,
	ChangeNewMedicineNote,
	ChangeNewMedicineQuantity,
	ChangeNewMedicineStrength,
	ChangeNewMedicineTime,
	ChangeNewMedicineUnit,
	ChangeNewMedicineWeekDay,
	ClearDialogContent,
} from "../Actions/MedicineAction";

import { FORM, FREQUENCY, INTERVAL, UNIT, WEEK_DAYS } from "../constants";
import { MedBoxButton } from "../styles/MuiStyles";

import AutocompleteInput from "./InputComponents/AutocompleteInput";
import TextAreaInput from "./InputComponents/TextAreaInput";
import TextFieldInput from "./InputComponents/TextFieldInput";

const AddNewMedicalForm = ( {isNew = true} ) => {

	const dispatch = useDispatch();

	const name = useSelector((state) => state?.med?.newMedicine?.name);
	const setName = (newName) => dispatch(ChangeNewMedicineName(newName));

	const form = useSelector((state) => state?.med?.newMedicine?.form);
	const setForm = (newForm) => dispatch(ChangeNewMedicineForm(newForm));
	const [inputForm, setInputForm] = useState("");

	const quantity = useSelector((state) => state?.med?.newMedicine?.quantity);
	const setQuantity = (newQuantity) => dispatch(ChangeNewMedicineQuantity(newQuantity));

	const strength = useSelector((state) => state?.med?.newMedicine?.strength);
	const setStrength = (newStrength) => dispatch(ChangeNewMedicineStrength(newStrength));

	const unit = useSelector((state) => state?.med?.newMedicine?.unit);
	const setUnit = (newUnit) => dispatch(ChangeNewMedicineUnit(newUnit));
	const [inputUnit, setInputUnit] = useState("");

	const packAmount = useSelector((state) => state?.med?.newMedicine?.packAmount);
	const setPackAmount = (newPackAmount) => dispatch(ChangeNewMedicineAmount(newPackAmount));

	const frequency = useSelector((state) => state?.med?.newMedicine?.frequency);
	const setFrequency = (newFrequency) => dispatch(ChangeNewMedicineFrequency(newFrequency));
	const [inputFrequency, setInputFrequency] = useState("");

	const interval = useSelector((state) => state?.med?.newMedicine?.interval);
	const setInterval = (newInterval) => dispatch(ChangeNewMedicineInterval(newInterval));
	const [inputInterval, setInputInterval] = useState("");

	const time = useSelector((state) => state?.med?.newMedicine?.time);
	const setTime = (newTime) => dispatch(ChangeNewMedicineTime(newTime));

	const weekDay = useSelector((state) => state?.med?.newMedicine?.weekDay);
	const setWeekDay = (newWeekDay) => dispatch(ChangeNewMedicineWeekDay(newWeekDay));
	const [inputWeekDay, setInputWeekDay] = useState("");

	const note = useSelector((state) => state?.med?.newMedicine?.note);
	const setNote = (newNote) => dispatch(ChangeNewMedicineNote(newNote));

	const [isFormOpen, setIsFormOpen] = useState(false);

	const closeForm = () => {
        setIsFormOpen(false);
        dispatch(ClearDialogContent());
    };

	let options = (
		<React.Fragment>
			<AutocompleteInput
				options={INTERVAL}
				autocompleteLabel={"Interval"}
				value={interval}
				setValue={setInterval}
				inputValue={inputInterval}
				setInputValue={setInputInterval}
			/>
		</React.Fragment>
	);

	if (frequency === FREQUENCY[1]) {
		options = (
			<React.Fragment>
				<AutocompleteInput
					options={WEEK_DAYS}
					autocompleteLabel={"Days of week"}
					value={weekDay}
					setValue={setWeekDay}
					inputValue={inputWeekDay}
					setInputValue={setInputWeekDay}
				/>
			</React.Fragment>
		);
	} else if (frequency === FREQUENCY[2]) {
		options = "";
	}

	return (
		<div className="d-flex flex-column align-items-center overflow-auto mt-2">
			<TextFieldInput
				textLabel={"Add name"}
				value={name}
				setValue={setName}
			/>

			<div className="d-flex align-items-center overflow-auto">
				<AutocompleteInput
					options={FORM}
					autocompleteLabel={"Form"}
					value={form}
					setValue={setForm}
					inputValue={inputForm}
					setInputValue={setInputForm}
				/>

				<TextFieldInput
					//className="mt-2"
					textLabel={"Quantity"}
					value={quantity}
					type="number"
					setValue={setQuantity}
				/>
			</div>

			<div className="d-flex align-items-center overflow-auto">
				<TextFieldInput
					textLabel={"Strength"}
					value={strength}
					type="number"
					setValue={setStrength}
				/>

				<AutocompleteInput
					options={UNIT}
					autocompleteLabel={"Unit"}
					value={unit}
					setValue={setUnit}
					inputValue={inputUnit}
					setInputValue={setInputUnit}
				/>
			</div>

			<TextFieldInput
				textLabel={"Pack contains amount"}
				value={packAmount}
				type="number"
				setValue={setPackAmount}
			/>

			<div className="d-flex align-items-center overflow-auto">
				<AutocompleteInput
					options={FREQUENCY}
					autocompleteLabel={"Frequency"}
					value={frequency}
					setValue={setFrequency}
					inputValue={inputFrequency}
					setInputValue={setInputFrequency}
					//disable={true}
				/>

				{options}
			</div>

			<div className="d-flex flex-column align-items-center">
				<TextFieldInput
					textLabel={"Add time"}
					value={time}
					setValue={setTime}
					type="time"
				/>
			</div>

			<TextAreaInput value={note} setValue={setNote} />

			{isNew &&
			<div className="d-flex align-items-center">
				<MedBoxButton
					variant={"outlined"}
					className="mx-4 mt-4"
					onClick={() => dispatch(AddNewPill())}
				>
					Submit
				</MedBoxButton>

				<MedBoxButton
					variant={"outlined"}
					className="mx-4 mt-4"
					onClick={closeForm}
				>
					Close
				</MedBoxButton>
			</div>
			}
		</div>
	);
};

export default AddNewMedicalForm;
