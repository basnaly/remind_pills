import React, { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { myTheme } from "./styles/MuiTheme";
import { ThemeProvider } from "@mui/material/styles";

import HeaderComponent from "./HeaderComponent/HeaderComponent";
import { ThemeContext } from "./styles/ThemeContext";

import { themeDark } from "./styles/MuiThemeDark";
import { themeLight } from "./styles/MuiThemeLight";

import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import MedicationsScreen from "./Body/MedicationsScreen";
import { useDispatch } from "react-redux";
import { GetListMedicines } from "./Actions/MedicineAction";

const AppRemindPills = () => {

    const { currentTheme } = useContext(ThemeContext);
    const theme = createTheme(deepmerge(myTheme, currentTheme.isLight ? themeLight : themeDark ));

    const dispatch = useDispatch();

	useEffect(() => {
		dispatch(GetListMedicines());
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<div className="d-flex flex-column flex-column overflow-auto vh-100"
                style={{
                    backgroundColor: currentTheme.backgroundColor,
                    color: currentTheme.textColor
                }}
            >
				<BrowserRouter>
					<HeaderComponent />
                    <MedicationsScreen />
					
				</BrowserRouter>
			</div>
		</ThemeProvider>
	);
};

export default AppRemindPills;
