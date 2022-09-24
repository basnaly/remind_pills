import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { TextareaAutosizeStyled } from "../../styles/MuiStyles";

const TextAreaInput = ({ value = "", setValue = "" }) => {
	
	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<TextareaAutosizeStyled
			className="mt-2"
			aria-label="minimum height"
			minRows={3}
			placeholder="Notes"
			value={value}
			onChange={handleChange}
		/>
	);
};

export default TextAreaInput;
