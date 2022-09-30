import React from "react";
import { FREQUENCY } from "../constants";
import { BoxStyled, DataMedicineStyled, GrayButton, MedBoxButton, NameMedicineStyled, OrangeButton } from "../styles/MuiStyles";

const MedicineBox = ({ el }) => {

	return (

		<BoxStyled
			boxShadow={24}
			p={1}
			className="d-flex flex-column position-relative align-items-center m-3"
		>
			<NameMedicineStyled className="d-flex flex-column align-items-center">
				{el.name}
			</NameMedicineStyled>

			<DataMedicineStyled className="me-2">
				{el.form}, q-ty: {el.quantity}
			</DataMedicineStyled>

			<DataMedicineStyled className="me-2">
				{ el.frequency === FREQUENCY[2] ? el.frequency
                : 'Every ' + el.interval}
			</DataMedicineStyled>

			<DataMedicineStyled className="d-flex flex-column align-items-center mb-2">
				{el.note}
			</DataMedicineStyled>

            <div className="d-flex align-items-center m-2">
                <MedBoxButton
                    variant={'outlined'}
                    className=" mx-2" 
                    //onClick={editTrip}
                >
                    Log
                </MedBoxButton>

                <MedBoxButton
                    variant={'outlined'}
                    className=" mx-3" 
                    //onClick={editTrip}
                >
                    View
                </MedBoxButton>

                <MedBoxButton
                    variant={'outlined'}
                    className=" mx-3" 
                    //onClick={editTrip}
                >
                    Archive
                </MedBoxButton>

            </div>
		</BoxStyled>

        
	);
};

export default MedicineBox;
