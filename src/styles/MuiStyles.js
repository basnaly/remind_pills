import { styled, TextareaAutosize } from "@mui/material";
import { Button, Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

export const HeaderStyled = styled("div")({
    backgroundColor: 'lightgray',
	fontSize: '20px',
    padding: '5px',
    fontFamily: "'Acme', sans-serif",
});

export const GrayButton = styled(Button)({
	textTransform: "none",
	color: "black",
	border: "1px solid black",
	fontSize: "16px",
	backgroundColor: "lightgray",
	padding: "0 5px",
    fontFamily: "'Acme', sans-serif",
});

export const MenuItemStyled = styled(MenuItem)({
	color: "black",
    fontFamily: "'Acme', sans-serif",
});

export const TextareaAutosizeStyled = styled(TextareaAutosize)({
	width: 200, 
	fontFamily: "'Acme', sans-serif", 
	fontSize: '16px', 
	"&:focus-visible": {
		outlineColor: '#ffa64d'
	}
});