import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { myTheme } from "./styles/MuiTheme";
import { ThemeProvider } from "@mui/material/styles";
import AddNewMedicalForm from "./Body/AddNewMedicalForm";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import { ThemeContext } from "./styles/ThemeContext";

import { themeDark } from "./styles/MuiThemeDark";
import { themeLight } from "./styles/MuiThemeLight";

import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import MainScreen from "./Body/MainScreen";

const AppRemindPills = () => {

    const { currentTheme } = useContext(ThemeContext);
    const theme = createTheme(deepmerge(myTheme, currentTheme.isLight ? themeLight : themeDark ));

	return (
		<ThemeProvider theme={theme}>
			<div className="d-flex flex-column flex-column overflow-auto vh-100"
                style={{
                    backgroundColor: currentTheme.backgroundColor,
                    color: currentTheme.textColor
                }}
            >
				<Router>
					<HeaderComponent />

					<MainScreen />
				</Router>
			</div>
		</ThemeProvider>
	);
};

export default AppRemindPills;
