import React from "react";
import { useSelector } from "react-redux";
import { StartingDivStyled } from "../styles/MuiStyles";
import MedicineBox from "./MedicineBox";

const MainScreen = () => {

	const listMedicines = useSelector((state) => state?.med?.listMedicines);
	const isLoadingListMedicines = useSelector((state) => state?.med?.isLoadingListMedicines);

	return (
		<div className="d-flex flex-column align-items-center m-2">
			{listMedicines.length === 0 ? (
				<StartingDivStyled className="d-flex flex-column align-items-center m-2">
					You don't have any medicine. Let's start adding!
				</StartingDivStyled>
			) : (
				<div className="d-flex flex-wrap">
					{listMedicines.map((el, index) => (
						<MedicineBox key={el.id} el={el} index={index}/>
					))}
				</div>
			)}
		</div>
	);
};

export default MainScreen;
