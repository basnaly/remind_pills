import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import Slide from "@mui/material/Slide";

import { DialogActions } from "@mui/material";
import {
	DialogTitleStyled,
	EditIconStyled,
	GrayButton,
	ThemeButton,
} from "../styles/MuiStyles";

import TextFieldInput from "./InputComponents/TextFieldInput";
import { AddLog, SaveEditedLog, UpdateLogData } from "../Actions/LogAction";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const AddEditLogDialog = ({ medEl, logEl = {}, isNew = false }) => {

	const form = medEl?.form;

	const [quantity, setQuantity] = useState(logEl?.quantity ?? medEl?.quantity);
	const [time, setTime] = useState(logEl?.time ?? medEl?.time);

	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const openDialog = () => setIsDialogOpen(true);

	const closeDialog = () => {
		setIsDialogOpen(false);
	};

	const dispatch = useDispatch();

	const addEditLog = () => {
		if (isNew) {
			dispatch(AddLog(medEl?.id, time, quantity));
		} else {
			dispatch(UpdateLogData(logEl?.id, logEl?.medicineId, time, quantity))
		}
		closeDialog()
	};

	const openDialogButton = isNew ? (
		<ThemeButton
				variant={"outlined"}
				className="mx-auto"
				onClick={openDialog}
			>
				Add log
			</ThemeButton>
	) : (
		<EditIconStyled 
			className="me-2" 
			onClick={openDialog}
		/>
	)


	return (
		<div>
			{ openDialogButton }

			<Dialog
				maxWidth="xl"
				open={isDialogOpen}
				TransitionComponent={Transition}
				keepMounted
				onClose={closeDialog}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitleStyled
					id="modal-modal-title"
					variant="h6"
					component="h2"
					className="pb-1 m-1 text-center"
				>
					Log details
				</DialogTitleStyled>

				<DialogContent className="d-flex flex-column align-items-start pb-0">
					<TextFieldInput
						textLabel={form}
						value={quantity}
						type="number"
						setValue={setQuantity}
						m={2}
					/>

					<TextFieldInput
						textLabel={"Add time"}
						value={time}
						setValue={setTime}
						type="time"
						m={2}
					/>
				</DialogContent>

				<DialogActions className="d-flex align-items-center">
					<GrayButton
						variant={"outlined"}
						className="mx-auto my-3"
						onClick={addEditLog}
					>
						Save
					</GrayButton>

					<GrayButton
						variant={"outlined"}
						className="mx-auto my-3"
						onClick={closeDialog}
					>
						Close
					</GrayButton>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default AddEditLogDialog;
