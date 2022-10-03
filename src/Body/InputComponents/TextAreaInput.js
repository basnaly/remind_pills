import React, { useContext } from "react";
import { TextareaAutosizeStyled } from "../../styles/MuiStyles";

import { ThemeContext } from "../../styles/ThemeContext";

const TextAreaInput = ({ value = "", setValue = "" }) => {
	
	const handleChange = event => setValue(event.target.value);

	const { currentTheme } = useContext(ThemeContext);

	return (
		<TextareaAutosizeStyled
			className="mt-2"
			aria-label="minimum height"
			minRows={3}
			placeholder="Notes"
			value={value}
			onChange={handleChange}
			style={{
				backgroundColor: currentTheme.textareaBackground,
			}}
		/>
	);
};

export default TextAreaInput;
