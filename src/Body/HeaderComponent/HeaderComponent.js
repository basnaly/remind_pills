import React from "react";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import ThemeComponent from "./ThemeComponent";
import { HeaderStyled } from "../../styles/MuiStyles";

const HeaderComponent = () => {
	
	return (
		<HeaderStyled className="d-flex align-items-center justify-content-evenly">
			<div>Remind 💊 pills</div>

			<div className="d-flex align-items-center justify-content-evenly">
				<SettingsBrightnessIcon />
				<ThemeComponent />
			</div>

			<InsertEmoticonIcon />
		</HeaderStyled>
	);
};

export default HeaderComponent;
