import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import { DialogActions } from "@mui/material";
import { DialogTitleStyled, GrayButton, OrangeButton } from "../styles/MuiStyles";
import AddNewMedicalForm from "./AddNewMedicalForm";
import { AddNewPill, ChangeNewMedicineQuantity, ChangeNewMedicineTime, ClearDialogContent } from "../Actions/MedicineAction";
import TextFieldInput from "./InputComponents/TextFieldInput";
import { AddLog } from "../Actions/LogAction";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const EditLogDialog = ({el}) => {

	const form = el.form;

	const [quantity, setQuantity] = useState(el.quantity);
	const [time, setTime] = useState(el.time);

	const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => setIsDialogOpen(true);
    
	const closeDialog = () => {
        setIsDialogOpen(false);
    };

	const editLog = () => {
		dispatch(AddLog(el.id, time, quantity));
	}

    const dispatch = useDispatch();

	return (
		<div>
            <div
				className="mt-2"
				onClick={openDialog}
			>✏️
			</div>

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
                        onClick={() => dispatch(editLog())}
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

export default EditLogDialog;
