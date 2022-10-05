import React, { useContext } from "react";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import ThemeComponent from "./ThemeComponent";
import { HeaderStyled } from "../styles/MuiStyles";
import { ThemeContext } from "../styles/ThemeContext";

const HeaderComponent = () => {

	const { currentTheme } = useContext(ThemeContext);
	
	return (
		<HeaderStyled className="d-flex align-items-center justify-content-evenly"
			style={{
				backgroundColor: currentTheme.headerBackgroundColor,
				color: currentTheme.headerTextColor
			}}
		>
			<div>Remind 💊 pills</div>

			<div className="d-flex align-items-center justify-content-evenly">
				<SettingsBrightnessIcon />
				<ThemeComponent />
			</div>

			<InsertEmoticonIcon style={{fontSize: "26px"}}/>
		</HeaderStyled>
	);
};

export default HeaderComponent;
