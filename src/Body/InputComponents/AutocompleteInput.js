import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const AutocompleteInput = ({
	options,
	autocompleteLabel,
	value,
	setValue,
	inputValue,
	setInputValue,
	disable = false,
}) => {

	return (
		<Autocomplete
			disablePortal
			id="combo-box-demo"
			size="small"
			color="primary"
			options={options}
			value={value}
			disabled={disable}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			inputValue={inputValue}
			onInputChange={(event, newInputValue) => {
				setInputValue(newInputValue);
			}}
			sx={{
				width: 200,
				m: 1,
			}}

			renderInput={(params) => (
				<TextField 
					{...params} 
					label={autocompleteLabel} 
			
				/>
			)}
		/>
	);
};

export default AutocompleteInput;
