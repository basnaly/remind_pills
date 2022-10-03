import React, { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { DialogTitleLogStyled, MedBoxButton } from "../styles/MuiStyles";
import AddNewMedicalForm from './AddNewMedicalForm';
import { useDispatch } from 'react-redux';
import { ClearDialogContent, EditExistingMedicine, SaveEditedMedicine } from '../Actions/MedicineAction';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const EditDialog = ( {medicineId, index} ) => {

	const [isDialogOpen, setIsDialogOpen] = useState(false);

    const dispatch = useDispatch();

	const openDialog = () => {
        setIsDialogOpen(true);
        dispatch(EditExistingMedicine(index));
    };

	const closeDialog = () => {
        setIsDialogOpen(false);
        dispatch(ClearDialogContent());
    };

	const EditMedicine = () => {
		dispatch(SaveEditedMedicine(medicineId));
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
				Edit
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
					Edit your medicine
				</DialogTitleLogStyled>

				<DialogContent className="pb-3">
					<AddNewMedicalForm />
				</DialogContent>

				<DialogActions className="d-flex align-items-center justify-content-center mt-0 mb-3">
					<MedBoxButton
						variant={"outlined"}
						className=" mx-3"
						onClick={EditMedicine}
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
  )
}

export default EditDialog;
