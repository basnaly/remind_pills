import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddNewPill } from "../Actions/PillAction";

import { FORM, FREQUENCY, INTERVAL, UNIT } from "../constants";
import { GrayButton } from "../styles/MuiStyles";

import AutocompleteInput from "./InputComponents/AutocompleteInput";
import TextAreaInput from "./InputComponents/TextAreaInput";
import TextFieldInput from "./InputComponents/TextFieldInput";

const AddNewMedicalForm = () => {

	const [name, setName] = useState("");

	const [form, setForm] = useState(FORM[0]);
	const [inputForm, setInputForm] = useState("");

	const [strength, setStrength] = useState("");

	const [unit, setUnit] = useState(UNIT[0]);
	const [inputUnit, setInputUnit] = useState("");

	const [amount, setAmount] = useState("");

	const [frequency, setFrequency] = useState(FREQUENCY[0]);
	const [inputFrequency, setInputFrequency] = useState("");

	const [intervalPill, setIntervalPill] = useState(INTERVAL[0]);
	const [inputIntervalPill, setInputIntervalPill] = useState("");

	const [note, setNote] = useState("");

	const dispatch = useDispatch();

	console.log(
		name,
		form,
		strength,
		unit,
		amount,
		frequency,
		intervalPill,
		note
	);

	return (
		<div className="d-flex flex-column align-items-center overflow-auto">
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

			<TextFieldInput
				textLabel={"Strength"}
				value={strength}
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

			<TextFieldInput
				textLabel={"Pack contains amount"}
				value={amount}
				setValue={setAmount}
			/>

			<AutocompleteInput
				options={FREQUENCY}
				autocompleteLabel={"Frequency"}
				value={frequency}
				setValue={setFrequency}
				inputValue={inputFrequency}
				setInputValue={setInputFrequency}
				disable={true}
			/>

			<AutocompleteInput
				options={INTERVAL}
				autocompleteLabel={"Interval"}
				value={intervalPill}
				setValue={setIntervalPill}
				inputValue={inputIntervalPill}
				setInputValue={setInputIntervalPill}
			/>

			<TextAreaInput value={note} setValue={setNote} />

			<GrayButton 
				variant={"outlined"} 
				className="mt-2"
				onClick={() => dispatch(AddNewPill(name, form, strength, unit, amount, intervalPill, note))}
			>
				Submit
			</GrayButton>
		</div>
	);
};

export default AddNewMedicalForm;
