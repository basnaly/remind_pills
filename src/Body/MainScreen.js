import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetListMedicines } from "../Actions/MedicineAction";
import { GrayButton, StartingDivStyled } from "../styles/MuiStyles";
import AddFormDialog from "./AddFormDialog";
import MedicineBox from "./MedicineBox";

const MainScreen = () => {
	const listMedicines = useSelector((state) => state?.med?.listMedicines);
	const isLoadingListMedicines = useSelector(
		(state) => state?.med?.isLoadingListMedicines
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(GetListMedicines());
	}, []);

	return (
		<div className="d-flex flex-column align-items-center m-2">
			{listMedicines.length === 0 ? (
				<StartingDivStyled className="d-flex flex-column align-items-center m-2">
					You don't have any medicine. Let's start adding!
				</StartingDivStyled>
			) : (
				<div className="d-flex flex-wrap">
					{listMedicines.map((el) => (
						<MedicineBox key={el.id} el={el} />
					))}
				</div>
			)}

			<AddFormDialog />
		</div>
	);
};

export default MainScreen;
