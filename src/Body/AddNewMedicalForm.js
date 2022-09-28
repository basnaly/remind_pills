import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeNewMedicineAmount, ChangeNewMedicineForm, ChangeNewMedicineFrequency, ChangeNewMedicineInterval, ChangeNewMedicineName, ChangeNewMedicineNote, ChangeNewMedicineStrength, ChangeNewMedicineUnit, ChangeNewMedicineWeekDay } from "../Actions/PillAction";

import { FORM, FREQUENCY, INTERVAL, UNIT, WEEK_DAYS } from "../constants";

import AutocompleteInput from "./InputComponents/AutocompleteInput";
import TextAreaInput from "./InputComponents/TextAreaInput";
import TextFieldInput from "./InputComponents/TextFieldInput";

const AddNewMedicalForm = () => {

	const dispatch = useDispatch();

	const name = useSelector(state => state?.med?.newMedicine?.name);
	const setName = newName => dispatch(ChangeNewMedicineName(newName));

	const form = useSelector(state => state?.med?.newMedicine?.form);
	const setForm = newForm => dispatch(ChangeNewMedicineForm(newForm));
	const [inputForm, setInputForm] = useState("");

	const strength = useSelector(state => state?.med?.newMedicine?.strength);
	const setStrength = newStrength => dispatch(ChangeNewMedicineStrength(newStrength));

	const unit = useSelector(state => state?.med?.newMedicine?.unit);
	const setUnit = newUnit => dispatch(ChangeNewMedicineUnit(newUnit));
	const [inputUnit, setInputUnit] = useState("");

	const amount = useSelector(state => state?.med?.newMedicine?.amount);
	const setAmount = newAmount => dispatch(ChangeNewMedicineAmount(newAmount));

	const frequency = useSelector(state => state?.med?.newMedicine?.frequency);
	const setFrequency = newFrequency => dispatch(ChangeNewMedicineFrequency(newFrequency));
	const [inputFrequency, setInputFrequency] = useState("");

	const interval = useSelector(state => state?.med?.newMedicine?.interval);
	const setInterval = newInterval => dispatch(ChangeNewMedicineInterval(newInterval));
	const [inputInterval, setInputInterval] = useState("");

	const weekDay = useSelector(state => state?.med?.newMedicine?.weekDay);
	const setWeekDay = newWeekDay => dispatch(ChangeNewMedicineWeekDay(newWeekDay));
	const [inputWeekDay, setInputWeekDay] = useState("");

	const note = useSelector(state => state?.med?.newMedicine?.note);
	const setNote = newNote => dispatch(ChangeNewMedicineNote(newNote));

	let options = (<AutocompleteInput
		options={INTERVAL}
		autocompleteLabel={"Interval"}
		value={interval}
		setValue={setInterval}
		inputValue={inputInterval}
		setInputValue={setInputInterval}
	/>
	)

	if (frequency === FREQUENCY[1]) {
		options = (<AutocompleteInput
			options={WEEK_DAYS}
			autocompleteLabel={"Days of week"}
			value={weekDay}
			setValue={setWeekDay}
			inputValue={inputWeekDay}
			setInputValue={setInputWeekDay}
		/>
		)
	} else if (frequency === FREQUENCY[2]) {
		options = ''
	}

	return (
		<div className="d-flex flex-column align-items-center overflow-auto">
			
			<div className="d-flex align-items-center overflow-auto">
				<TextFieldInput
					className="mt-2"
					textLabel={"Add name"}
					value={name}
					setValue={setName}
				/>

				<AutocompleteInput
					options={FORM}
					autocompleteLabel={"Form"}
					value={form}
					setValue={setForm}
					inputValue={inputForm}
					setInputValue={setInputForm}
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
				value={amount}
				setValue={setAmount}
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

			<TextAreaInput value={note} setValue={setNote} />

		</div>
	);
};

export default AddNewMedicalForm;
