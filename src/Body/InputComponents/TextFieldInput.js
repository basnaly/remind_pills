import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const TextFieldInput = ({
	textLabel = "Add name",
	value = "",
	setValue = "",
	type,
	m = 1
}) => {
	
	const handleChange = (event) => setValue(event.target.value);

	return (
		<Box
			component="form"
			sx={{
				"& > :not(style)": { m: m, width: 230 },
			}}
			noValidate
			autoComplete="off"
		>
			<TextField
				size="small"
				color="primary"
				id="outlined-basic"
				label={textLabel}
				type={type}
				variant="outlined"
				value={value}
				onChange={handleChange}
			/>
		</Box>
	);
};

export default TextFieldInput;
