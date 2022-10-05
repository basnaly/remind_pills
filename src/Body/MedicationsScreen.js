import React, { useState } from "react";

import { TabsContext } from "@mui/base";
import { Box, Tab } from "@mui/material";
import TabList from "@mui/lab/TabList";

import {
	Route,
	Routes,
	useLocation,
	useNavigate,
	useParams,
} from "react-router";
import AddFormDialog from "./AddFormDialog";
import { useDispatch, useSelector } from "react-redux";
import ArchivedMedicines from "./ArchivedMedicines";
import LogsCalendar from "./LogsCalendar";
import { TabContext } from "@mui/lab";
import MainScreen from "./MainScreen";
import AddNewMedicalForm from "./AddNewMedicalForm";

const MedicationsScreen = () => {

    const listMedicines = useSelector(state => state?.med?.listMedicines);

	const location = useLocation(); // {} in URL: localhost:3000

	const params = useParams();

	//const idPath = `/${params.id}/`;

	const [selectedTab, setSelectedTab] = useState(location.pathname.replace("/", "")); //

	const handleChange = (_, tab) => {
		setSelectedTab(tab);
		navigate(tab);
	};

	const dispatch = useDispatch();

	const navigate = useNavigate();

	return (
		<React.Fragment>
			<TabContext value={selectedTab}>
				<Box>
					<TabList
						onChange={handleChange}
						aria-label="lab API tabs example"
                        sx={{width: '100%'}}
					>
                        <Tab label="Active medicines" value="active-medicines" />
						<Tab label="Add new medicine" value="add-new-medicine" />
						<Tab label="Logs calendar" value="logs-calendar" />
						<Tab label="Archived medicines" value="archived-medicines" />
					</TabList>
				</Box>
			</TabContext>

			<Routes>
                <Route path="/active-medicines" element={<MainScreen />} />
				<Route path="/add-new-medicine" element={<AddNewMedicalForm />} />
				<Route path="/logs-calendar" element={<LogsCalendar />} />
				<Route path="/archived-medicines" element={<ArchivedMedicines />}
				/>
			</Routes>
		</React.Fragment>
	);
};

export default MedicationsScreen;
