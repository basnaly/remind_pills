import React, { useContext, useState } from "react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { MenuItemStyled } from "../styles/MuiStyles";
import { ThemeContext } from "../styles/ThemeContext";


const ThemeComponent = () => {

	const [anchorEl, setAnchorEl] = useState(null);

	const open = Boolean(anchorEl);

	const handleClick = event => setAnchorEl(event.currentTarget);

	const handleClose = () => setAnchorEl(null);

	const { currentTheme, lightTheme, darkTheme } = useContext(ThemeContext);


	return (
		<div>
			<Button
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
                sx={{ textTransform: 'none', 
                    fontSize: '16px', fontFamily: "'Acme', sans-serif",}}
				style={{
					backgroundColor: currentTheme.headerBackgroundColor,
					color: currentTheme.headerTextColor
				}}
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
				<MenuItemStyled 
					onClick={darkTheme}
					selected={!currentTheme.isLight}
				>
						Dark
				</MenuItemStyled>
				<MenuItemStyled 
					onClick={lightTheme}
					selected={currentTheme.isLight}
				>
					Light
				</MenuItemStyled>
			</Menu>
		</div>
	);
};

export default ThemeComponent;
