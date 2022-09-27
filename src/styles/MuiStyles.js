import { styled, TextareaAutosize } from "@mui/material";
import { Button, Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

export const HeaderStyled = styled("div")({
	backgroundColor: "lightgray",
	fontSize: "20px",
	padding: "5px",
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
	fontFamily: "'Acme', sans-serif",
});

export const TextareaAutosizeStyled = styled(TextareaAutosize)(({ theme, style }) => ({
	width: 200,
	fontFamily: "'Acme', sans-serif",
	fontSize: "16px",
	padding: '5px 10px',
	"&:focus-visible": {
		outlineColor: theme.palette.primary.main,
		outlineWidth: 0,
    	border: `solid 2px ${theme.palette.primary.main}`,
    	borderRadius: '5px',
	},
	"&::-webkit-input-placeholder": {
		color: style.color,
	},

	"&:-moz-placeholder": {
		/* Firefox 18- */ color: style.color,
	},

	"&::-moz-placeholder": {
		/* Firefox 19+ */ color: style.color,
	},

	"&:-ms-input-placeholder": {
		color: style.color,
	},

	"&::placeholder": {
		color: style.color,
	},
}));
