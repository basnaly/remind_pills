import { DialogTitle, styled, TextareaAutosize } from "@mui/material";
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
	padding: "2px 8px",
	fontFamily: "'Acme', sans-serif",
});

export const YellowButton = styled(Button)({
	textTransform: "none",
	color: "yellow",
	border: "1px solid yellow",
	fontSize: "16px",
	backgroundColor: "lightgray",
	padding: "0 5px",
	fontFamily: "'Acme', sans-serif",
});

export const MedBoxButton = styled(Button)(({ theme, style }) => ({
	textTransform: "none",
	color: theme.palette.secondary.main,
	border: `1px solid ${theme.palette.secondary.main}`,
	fontSize: "16px",
	backgroundColor: theme.palette.third.main,
	padding: "0 5px",
	fontFamily: "'Acme', sans-serif",
}));

export const MenuItemStyled = styled(MenuItem)({
	fontFamily: "'Acme', sans-serif",
});

export const TextareaAutosizeStyled = styled(TextareaAutosize)(({ theme, style }) => ({
	width: 300,
	fontFamily: "'Acme', sans-serif",
	fontSize: "16px",
	padding: '5px 10px',
	color: theme.palette.primary.main,
	"&:focus-visible": {
		outlineColor: theme.palette.primary.main,
		outlineWidth: 0,
    	border: `solid 2px ${theme.palette.primary.main}`,
    	borderRadius: '5px',
	},
	"&::-webkit-input-placeholder": {
		color: theme.palette.secondary.main,
	},

	"&:-moz-placeholder": {
		/* Firefox 18- */ color: theme.palette.secondary.main,
	},

	"&::-moz-placeholder": {
		/* Firefox 19+ */ color: theme.palette.secondary.main,
	},

	"&:-ms-input-placeholder": {
		color: theme.palette.secondary.main,
	},

	"&::placeholder": {
		color: theme.palette.secondary.main,
	},
}));

export const DialogTitleStyled = styled(DialogTitle)(({ theme, style }) => ({
	fontFamily: "'Acme', sans-serif",
	fontSize: "20px",
}));

export const StartingDivStyled = styled('div')(({ theme, style }) => ({
	fontFamily: "'Acme', sans-serif",
	fontSize: "20px",
	color: theme.palette.primary.main,
}));

export const BoxStyled = styled(Box)(({ theme, style }) => ({
	position: "relative",
	border: `2px solid ${theme.palette.primary.main}`,
	borderRadius: "10px",
	backgroundColor: "#ffffff60",
	fontFamily: "'Acme', sans-serif",
}));

export const NameMedicineStyled = styled("div")({
	fontSize: "22px",
	paddingBottom: "10px",
});

export const DataMedicineStyled = styled("div")(({ theme, style }) => ({
	fontSize: "18px",
	color: theme.palette.primary.main,
}));

export const DialogTitleLogStyled = styled(DialogTitle)({
	fontSize: "22px",
	fontFamily: "'Acme', sans-serif",
});
