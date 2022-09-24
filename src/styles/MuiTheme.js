import { createTheme } from '@mui/material/styles';

export const myTheme = createTheme({
    palette: {
        primary: {
            main: '#ffa64d'
        }
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                input: {
                    fontFamily: "'Acme', sans-serif",
                    fontSize: '16px',
                    color: 'black',
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    fontFamily: "'Acme', sans-serif",
                    fontSize: '14px',
                },
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: 'black',
                    fontFamily: "'Acme', sans-serif",
                    fontSize: '14px',
                }
            }
        },
    }
})