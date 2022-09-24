import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const TextAreaInput = ({ value = "", setValue = "" }) => {
	
	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<TextareaAutosize
			className="mt-2"
			aria-label="minimum height"
			minRows={3}
			placeholder="Notes"
			value={value}
			onChange={handleChange}
			style={{ width: 200 }}
		/>
	);
};

export default TextAreaInput;
