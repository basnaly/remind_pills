import React, { useState } from "react";
import { GrayButton } from "../styles/MuiStyles";
import AddFormDialog from "./AddFormDialog";

const MainScreen = () => {

	return (
		<div className="d-flex flex-column align-items-center m-2">
            <div className="d-flex flex-column align-items-center m-2"> 
                You don't have any medicine. Let's start adding!
            </div>
			<AddFormDialog />
		</div>
	);
};

export default MainScreen;
