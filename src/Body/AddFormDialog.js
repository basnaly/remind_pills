import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import { DialogActions } from "@mui/material";
import { GrayButton, OrangeButton } from "../styles/MuiStyles";
import AddNewMedicalForm from "./AddNewMedicalForm";
import { AddNewPill } from "../Actions/PillAction";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const AddFormDialog = () => {

	const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    const dispatch = useDispatch();

	return (
		<div>
            <GrayButton
				data-testid="add-button-element"
				variant={"outlined"}
				className="mt-2"
				onClick={openDialog}
			>
				Add new medicine
			</GrayButton>

			<Dialog 
				maxWidth="xl"
				open={isDialogOpen}
				TransitionComponent={Transition}
				keepMounted
				onClose={closeDialog}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle
					id="modal-modal-title"
					variant="h6"
					component="h2"
					className="pb-1 m-1 text-center"
				>
					Add a new medicine form
				</DialogTitle>

				<DialogContent className="d-flex align-items-start my-2 overflow-auto">
                    <AddNewMedicalForm />
				</DialogContent>

				<DialogActions className="d-flex align-items-center">

                    <GrayButton 
                        variant={"outlined"} 
                        className="mx-auto mt-0 mb-3"
                        onClick={() => dispatch(AddNewPill())}
                    >
                        Submit
			        </GrayButton>

					<OrangeButton
						variant={"outlined"}
						className="mx-auto mt-0 mb-3"
						onClick={closeDialog}
						>
						Close
					</OrangeButton>
				</DialogActions>

			</Dialog>
		</div>
	);
};

export default AddFormDialog;
