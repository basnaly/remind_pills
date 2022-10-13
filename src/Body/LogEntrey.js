import React from "react";
import { useDispatch } from "react-redux";
import { DeleteSelectedLog } from "../Actions/LogAction";

import { BorderAroundStyled, BorderBottomStyled, BorderStyled, DeleteIconStyled, EditIconStyled } from "../styles/MuiStyles";
import AddEditLogDialog from "./AddEditLogDialog";

const LogEntrey = ( { medEl, logEl, logIndex }) => {

    const dispatch = useDispatch()

    const deleteLog = () => {
        dispatch(DeleteSelectedLog(logEl.id))
    }

    const borderLeft = logIndex > 0 && 'none'

	return (

		<BorderAroundStyled key={logEl?.id} 
            style={{borderLeft}}
            className="d-flex flex-column align-items-center p-2">

			<BorderBottomStyled >
				{medEl?.form} x {logEl?.quantity ?? medEl?.quantity}
			</BorderBottomStyled>

			<BorderBottomStyled className="align-self-stretch text-center py-1">
                {logEl?.time} 
            </BorderBottomStyled>
            
            <div className="d-flex align-items-center pt-2">
                <AddEditLogDialog isNew={false} logEl={logEl} medEl={medEl}/>
                <DeleteIconStyled onClick={deleteLog}/>
            </div>
		</BorderAroundStyled>
	);
};

export default LogEntrey;
