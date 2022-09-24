import React, { useEffect} from "react";
import { BrowserRouter as Router } from "react-router-dom";

import {myTheme} from "./styles/MuiTheme";
import { ThemeProvider } from "@mui/material/styles";
import AddNewMedicalForm from "./Body/AddNewMedicalForm";
import HeaderComponent from "./Body/HeaderComponent/HeaderComponent";

const AppRemindPills = () => {


	return (

		<ThemeProvider theme={myTheme}>
            <div className="d-flex flex-column flex-column overflow-auto vh-100">
                <Router>
                    
                    <HeaderComponent />

                    <AddNewMedicalForm />
                    
                </Router>
            </div>
        </ThemeProvider>
	)
}

export default AppRemindPills;