
export const themeLight = {
    palette: {
        primary: {
            main: '#ff6600'
        }
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                input: {
                    backgroundColor: 'white',
                    color: 'black',
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    
                },
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    color: 'black',     
                }
            }
        },
    }
}