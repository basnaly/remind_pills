import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddNewLog } from "../Actions/MedicineAction";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import TextFieldInput from "./InputComponents/TextFieldInput";
import { DialogTitleLogStyled, MedBoxButton } from "../styles/MuiStyles";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const LogDialog = ( {id} ) => {

    const [time, setTime] = useState();

	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const openDialog = () => setIsDialogOpen(true);
	const closeDialog = () => setIsDialogOpen(false);

	const dispatch = useDispatch();

	const SaveLogTime = (id) => {
		dispatch(AddNewLog(id, time));
        setIsDialogOpen(false)
	};

	return (
		<React.Fragment>
			<MedBoxButton
				data-testid="delete-button-element"
				variant={"outlined"}
				className=" mx-3"
				onClick={openDialog}
			>
				Log
			</MedBoxButton>

			<Dialog
				data-testid="delete-dialog-element"
				open={isDialogOpen}
				TransitionComponent={Transition}
				keepMounted
				onClose={closeDialog}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitleLogStyled
					id="modal-modal-title"
					variant="h6"
					component="h2"
					className="text-center pb-3 m-1"
				>
					Select the log time:
				</DialogTitleLogStyled>

				<DialogContent className="pb-3">
					<TextFieldInput
						textLabel={"Add time"}
						value={time}
						setValue={setTime}
						type="time"
					/>
				</DialogContent>

				<DialogActions className="d-flex align-items-center justify-content-center mt-0 mb-3">
					<MedBoxButton
						variant={"outlined"}
						className=" mx-3"
						onClick={() => SaveLogTime(id, time)}
					>
						Save
					</MedBoxButton>

					<MedBoxButton
						data-testid="cancel-button-element"
						variant={"outlined"}
						className=" mx-3"
						onClick={closeDialog}
					>
						Cancel
					</MedBoxButton>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
};

export default LogDialog;
