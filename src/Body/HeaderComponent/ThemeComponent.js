import React, { useState } from "react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MenuItemStyled } from "../../styles/MuiStyles";

const ThemeComponent = () => {

	const [anchorEl, setAnchorEl] = useState(null);

	const open = Boolean(anchorEl);

	const handleClick = event => setAnchorEl(event.currentTarget);

	const handleClose = () => setAnchorEl(null);


	return (
		<div>
			<Button
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
                sx={{ textTransform: 'none', color: 'black', 
                    fontSize: '16px', fontFamily: "'Acme', sans-serif",}}
			>
				Theme
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItemStyled onClick={handleClose}>Dark</MenuItemStyled>
				<MenuItemStyled onClick={handleClose}>Light</MenuItemStyled>
			</Menu>
		</div>
	);
};

export default ThemeComponent;
